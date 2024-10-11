var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
  const berita =[
    {
        judul : "Berita 1",
        isi : "Isi Berita 1",
    },
    {
        judul : "Berita 2",
        isi : "Isi Berita 2",
    },
   ];
   res.render('index', {title: 'Halaman Home', berita,  layout:'main'});;

module.exports = router;
