import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Login } from "../api/User";
import styles from "./LoginPage.module.css";

function LoginPage({ setCurrentUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  const handleLogin = async () => {
    try {
      const response = await Login(email, password);
      if (response.error) {
        setError(response.error);
      } else {
        setCurrentUser(true);
        localStorage.setItem("token", response.token);
        navigate("/");
      }
    } catch (error) {
      setError("Failed to login. Please try again.");
      console.error("Login error:", error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <h1 className={styles.header}>Already have an account?</h1>
        <p className={styles.subheader}>Your personal job finder is here</p>
        <input
          type="email"
          placeholder="Email"
          value={email}
          className={styles.input}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          className={styles.input}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className={styles.button} onClick={handleLogin}>
          Login
        </button>
        {error && <div className={styles.error}>{error}</div>}
        <div
          className={styles.signupRedirect}
          onClick={() => navigate("/signup")}
        >
          Don't have an account? Sign Up
        </div>
      </div>
      <div className={styles.rightSide}>
        <h1>Your personal job finder</h1>
      </div>
    </div>
  );
}

export default LoginPage;



