import React from "react";
import mascot from "../assets/mascot.png";

function Sign_Up() {
  return (
    <main id="signup_main">
      <section id="inner_signup">
        <form action="">
          <h2>Join the BopSquatch community! 🎉</h2>

          <div id="signup_shortcuts">
            <button></button>
            <button></button>
            <button></button>
          </div>

          <div id="signup_box">
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <input type="date" />
            <input type="file" />
            <span>
              Already have an account? <a id="login" href="/login">Login</a>
            </span>
          </div>

                  <button id="sign_up_button">Sign Up</button>
        </form>

              <div id="mascot_poses">
        <img src={mascot} alt="Mascot Pose 1" />
              </div>
      </section>
    </main>
  );
}

export default Sign_Up;
