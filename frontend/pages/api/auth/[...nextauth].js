import CredentialsProvider from 'next-auth/providers/credentials';

const options = {
  providers: [
    CredentialsProvider({
      name: 'Custom Provider',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'text' },
      },
      async authorize(credentials) {
        //https://next-auth.js.org/configuration/providers/credentials
        //fetch user here with credentials provided
        const url = 'http://localhost:5000/api/auth/login';
        const res = await fetch(url, {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { 'Content-Type': 'application/json' },
        });

        const user = await res.json();

        if (res.ok && user) {
          return user;
        }

        return null;
      },
    }),
  ],
  session: {
    jwt: true,
  },
};

export default options;
