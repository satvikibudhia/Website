import React, { useState, useEffect } from 'react';
import gdscImage from "./images/team.png";
import Switch from"./switchteam.js";
const ItemCard = ({ image, name, text }) => {
    return (
      <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', width: '200px' }}>
        <img src={image} alt={name} style={{ maxWidth: '100%', height: 'auto' }} />
        <h3>{name}</h3>
        <p>{text}</p>
      </div>
    );
};

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      <div
        className="content"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "5%",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          className="content-wrapper"
          style={{
            display: "flex",
            flexDirection: windowWidth < 600 ? "column" : "row",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            maxWidth: "1200px",
            margin: "0 auto",
            height: windowWidth < 600 ? "auto" : "25vw",
            marginTop: "0",
            marginBottom: windowWidth < 600 ? "20px" : "-75px",
            position: "relative",
            zIndex: 2,
          }}
        >
          <img
            src={gdscImage}
            alt="GDSC"
            style={{
              width: "auto",
              height: windowWidth < 600 ? "30vh" : "50vh",
              paddingLeft: windowWidth < 600 ? "10%" : "0%",
              paddingTop: windowWidth < 600 ? "10%" : "0%",
              maxWidth: "480px",
              borderRadius: "10px",
              marginRight: "0",
              position: "relative",
              zIndex: 2,
            }}
          />

          {/* Right Box (Content) */}
          <div
            className="right-box"
            style={{
              borderRadius: "10px",
              padding: "5%",
              flex: "1",
              height: "100%",
              boxShadow: "none",
              boxSizing: "border-box",
              overflowY: "hidden",
              position: "relative",
              zIndex: 2,
            }}
          >
            {/* Heading */}
            <h1
              style={{
                fontSize: windowWidth < 600 ? "3vw" : "2vw",
                marginBottom: windowWidth < 600 ? "1vw" : "20px",
                textAlign: "left",
              }}
            >
              Our Team
            </h1>

            {/* Updated Content */}
            <p
              style={{
                fontSize: windowWidth < 600 ? "2.65vw" : "1.2vw",
                marginBottom: windowWidth < 600 ? "1vw" : "3vw",
              }}
            >
                <b>
                  The ones who are making it happen...
                </b><br/>

                Learning goes hand-in-hand with building new and cool stuff. With our incredible team, we aim to solve numerous problems in day-to-day life and explore new heights in technology!
            </p>
          </div>
        </div>

        {/* New Section with 2 Item Cards */}
        <div style={{ marginTop: '50px', textAlign: 'center' }}>
          <h2>New Section</h2>
          <div style={{ display: 'flex', flexDirection: windowWidth < 600 ? 'column' : 'row', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
            {/* Item Cards */}
            <ItemCard
              image={require('./team_images/prachi_lal.png')}
              name="Prachi Lal"
              text="Technical Lead"
            />
            <ItemCard
              image={require('./team_images/ananya_vashisht.png')}
              name="Ananya Vashisht"
              text="Non-Technical Lead"
            />
          </div>
        </div>
      </div>
      <Switch />
    </div>
 
  );
}

export default App;
