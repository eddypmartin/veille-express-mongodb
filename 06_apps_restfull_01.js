var express = require('express');
var app = express();
var fs = require("fs");
app.use(express.static('public'));

app.get('___________', function (req, res) {
   fs.readFile( __dirname + "/___________/" + "usagers.json", 'utf8', function (err, data) {
       console.log( data );
       res.end(____________);
   });
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Exemple l'application écoute sur http://%s:%s", host, port)

})