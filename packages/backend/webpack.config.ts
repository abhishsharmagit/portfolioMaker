module.exports = {
  entry: {
    'template1/js/bundle': './assets/template1/js/app.js',
    'template2/js/bundle': './assets/template2/app.js',
  },
  mode: 'development',
  output: {
    path: `${__dirname}/dist`,
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(js)x?$/,
        exclude: [/node_modules/],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.ttf$/i,
        use: ['file-loader'],
      },
      {
        test: /\.(svg|gif|png|eot|woff|ttf)$/,
        use: ['url-loader'],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
