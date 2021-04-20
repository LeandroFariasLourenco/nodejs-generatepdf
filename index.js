const pdf = require('html-pdf');
const { v1 } = require('uuid');
const ejs = require('ejs');

ejs.renderFile('./template/main.ejs', (err, html) => {
  if (err) return console.log(err);
  pdf.create(html, {}).toFile(`./${v1()}.pdf`, (err, res) => {
    if (err) return console.log(err);

    console.log(res);
  });
});

