console.log(document.getElementsByTagName("h1")[1].innerHTML = "Changaes")

let color_button = document.getElementById("color-button")
console.log(color_button)

function color_change(){
    let header_text = document.getElementsByTagName("h1")[0].innerHTML
    if (header_text == "Hello World"){
        document.getElementsByTagName("h1")[0].className = "color-change"
    } else{
        header_text = "Something Else"
    }
}

// Change Text Color via Click Event Listener in JS
color_button.addEventListener("click", color_change)

// Adding New Button via JavaScript
let button = document.createElement("button")
let button_display = document.createElement("h2")
// Add Inner Text to the Button
button.innerHTML = "I'M ALIVE"
document.body.append(button)

button.addEventListener("click", function(){
    if(button_display.innerHTML == "JavaSCript info here"){
        button_display.innerHTML = ""
    } else{
        button_display.innerHTML = "JavaSCript info here"
        document.body.append(button_display)
    }
})

const source = document.querySelector("div.source");
source.addEventListener("copy", (event) => {
    console.log(ClipboardEvent)
    const selection = document.getSelection();
    event.clipboardData.setData("text/plain", selection.toString().toLowerCase());
    event.preventDefault();
});

// GRAB FORM DATA FROM A SUBMIT EVENT
const form = document.querySelector("#testDataForm")
//console.log(form)
// ADD EVENT LISTENER FOR SUBMIT EVENT
form.addEventListener("submit", (event) => {
    event.preventDefault();
    let queryFirst = document.querySelector("#first-name")
    let queryLast = document.querySelector("#last-name")
    let firstName = event.path[0][0].value;;
    let lastName = event.path[0][1].value;
    console.log(event);
    console.log(firstName, lastName);
    console.log(`This came from the query selector: ${queryFirst.value} ${queryLast.value}`)
})
