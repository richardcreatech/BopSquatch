import React, { useEffect, useState } from "react";
import mascot from "../assets/mascot.png";
import supabase from "../config/supabase_client";

function Sign_Up() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    profile_pic: null,
  });

  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!formData.email || !formData.password || !formData.username) {
      alert("Please fill all required fields");
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            username: formData.username,
          },
        },
      });

      if (error) throw error;

      // 🔥 CRITICAL FIX: STOP execution if no session
      if (!data.session) {
        alert("Check your email to confirm your account.");
        return;
      }

      const user = data.user;

      // ✅ Now we KNOW user is authenticated
      if (formData.profile_pic) {
        const fileExt = formData.profile_pic.name?.split(".").pop() || "png";

        const filePath = `${user.id}/avatar.${fileExt}`;

        const { error: uploadError } = await supabase.storage
          .from("avatars")
          .upload(filePath, formData.profile_pic, {
            upsert: true,
          });

        if (uploadError) throw uploadError;

        const { data: publicUrlData } = supabase.storage
          .from("avatars")
          .getPublicUrl(filePath);

        const avatarUrl = publicUrlData.publicUrl;

        const { error: upsertError } = await supabase.from("profiles").upsert({
          id: user.id,
          avatar_url: avatarUrl,
        });

        if (upsertError) throw upsertError;
      }

      alert("Sign up successful!");
    } catch (err) {
      alert("Error signing up: " + err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <main id="signup_main">
      <section id="inner_signup">
        <form onSubmit={handleSubmit}>
          <h2>Join the BopSquatch community! 🎉</h2>

          <div id="signup_shortcuts">
            <button type="button"></button>
            <button type="button"></button>
            <button type="button"></button>
          </div>

          <div id="signup_box">
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />

            <input type="file" name="profile_pic" onChange={handleChange} />
            <span>
              Already have an account?{" "}
              <a id="login" href="/login">
                Login
              </a>
            </span>
          </div>

          <button id="sign_up_button" disabled={loading}>
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>

        <div id="mascot_poses">
          <img src={mascot} alt="Mascot Pose 1" />
        </div>
      </section>
    </main>
  );
}

export default Sign_Up;
