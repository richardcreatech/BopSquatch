import React from "react";
import logo from "../assets/logo.jpg";
import supabase from "../config/supabase_client";

function Login() {

  

  return (
    <main id="login_main">
      <form>
              <div id="login_header">
                  <img src={logo} alt="" />
                  <h2>Welcome back 👋!</h2>
              </div>

        <div id="login_box">
          <input type="text" placeholder="Username" />
                  <input type="password" placeholder="Password" />
                  <span>
            Don't have an account? <a href="/signup">Sign up</a>
                  </span>
          <button type="submit">Login</button>
        </div>
              

      </form>
    </main>
  );
}

export default Login;
