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

    $("#getHobbies").click(function(){
        $.getJSON("object.json", function(data) {
            var hobbies = [];
            $.each(data, function(key, val) {
                hobbies.push("<li id='" + key + "'>" + val + "</li>");
            });
            $("<ul/>", {
                "class": "hobbies-list",
                html: hobbies.join("")
            }).appendTo("ul");
            
            console.log(data);
        }).fail(function(jqXHR, textStatus, errorThrown) {
            console.error("Error:", textStatus, errorThrown);
        });
    });
    });