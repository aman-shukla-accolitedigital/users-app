module.exports = {
  presets: [
    '@babel/preset-typescript', // For TypeScript,
      '@babel/preset-env',
      ['@babel/preset-react', { runtime: 'automatic' }],
      ],
  };