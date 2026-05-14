import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./store/CartSlice";
import { useState } from "react";

const plants = {
  "Tropical": [
    { name: "Monstera", price: 15 }, { name: "Bird of Paradise", price: 25 },
    { name: "Pothos", price: 8 },   { name: "Peace Lily", price: 12 },
    { name: "Philodendron", price: 10 }, { name: "Anthurium", price: 20 },
  ],
  "Succulents": [
    { name: "Aloe Vera", price: 7 },  { name: "Echeveria", price: 6 },
    { name: "Jade Plant", price: 9 }, { name: "Haworthia", price: 8 },
    { name: "Cactus", price: 5 },     { name: "Sedum", price: 6 },
  ],
  "Flowering": [
    { name: "Orchid", price: 18 },    { name: "African Violet", price: 10 },
    { name: "Bromeliad", price: 14 }, { name: "Begonia", price: 9 },
    { name: "Kalanchoe", price: 11 }, { name: "Cyclamen", price: 13 },
  ],
};

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(s => s.cart.items);
  const [added, setAdded] = useState([]);

  const inCart = (name) => added.includes(name);

  const handleAdd = (plant) => {
    dispatch(addItem(plant));
    setAdded(prev => [...prev, plant.name]);
  };

  return (
    <div style={{ padding: "20px" }}>
      {Object.entries(plants).map(([category, items]) => (
        <div key={category}>
          <h2>{category}</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
            {items.map(plant => (
              <div key={plant.name} style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "12px", width: "140px", textAlign: "center" }}>
                <div style={{ fontSize: "3rem" }}>🌿</div>
                <p><strong>{plant.name}</strong></p>
                <p>${plant.price}</p>
                <button
                  disabled={inCart(plant.name)}
                  onClick={() => handleAdd(plant)}
                  style={{ background: inCart(plant.name) ? "#aaa" : "green", color: "white", border: "none", padding: "6px 12px", borderRadius: "4px", cursor: inCart(plant.name) ? "not-allowed" : "pointer" }}
                >
                  {inCart(plant.name) ? "Added" : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
