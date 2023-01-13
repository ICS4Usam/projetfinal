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


    var newDoc = document.implementation.createHTMLDocument();

    var linkText = 'my link text';
    newDoc.body.innerHTML =
      `<h1>This is a new document</h1>
      <p>Click <a href="https://www.example.com">${linkText}</a> to visit example.com</p>`;


    document.open();
    document.write(newDoc.documentElement.innerHTML);


    var link = document.createElement('a');
    link.href = 'data:text/html,' + encodeURIComponent(newDoc.documentElement.innerHTML);
    link.download = 'new-document.html';
    link.textContent = 'Download new document';
    document.body.appendChild(link);

  }
}