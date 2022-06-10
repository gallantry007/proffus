import React from 'react';
import {HashLink as Link} from 'react-router-hash-link'

const MyCart = () => {
  return (
    <div className="MyCart">
      <div id="MyCart">
        <div className="MyCar">
        <h1>Book your fresh and Delicious Fish</h1>
        </div>
      </div>
      <div className="MyCart-info">
        <h1>Fresh Fishes at SeaBasket</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar accumsan velit commodo tristique. Sed vel enim ut purus egestas euismod. Pellentesque sodales dolor id ultrices vestibulum. Donec sit amet massa interdum, tincidunt leo vitae, porta ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus semper vitae turpis vel accumsan. Praesent congue laoreet dapibus. Nam sed dignissim eros. Morbi ex velit, dapibus ultrices tortor non, gravida scelerisque felis. Quisque placerat et erat ut rutrum. Donec et dictum risus. Mauris ultricies odio eros, a viverra lacus facilisis vel</p>
     
      </div>
      <div className="MyCart-select">
        <Link smooth to="#login" class="one">
          <div className="card">
            <h1>Regular Services</h1>
            <div className="price">
              <p>$799</p>
            </div>
          </div>
        </Link>
        <Link smooth to="#login" class="two">
          <div className="card">
            <h1>Exclusive Dining</h1>
            <div className="price">
              <p>$1199</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MyCart;
