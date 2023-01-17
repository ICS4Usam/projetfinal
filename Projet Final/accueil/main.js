

function initialiser() {

}

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

// Write the HTML content to a file
fs.writeFile('my-document.html', document.documentElement.outerHTML, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
  };
}