module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/ads',
        destination: '/',
        permanent: true,
      },
      {
        source: '/login',
        destination: '/api/auth/signin',
        permanent: true,
      },
    ];
  },
  env: {
    BASE_URL: process.env.API_URL,
  },
};
