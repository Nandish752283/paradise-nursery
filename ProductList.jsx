import { useState } from "react";

const plantData = {
  Succulents: [
    { id: 1, name: "Aloe Vera", price: 10, image: "https://via.placeholder.com/100" },
    { id: 2, name: "Cactus", price: 8, image: "https://via.placeholder.com/100" },
    { id: 3, name: "Jade Plant", price: 12, image: "https://via.placeholder.com/100" },
    { id: 4, name: "Agave", price: 15, image: "https://via.placeholder.com/100" },
    { id: 5, name: "Echeveria", price: 9, image: "https://via.placeholder.com/100" },
    { id: 6, name: "Haworthia", price: 11, image: "https://via.placeholder.com/100" }
  ],
  Indoor: [
    { id: 7, name: "Snake Plant", price: 15, image: "https://via.placeholder.com/100" },
    { id: 8, name: "Peace Lily", price: 18, image: "https://via.placeholder.com/100" },
    { id: 9, name: "Spider Plant", price: 14, image: "https://via.placeholder.com/100" },
    { id: 10, name: "Rubber Plant", price: 20, image: "https://via.placeholder.com/100" },
    { id: 11, name: "Bamboo", price: 16, image: "https://via.placeholder.com/100" },
    { id: 12, name: "ZZ Plant", price: 19, image: "https://via.placeholder.com/100" }
  ],
  Outdoor: [
    { id: 13, name: "Fern", price: 12, image: "https://via.placeholder.com/100" },
    { id: 14, name: "Palm", price: 22, image: "https://via.placeholder.com/100" },
    { id: 15, name: "Hibiscus", price: 17, image: "https://via.placeholder.com/100" },
    { id: 16, name: "Rose", price: 13, image: "https://via.placeholder.com/100" },
    { id: 17, name: "Tulip", price: 11, image: "https://via.placeholder.com/100" },
    { id: 18, name: "Sunflower", price: 10, image: "https://via.placeholder.com/100" }
  ]
};

function ProductList() {
  const [cart, setCart] = useState([]);

  const addToCart = (plant) => {
    setCart([...cart, plant]);
  };

  return (
    <div>

      {/* ✅ NAVBAR */}
      <nav>
        <h2>🌿 Paradise Nursery</h2>
        <div>
          <span>Home</span> | <span>Plants</span> | <span>Cart ({cart.length})</span>
        </div>
      </nav>

      {/* ✅ CATEGORY LOOP */}
      {Object.keys(plantData).map((category) => (
        <div key={category}>
          <h2>{category}</h2>

          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            
            {/* ✅ PLANT LOOP */}
            {plantData[category].map((plant) => (
              <div key={plant.id} style={{ border: "1px solid gray", padding: "10px" }}>
                
                {/* ✅ IMAGE */}
                <img src={plant.image} alt={plant.name} />

                {/* ✅ NAME */}
                <h3>{plant.name}</h3>

                {/* ✅ PRICE */}
                <p>${plant.price}</p>

                {/* ✅ BUTTON */}
                <button
                  onClick={() => addToCart(plant)}
                  disabled={cart.find(item => item.id === plant.id)}
                >
                  {cart.find(item => item.id === plant.id)
                    ? "Added"
                    : "Add to Cart"}
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
