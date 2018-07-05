var sass = require('node-sass');
sass.render({
  file: './sass/GDPRCustom.scss',
  outFile: './css/index.css',
}, function(err, result) { console.log(err,result) });