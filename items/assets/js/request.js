// This code was created by G4 Abstract

var endpoint = "ws://localhost:69";

function StartConnection() {
    Show();
    websocket = new WebSocket(endpoint);
    websocket.onopen = function(evt) { Start(evt) };
    websocket.onclose = function(evt) { CloseConnection(evt) };
    websocket.onmessage = function(evt) { Message(evt) };
    websocket.onerror = function(evt) { ShowError(evt) };
}

function Show() {
    document.getElementById('brHide1').style.display='none'
    document.getElementById('brHide2').style.display='none'
    document.getElementById('startConnection').style.display='none'
    document.getElementById('log').style.display='block'
}

function Start(evt) {
    var log = document.getElementById("log").value;
    document.getElementById("log").innerHTML = log + "\n[G4] Connection Started";
}

function CloseConnection(evt) {
    var log = document.getElementById("log").value;
    document.getElementById("log").innerHTML = log + "\n[G4] Successfully Ended Connection";
}

function Message(evt) {
    var log = document.getElementById("log").value;
    document.getElementById("log").innerHTML = log + "\n[G4] " + evt.data;
}

function ShowError(evt) {
    var log = document.getElementById("log").value;
    document.getElementById("log").innerHTML = log + "\n[G4] Could Not Start Connection";
}

function Send(message) {
    websocket.send(message);
}