function displayinputdetails() {
    // Get values from the form
    var username = document.getElementById("usernameInput").value;
    var email = document.getElementById("emailInput").value;
    var location;

    // Determine selected location
    var locationInputs = document.getElementsByName("location");
    for (var i = 0; i < locationInputs.length; i++) {
        if (locationInputs[i].checked) {
            location = locationInputs[i].id.replace("location", "");
            break;
        }
    }

    var inputdetails = "Username: " + username + "\n" +
                     "Email: " + email + "\n" +
                     "Location: " + location;
    var newTab = window.open();
    newTab.document.write("<pre>" + inputdetails + "</pre>");
}
