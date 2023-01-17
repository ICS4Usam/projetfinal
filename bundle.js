(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
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
},{"fs":1}]},{},[2]);
