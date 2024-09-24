$(document).ready(function(){
    alert("Hello World!");

        $("span").click(function(){
        const randomColor = textChangeColor();
        $("span").css("color", randomColor);
        console.log("color in hexadecimal:", randomColor);
         })

    function textChangeColor(){
        var hex = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i<6; i++){
            color += hex[Math.floor(Math.random()*16)];
        }
        return color;
