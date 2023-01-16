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

    const fs = require('fs');

    const html = `<!DOCTYPE html>
    <html>
    <head>
    <title>My Dynamic HTML Page</title>
    </head>
    <body>
    <h1>Hello World</h1>
    </body>
    </html>`;
    
    fs.writeFile('newpage.html', html, (err) => {
      if (err) throw err;
      console.log('File created successfully.');
    });

  }
}
