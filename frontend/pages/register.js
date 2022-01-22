import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import Layout from '../components/Layout';
import styles from '../styles/Register.module.css';
import Link from 'next/link';

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  console.log(username, email, password);

  async function submitForm(e) {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    });

    await router.push('/login');
  }
  return (
    <Layout headTitle={'Register'}>
      {/* <h2>Register</h2>
      <hr /> */}
      <div className={styles.register_form}>
        <form onSubmit={submitForm} className={styles.form}>
          <label>Username</label>
          <br />
          <input
            type="text"
            name="username"
            value={username}
            placeholder="username"
            className={styles.input}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <br />

          <label>Email</label>
          <br />
          <input
            type="text"
            name="email"
            value={email}
            placeholder="email"
            className={styles.input}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />

          <label>Password</label>
          <br />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="password"
            className={styles.input}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <input type="submit" value="Sign Up" />
          <p>
            Already a user?{' '}
            <Link href="/login">
              <a>sign in here.</a>
            </Link>
          </p>
        </form>
      </div>
    </Layout>
  );
}
