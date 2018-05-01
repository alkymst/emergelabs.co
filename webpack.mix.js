let mix = require('laravel-mix');

const resources = 'resources';
const assets    = `${resources}/assets`;
const dist      = 'dist/assets';

mix.setPublicPath(dist);

mix.webpackConfig({
  node : {
      console: true,
      fs: 'empty',
      net: 'empty',
      tls: 'empty'
  },
  resolve: {
    alias: {
        querystring: 'querystring-browser'
      }
  }
});

mix.autoload({
   'jquery': ['$', 'window.jQuery', "jQuery", "window.$", "jquery", "window.jquery"],
   'popper.js/dist/umd/popper.js': ['Popper', 'window.Popper']
});

mix.js(`${assets}/scripts/main.js`, `${dist}/scripts`);
mix.sass(`${assets}/styles/main.scss`, `${dist}/styles/main.css`);

mix.copy(`${assets}/fonts`, `${dist}/fonts`, false)
   .copy(`${assets}/images`, `${dist}/images`, false)
   .copy(`${assets}/favicon.ico`, `dist/favicon.ico`, false);

if (!mix.inProduction()) {
  mix.sourceMaps();
}
