const remote = require("electron").remote;

document.getElementById("min-btn").addEventListener("click", (error) => {
    var window = remote.getCurrentWindow();
    window.minimize(); 
});

document.getElementById("max-btn").addEventListener("click", (error) => {
    var window = remote.getCurrentWindow();
    window.isMaximized() ? window.unmaximize() : window.maximize();
});

document.getElementById("close-btn").addEventListener("click", (error) => {
    var window = remote.getCurrentWindow();
    window.close();
}); 

document.getElementById("inputField").addEventListener("keypress", (e) => {
    if (event.keyCode == 13) {
        // Cancel the default action 
        event.preventDefault();
        console.log("HEJ")
    }
})
