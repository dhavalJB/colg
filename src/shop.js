import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './shop.css';
import Bill from './bill';

function Shop() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleBuyNow = (item) => {
    setSelectedItem(item);
  };

  return (
    <div>
      <header className="w3-container w3-xlarge w3-padding-24">
        <Link to="/" className="w3-left w3-button w3-white">Mosaic Art Shop</Link>
        <Link to="/" className="w3-left w3-button w3-white">Home</Link> {/* Change Cart to Home */}
      </header>

      <div className="card-container">
        <div className="card">
          <img src="https://i.etsystatic.com/20118596/r/il/9afe67/1867081070/il_fullxfull.1867081070_9jsg.jpg" alt="Denim Jeans" style={{ width: "100%" }} />
          <h1>Sailing Ship</h1>
          <p className="price">$10.99</p>
          <p>"Captivating mosaic art featuring a majestic sailing ship, crafted with intricate detail and vibrant colors."</p>
          <p><button onClick={() => handleBuyNow({ name: "Sailing Ship", price: 10.99 })}>Buy Now</button></p>
        </div>
        <div className="card">
          <img src="https://m.media-amazon.com/images/I/81DZCElfS-L._AC_UF1000,1000_QL80_.jpg" alt="Denim Jeans" style={{ width: "100%" }} />
          <h1>Beautiful Landscape</h1>
          <p className="price">$9.99</p>
          <p>"Mosaic art captures the breathtaking beauty of a serene evening sunset landscape in intricate detail."</p>
          <p><button onClick={() => handleBuyNow({ name: "Beautiful Landscape", price: 9.99 })}>Buy Now</button></p>
        </div>
        <div className="card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi7-Duv0FJu7aLl6NcXOZLxbbfxGtN6fK3BbSNTl6l2AwkvFWhpTmLzfTmPdfhmZRQfZA&usqp=CAU" alt="Denim Jeans" style={{ width: "100%" }} />
          <h1>Mountain Sunset</h1>
          <p className="price">$13.99</p>
          <p>"Mosaic art capturing the serene beauty of a sunset behind mountain silhouettes framed by the branches of a tree."</p>
          <p><button onClick={() => handleBuyNow({ name: "Mountain Sunset", price: 13.99 })}>Buy Now</button></p>
        </div>
        <div className="card">
          <img src="https://www.amexessentials.com/wp-content/uploads/2021/09/Mosaics-Opener-600x390.jpg" alt="Denim Jeans" style={{ width: "100%" }} />
          <h1>Eye Gaze</h1>
          <p className="price">$19.99</p>
          <p>"Mosaic art captures the soulful gaze of the eye with intricately arranged fragments, embodying depth, emotion, and timeless beauty."</p>
          <p><button onClick={() => handleBuyNow({ name: "Eye Gaze", price: 19.99 })}>Buy Now</button></p>
        </div>
        <div className="card">
          <img src="https://m.media-amazon.com/images/I/717u+lhmMzL._AC_UF1000,1000_QL80_.jpg" alt="Denim Jeans" style={{ width: "100%" }} />
          <h1>Ganesha</h1>
          <p className="price">$19.99</p>
          <p>"Mosaic art of Lord Ganesha embodies divine beauty through intricate tile arrangements."</p>
          <p><button onClick={() => handleBuyNow({ name: "Ganesha", price: 19.99 })}>Buy Now</button></p>
        </div>
        <div className="card">
          <img src="https://storage.googleapis.com/pai-images/61edf17df78c4e69a18904fcbc3459c2.jpeg" alt="Denim Jeans" style={{ width: "100%" }} />
          <h1>River</h1>
          <p className="price">$5.99</p>
          <p>"Mosaic Art Depicting a flowing river captures the dynamic movement and serenity of water through intricately arranged tesserae."</p>
          <p><button onClick={() => handleBuyNow({ name: "River", price: 5.99 })}>Buy Now</button></p>
        </div>
        <div className="card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoGRZxzSa1251gXQRZJ0LbBRwMleqjrgDBlwuFUscLTxQz-DI1ziodDTqLse_QlvMJFCk&usqp=CAU" alt="Denim Jeans" style={{ width: "100%" }} />
          <h1>Evening</h1>
          <p className="price">$19.99</p>
          <p>"Mosaic art enhances the walkway, weaving through trees and gardens with vibrant colors and intricate designs, creating an enchanting journey."</p>
          <p><button onClick={() => handleBuyNow({ name: "Evening", price: 19.99 })}>Buy Now</button></p>
        </div>
        <div className="card">
          <img src="https://i.etsystatic.com/27717663/r/il/397b95/3940483320/il_570xN.3940483320_q1bt.jpg" alt="Denim Jeans" style={{ width: "100%" }} />
          <h1>Simple Art</h1>
          <p className="price">$10.99</p>
          <p>Mosaic art is the intricate arrangement of small, colored pieces (such as glass, stone, or tile) to create visually stunning designs or images.</p>
          <p><button onClick={() => handleBuyNow({ name: "Simple Art", price: 10.99 })}>Buy Now</button></p>
        </div>
        <div className="card">
          <img src="https://i.etsystatic.com/7176965/r/il/56990d/364772908/il_570xN.364772908_1ld2.jpg" alt="Denim Jeans" style={{ width: "100%" }} />
          <h1>Mosaic tee</h1>
          <p className="price">$19.99</p>
          <p>"Mosaic art is the intricate arrangement of small, colored pieces to create a cohesive image or pattern, akin to assembling a simple yet captivating tree."</p>
          <p><button onClick={() => handleBuyNow({ name: "Mosaic tee", price: 19.99 })}>Buy Now</button></p>
        </div>
      </div>
      <p style={{ color: "#666", fontSize: "14px", textAlign: "center" }}>© 2024 Mosaic Art Shop. All rights reserved.</p>
      {selectedItem && <Bill item={selectedItem} />}
    </div>
  );
}

export default Shop;
