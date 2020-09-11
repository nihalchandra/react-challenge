import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="24395680"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={29.99}
            image={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSWK7QjVSjP9vhw4uXjrFw4nRFy9szVsiFQQu31UfQ3Ka7M7EGBknJNDHfYH8iKXvBAHpkaxLo&usqp=CAc"
            }
            rating={5}
          />
          <Product
            id="54678912"
            title="Newest Flagship Sony Play Station 4 1TB HDD Only on Playstation PS4 Console Slim Bundle - Included 3X Games (The Last of Us, God of War, Horizon Zero Dawn) 1TB Hard Drive Incredible Games -Jet Black"
            price={399.99}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/71ZrwxeXnXL._AC_SL1500_.jpg"
            }
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="23409812"
            title="LEGO Creator Expert Old Trafford - Manchester United 10272 Building Kit for Adults and Collector Toy, New 2020 (3,898 Pieces)"
            price={199.99}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/81wQUlIVRsL._AC_SL1500_.jpg"
            }
            rating={5}
          />
          <Product
            id="29876523"
            title="JoJo's Bizarre Adventure Part 3: Chozo Kado Jotaro Kujo 1.5 Super Action Statue Figure, Multicolor"
            price={114.5}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/61sliPnygYL._AC_SL1500_.jpg"
            }
            rating={4}
          />
          <Product
            id="29334568"
            title="
            Apple iPhone XS Max, 64GB, Silver - Fully Unlocked (Renewed)"
            price={589.97}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/61hBc3oHjyL._AC_SL1500_.jpg"
            }
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung 32-Inch UR590C UHD 4K Curved Gaming Monitor (LU32R590CWNXZA) – 60Hz Refresh, Widescreen Computer Monitor, 3840 x 2160p Resolution, 4ms Response, Game Mode, HDMI, Dark Blue Gray"
            price={449.99}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/91BlpmYWl-L._AC_SL1500_.jpg"
            }
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
