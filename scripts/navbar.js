fetch("/navbar.html") //this gets the contents of the file
.then(response => response.text()) //this converts them to text
  .then(html => {
    document.querySelector("#navbar").innerHTML = html;  //this puts the navbar file contents. i didnt uese get element like you told us in class
  });
