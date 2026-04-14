// This is what happens when you click the "Edit Profile" button
function handleEditProfile() {
    document.getElementById("input-name").value = document.getElementById("name").textContent
    
    var email = document.getElementById("email").textContent
    var inputEmail = document.getElementById("input-email")
    inputEmail.value = email

    var position = document.getElementById("position").textContent
    var inputPosition = document.getElementById("input-position")
    inputPosition.value = position

    // make edit view appear
    document.getElementById("edit-view").style.display = "block"

    // make display view disappear
    document.getElementById("display-view").style.display = "none"
}


// This is what happens when you click the "Update Profile" button
function handleUpdateProfile() {

    //NAME
    // Get value of input field (What user entered)
    var updatedName = document.getElementById("input-name").value

    // Grab the element with id of name
    var name = document.getElementById("name")

    // Set the content of that element to what the user entered
    name.textContent = updatedName

    // EMAIL
    // Get value of input field (What user entered)
    var updatedEmail = document.getElementById("input-email").value

    // Grab the element with id of email
    var email = document.getElementById("email")

    // Set the content of that element to what the user entered
    email.textContent = updatedEmail

    // POSITION
    // Get value of input field (What user entered)
    var updatedPosition = document.getElementById("input-position").value

    // Grab the element with id of position
    var position = document.getElementById("position")

    // Set the content of that element to what the user entered
    position.textContent = updatedPosition

    // make display view appear
    document.getElementById("display-view").style.display = "block"

    // make edit view disappear
    document.getElementById("edit-view").style.display = "none"
}