const path = require('path');

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [['react-app', { flow: false, typescript: true }]],
    },
  });
  config.resolve.extensions.push('.ts', '.tsx');
  config.resolve.alias = {
    '@': path.resolve(__dirname, '../src/'),
    '@config': path.resolve(__dirname, '../config/'),
    '@atoms': path.resolve(__dirname, '../src/components/atoms/'),
    '@molecules': path.resolve(__dirname, '../src/components/molecules/'),
    '@organisms': path.resolve(__dirname, '../src/components/organisms/'),
    '@templates': path.resolve(__dirname, '../src/components/templates/'),
    '@hooks': path.resolve(__dirname, '../src/hooks/'),
    '@adapters': path.resolve(__dirname, '../src/adapters/'),
    '@helpers': path.resolve(__dirname, '../src/helpers/'),

  };

  config.module.rules.push({
    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: '../fonts/',
        },
      },
    ],
  });

  config.module.rules.push({
    test: /\.xml$/,
    use: [{ loader: 'ignore-loader' }],
  });

  return config;
};
