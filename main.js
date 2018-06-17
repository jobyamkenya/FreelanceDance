function show() {
    var x = document.getElementById("loginContainer");
    var y = document.getElementById("loginContainer2");

    if (x.style.display === "none"){
        y.style.display= "block";

        console.log("Display Y");

    }else {
        y.style.display = "none";
        x.style.display = "block";
        console.log("Display x");
    }

}
