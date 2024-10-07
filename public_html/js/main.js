

function askUserName() {
    let name = prompt("Welcome! What is your name?"); 
    if (name) {
        let nameDisplay = document.getElementById('nameDisplay');
        nameDisplay.innerHTML = "Hey, " + name + "! Welcome to my website. Feel free to reach out if you have any questions by clicking <a href='contact.html'>here</a>!";
    }
}

function toggleImageSize() {
    var img = document.getElementById('profileImage');
    img.classList.toggle('enlarged');
}
