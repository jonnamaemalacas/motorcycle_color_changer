function random(){
    var backColor = Math.floor(Math.random() *1677725).toString(16);
    var motor = document.querySelector("#motor");
    motor.style.backgroundColor = "#" + backColor;
}
function show() {
    var motor = document.querySelector("#motor");
    var colorPicker = document.getElementById("picker").value;
    if(colorPicker === "blue"){
        motor.style.backgroundColor = "blue";
        
       
    }
    else if (colorPicker === "gray")
    {
        motor.style.backgroundColor = "gray";
       
    }
    else if (colorPicker === "green")
    {
        motor.style.backgroundColor = "green";
    }
    else if (colorPicker === "yellow")
    {
        motor.style.backgroundColor = "yellow";
    }
    else if (colorPicker == "light blue")
    {
        motor.style.backgroundColor = "lightblue";

    }
    else if( colorPicker === "black")
    {
        motor.style.backgroundColor = "black";
    }
}
function reset(){
    var motor = document.querySelector("#motor");
    motor.style.backgroundColor ="white";
}