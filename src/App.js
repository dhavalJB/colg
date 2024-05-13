import React from 'react';
import Shop from './shop'; // Import the Shop component

function App() {
  // Function to determine which component to render based on the URL path
  const renderComponent = () => {
    const path = window.location.pathname;
    if (path === '/shop') {
      return <Shop />;
    } else {
      return (
        <div className="w3-content" style={{ maxWidth: "1500px" }}>

          {/* Header */}
          <header className="w3-container w3-xlarge w3-padding-24">
            <a href="/" className="w3-left w3-button w3-white">Mosaic Art Shop</a>
            <a href="/shop" className="w3-right w3-button w3-white">Shop</a> {/* Added Link to Shop page */}
            <a href="#about" className="w3-right w3-button w3-white">About</a>
          </header>

          {/* Photo Grid */}
          <div className="w3-row">
            <div className="w3-half">
              <img src="https://m.media-amazon.com/images/I/81uH6UKmgRL._AC_UF1000,1000_QL80_.jpg" style={{ width: "100%" }} alt="image1" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSip45YsNnzm1eg7fBzhxhegLP-Sg7x8NKD2Y5Rlv0N_A&s" style={{ width: "100%" }} alt="image2" />
              <img src="https://m.media-amazon.com/images/I/717u+lhmMzL._AC_UF1000,1000_QL80_.jpg" style={{ width: "100%" }} alt="image3" />
            </div>

            <div className="w3-half">
              <img src="https://craftcart.in/media/catalog/product/cache/3b6d351d86f4df6d8877e0c54d3958ee/c/c/ccwma23101.jpg" style={{ width: "100%" }} alt="image4" />
              <img src="https://diybaazar.com/publicuploads/seller/products/mirror-mosaic-art-1-1_1708371134.jpg" style={{ width: "100%" }} alt="image5" />
            </div>
          </div>

          {/* Footer / About Section */}
          <footer className="w3-light-grey w3-padding-64 w3-center" id="about">
            <h2>About</h2>
            <img src="https://pics.craiyon.com/2023-10-13/849575610df7463ab8df7ce2abffb812.webp" className="w3-image w3-padding-32" width="300" height="300" alt="about-image" />
            <form style={{ margin: "auto", width: "60%" }} action="/action_page.php" target="_blank">
              <p>As Mosaic Art, we're passionate about the intricate beauty of mosaic art. Each piece in our collection is a testament to craftsmanship and creativity, meticulously handcrafted to add elegance and charm to any space. From traditional designs to modern marvels, our artworks speak volumes about our dedication to quality and style. Explore our gallery and discover the perfect mosaic masterpiece to adorn your home or office.
              </p>
              <p className="w3-large w3-text-pink">Give us your valuable Feedback</p>
              <div className="w3-section">
                <label><b>Name</b></label>
                <input className="w3-input w3-border" type="text" required name="Name" />
              </div>
              <div className="w3-section">
                <label><b>Email</b></label>
                <input className="w3-input w3-border" type="text" required name="Email" />
              </div>
              <div className="w3-section">
                <label><b>Message</b></label>
                <input className="w3-input w3-border" required name="Message" />
              </div>
              <button type="submit" className="w3-button w3-block w3-dark-grey">Send</button>
            </form>
            <br />
          </footer>

        </div>
      );
    }
  };

  return renderComponent();
}

export default App;
