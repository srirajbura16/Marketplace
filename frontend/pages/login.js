//login form
import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import jwt from 'jsonwebtoken';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState("you're not logged in");
  const router = useRouter();
  console.log(username, password);

  async function submitForm(e) {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
      credentials: 'include',
    });

    const data = await res.json();
    console.log(data);

    const token = data.token;
    if (token) {
      const User = jwt.decode(token);
      setMessage('Welcome ' + User.username);
    } else {
      setMessage('something went wrong');
    }

    // await router.push('/test');
  }
  return (
    <div>
      <h1>{message}</h1>
      <div className="">
        Not a user? <Link href="/register">Register</Link>
      </div>
      <form onSubmit={submitForm}>
        <input
          type="text"
          name="username"
          value={username}
          placeholder="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <br />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}
