$(document).ready(function(){
    // alert("Hello World!");

    // Change color of SWIC within span tags
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

    // Button hover event
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

    // Name toggle event
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
            }).appendTo("body");
            
            console.log(data);
        }).fail(function(jqXHR, textStatus, errorThrown) {
            console.error("Error:", textStatus, errorThrown);
        });
    });

    // Select all odd rows in the table
    $('table tr:odd').css('background-color', '#a9a9a9');

    // Select all even rows in the table
    $('table tr:even').css('font-family', 'Apple Chancery, cursive');

    // Style first and last span tag and style differently
    $('span:first, span:last').css('font-family', 'Apple Chancery, cursive')

    });