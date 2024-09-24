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
    }

        $("button").hover(
            function(){
            $(this).addClass("grey");
            console.log("hover in");
        },
            function(){
            $("button").removeClass("grey");
            console.log("hover out");
        }
            
    )

    $("#nameToggle").click(
        function(){
            if ($('h1').is(":visible")){
            $("h1").hide();
            console.log("hidden")
        }
        else {
            $("h1").show();
            console.log("shown")
        }
    })
