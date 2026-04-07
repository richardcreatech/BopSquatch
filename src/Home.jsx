import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUsers, faHeart } from "@fortawesome/free-solid-svg-icons";
import logo from "./assets/logo.png";
import Mascot from "./assets/mascot.png";

function Home() {
  return (
    <>
      <header id="home_header">
        <h2>BopSquatch</h2>
        <button id="get_started">Get Started</button>
      </header>
      <main id="home_main">
        <div id="side_1">
          <h1>Socializing Just Got <br /> an Upgrade</h1>
          <p>Let’s Socialize in a brand new way today!!</p>
          <div id="buttons">
            <button id="login">Get Started</button>
            <button id="sign_up">Sign Up</button>
          </div>
        </div>

        <div id="side_2">
          <img src={Mascot} alt="BopSquatch Mascot" id="mascot" />
        </div>
      </main>

      <footer id="home_footer">
        <div id="inner_footer">
                  <span>
                      <FontAwesomeIcon icon={faUser} />
                      <p>Find Ur Padi</p>
          </span>
                  <span>
                      <FontAwesomeIcon icon={faUsers} />
                      <p>No Negative Energy </p>
          </span>
                  <span>
                      <FontAwesomeIcon icon={faHeart} />
                      <p>Make A Post</p>
          </span>
        
        </div>
      </footer>
    </>
  );
}

export default Home;
