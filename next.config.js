module.exports = {
  async rewrites() {
    return [
      {
        source: '/',
        destination: 'https://app.olimpiadas.app/teste',
      },
    ];
  },
};
