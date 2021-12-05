module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/ads',
        destination: '/',
        permanent: true,
      },
    ];
  },
};
