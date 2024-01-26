import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51ObKHJKtMZDHrwRuZeUnnHEPk2YVOiULNUya2iRp7flNyeboDcxojifgs4XeYQSitB7HQYYlY9BVjkhAJEpSJm8K00IVqLlNSe"
);

const Cart = () => {
  const [cart, setCart] = useState([]);

  const handleCheckout = async () => {
    // Create a checkout session with Stripe
    const stripe = await stripePromise;

    const response = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cart }),
    });
    const session = await response.json();

    // Redirect to Stripe checkout page
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      // Handle error
      console.error(result.error.message);
    }
  };

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (itemToRemove) => {
    setCart(cart.filter((item) => item !== itemToRemove));
  };

  return (
    <div>
      <h2>Cart</h2>
      {cart.map((item, index) => (
        <div key={index}>
          <p>{item.name}</p>
          <button onClick={() => removeFromCart(item)}>Remove</button>
        </div>
      ))}
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default Cart;
