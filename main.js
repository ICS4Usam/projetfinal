function sauvegarder() {
  var message = document.getElementById("text");
  var title = document.getElementById("txt_title");

  if (uploadedimage != "" && message.value != "" && title.value != "") {
    var elem = document.createElement("img");
    elem.setAttribute("src", uploadedimage);
    elem.setAttribute("alt", "img");

    var link = document.createElement('a')
    var title_txt = title.value;
    console.log(title_txt);

    document.getElementsByClassName("txt_1")[0].textContent = message.value;
    document.getElementsByClassName("img_1")[0].appendChild(elem);

    const express = require('express');
    const fs = require('fs');
    const app = express();

    app.get('/', (req, res) => {
      var html = "<h1>Hello World</h1>";
      fs.writeFile("home.html", html, function(err) {
          if(err) {
              return console.log(err);
          }
          console.log("The file was saved!");
      }); 
  });
  app.listen(3000, () => {
    console.log('Server running on port 3000');
  });
  };

}