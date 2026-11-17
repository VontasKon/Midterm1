
document.querySelector("#contactForm").addEventListener("submit", function(event) { //this runs the code below when form is submitted
    event.preventDefault();


  // sselect the input fields
    const name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const subject = document.querySelector("#subject");
    const message = document.querySelector("#message");

    // this will trim unnnecessary blank spaces from the beginning and the end
    name.value = name.value.trim();
    email.value = email.value.trim();
    subject.value = subject.value.trim();
    message.value = message.value.trim();

    // to check if any field is empty after trimming
    if (
        name.value === "" ||
        email.value === "" ||
        subject.value === "" ||
        message.value === ""
    ) {
        alert("Please fill in all fields. Spaces alone are not accepted.");
        return;
    }
    
    //email format and max length are done via html


alert( //new alert using the input fields selected earlier
    "Message Submitted!\n\n" +
    "Name: " + name.value + "\n" +
    "Email: " + email.value + "\n" +
    "Subject: " + subject.value + "\n" +
    "Message: " + message.value
);


    //old alert (left here for reference)
 /*   alert( //shows on screen the information you added in 
        "Message Submitted!\n\n" +
        "Name: " + document.querySelector("#name").value + "\n" +
        "Email: " + document.querySelector("#email").value + "\n" +
        "Subject: " + document.querySelector("#subject").value + "\n" +
        "Message: " + document.querySelector("#message").value
    );
*/


    this.reset(); //clears the form >
});
