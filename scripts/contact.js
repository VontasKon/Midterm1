
document.querySelector("#contactForm").addEventListener("submit", function(event) { //this runs the code below when form is submitted
    event.preventDefault();

    alert( //shows on screen the infor you added in
        "Message Submitted!\n\n" +
        "Name: " + document.querySelector("#name").value + "\n" +
        "Email: " + document.querySelector("#email").value + "\n" +
        "Subject: " + document.querySelector("#subject").value + "\n" +
        "Message: " + document.querySelector("#message").value
    );

    this.reset(); //clears the form ?>
});
