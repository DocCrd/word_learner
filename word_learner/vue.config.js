module.exports = {
  chainWebpack: config => {
    config.module
      .rule('csv')
      .test(/\.csv$/)
      .use('csv-loader')
      .loader('csv-loader')
      .end()
       .rule('url')
       .test(/\.(png|woff|woff2|eot|ttf|svg)$/)
       .use('url-loader')
       .loader('url-loader')
       .end()
  }
};
