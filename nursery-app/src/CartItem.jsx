import { useDispatch, useSelector } from "react-redux";
import { removeItem, increaseQuantity, decreaseQuantity } from "./store/CartSlice";

function CartItem({ onContinue }) {
  const dispatch = useDispatch();
  const items = useSelector(s => s.cart.items);
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Shopping Cart</h2>
      {items.length === 0 ? <p>Your cart is empty.</p> : (
        <>
          {items.map(item => (
            <div key={item.name} style={{ display: "flex", alignItems: "center", gap: "16px", borderBottom: "1px solid #eee", padding: "10px 0" }}>
              <span style={{ fontSize: "2rem" }}>🌿</span>
              <div style={{ flex: 1 }}>
                <strong>{item.name}</strong>
                <p>Unit price: ${item.price} | Total: ${item.price * item.quantity}</p>
              </div>
              <button onClick={() => dispatch(decreaseQuantity(item.name))}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => dispatch(increaseQuantity(item.name))}>+</button>
              <button onClick={() => dispatch(removeItem(item.name))} style={{ color: "red" }}>🗑</button>
            </div>
          ))}
          <h3>Total: ${total}</h3>
          <button onClick={() => alert("Coming Soon!")} style={{ background: "green", color: "white", padding: "10px 20px", border: "none", borderRadius: "6px", cursor: "pointer", marginRight: "10px" }}>Checkout</button>
          <button onClick={onContinue} style={{ padding: "10px 20px", borderRadius: "6px", cursor: "pointer" }}>Continue Shopping</button>
        </>
      )}
    </div>
  );
}

export default CartItem;
