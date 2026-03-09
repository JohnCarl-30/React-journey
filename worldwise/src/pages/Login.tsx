import React, { useState, type ChangeEvent, type FormEvent } from "react";
import styles from "./Login.module.css";

export default function Login() {
  // 1. Explicitly type state (optional but good practice)
  const [email, setEmail] = useState<string>("jack@example.com");
  const [password, setPassword] = useState<string>("qwerty");

  // 2. Type the form submission handler
  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    
    if (email && password) {
      console.log("Logging in with:", { email, password });
    }
  }

  return (
    <main className={styles.login}>
   
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            // 3. Type the input change event
            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
       
          <button type="submit">Login</button>
        </div>
      </form>
    </main>
  );
}