function CartItem({ cart, removeItem, updateQuantity }) {

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Total: ${total}</h2>

      {cart.map(item => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>
          <p>Total: ${item.price * item.quantity}</p>

          <button onClick={() => updateQuantity({ id: item.id, quantity: item.quantity - 1 })}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => updateQuantity({ id: item.id, quantity: item.quantity + 1 })}>+</button>

          <button onClick={() => removeItem(item.id)}>Delete</button>
        </div>
      ))}

      <button onClick={() => alert("Coming Soon")}>Checkout</button>
      <button>Continue Shopping</button>
    </div>
  );
}
