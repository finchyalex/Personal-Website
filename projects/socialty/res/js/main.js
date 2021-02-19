
function startprofile() {
    var all = document.getElementsByClassName('terms');
    for (var i = 0; i < all.length; i++) {
        all[i].style.display = "none";
    }
    var all = document.getElementsByClassName('profileinformation');
    for (var i = 0; i < all.length; i++) {
        all[i].style.display = "block";
    }
}

$("#reg_profile_display").mouseover(function () {
    $("#upload_text").css("display", "block");
})
    .mouseout(function () {
        $("#upload_text").css("display", "none");
    });


function checkusername(Input) { //This function is redundant    

    $.get("./api/usernamecheck.php?username=" + Input.value, function (response) {
        if (Input.value != "") {
            var ResponseObj = JSON.parse(response);
            if (ResponseObj.Valid) {
                document.getElementById("usernameerror").style.visibility = "hidden";
                Input.style.border = "";
            } else {
                document.getElementById("usernameerror").innerText = ResponseObj.Error;
                document.getElementById("usernameerror").style.visibility = "visible";
                Input.style.border = "2px solid #b50c00";
            }
        } else {
            document.getElementById("usernameerror").style.visibility = "hidden";
            Input.style.border = "";
        }

    });

}

function FormatDOB(DateInput) { //Need to figure out some kind of way to format the date of birth as the enter it and i cba rn
    if (DateInput.value.length == 2) {
        DateInput.value = DateInput.value + "/";
    } else if (DateInput.value.length == 5) {
        DateInput.value = DateInput.value + "/";
    }
}

function httpGETAsync(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}
if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}

$('registerform').submit(function (event) {
    event.preventDefault();
});

$('#loginbtn').click(function (event) {
    event.preventDefault();
    $.post("../api/login.php", $('#loginform').serialize(), function (response) {
        alert(response);
        var FormResponse = JSON.parse(response);
        if (FormResponse.Valid) { //If the form was fine and login was success
            document.getElementById('loginerror').style.visibility = "hidden"
        } else {
            document.getElementById('loginerror').innerText = FormResponse.Error;
            document.getElementById('loginerror').style.visibility = "visible"
        }
        //Do something with the response

    });
    return false;
});


$('#registerswitchbtn').click(function (event) {
    event.preventDefault();
    window.location.href = "../register/ideas"
});


//NO IDEA WHAT I CAN DO TO STOP MULTIPLE TABS APPEARING AT ONCE
//NEED  TO DO MORE CHECKS WITHIN THE API TO MAKE SURE THE USERNAME IS NOT ALREADY IN THE FORM!!!!
$(".styledbutton").click(function (event) {
    event.preventDefault();
});

$(".continuebutton").click(function (event) {
    
    event.preventDefault();
    var CurrentFound = false;
    var Changed = false;
    $(".registertab").each(function (index) {
        if (CurrentFound) {
            $(event.target).parent().css("display", "none");
            $(this).css("display", "inline");
            CurrentFound = false;
            Changed = true;
        } else if (($(this).attr('id') == $(event.target).parent().attr('id')) && !Changed) {
            CurrentFound = true;
        }
    });


});

$(".registertab").each(function (index) {
    $(this).find("input").keydown(function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
        }
    });


});

$('#registerbutton').click(function (event) {
    event.preventDefault();
    document.getElementById("registeraction").disabled = false;
    $.post("https://www.alexfinch.org/projects/socialty/api/register.php", $('#registerform').serialize(), function (response) {
        document.getElementById("registeraction").disabled = true;
        var FormResponse = JSON.parse(response);
        if (FormResponse.Valid) { //if registration was sucess
            $('#registerresponse').text("Registration Complete! You can now login");
            $('#registerresponse').css('visibility', 'visible');
        } else {
            UpdateButtons(FormResponse);
            UpdateErrors(FormResponse);
        }

    });
    return false;
});



//Need some kind of post queue system
/*
$(".registerinput").change(function (event) {

    $.post("../api/register.php", $('#registerform').serialize(), function (response) {
        //alert(response);
        var FormResponse = JSON.parse(response);
        if (!FormResponse.Valid) {
            UpdateErrors(FormResponse);
        }
    });
});
*/

$(".registerinput").on('input', function (event) {
    var PostRequest = new Post("https://www.alexfinch.org/projects/socialty/api/register.php", $('#registerform').serialize(), function (response) {
        var FormResponse = JSON.parse(response);
        UpdateButtons(FormResponse);
        UpdateErrors(FormResponse);
    });
    QueuePost(PostRequest);

});



function UpdateButtons(FormResponse) {

    if ((FormResponse.Firstname.Valid) && (FormResponse.Surname.Valid)) {
        
        $(".continuebutton","#nameinfo").prop("disabled", false);
    } else {
        $(".continuebutton","#nameinfo").prop("disabled", true);
    }

    if (FormResponse.DOB.Valid) {
        $(".continuebutton","#birthinfo").prop("disabled", false);
    }
    else {
        $(".continuebutton","#birthinfo").prop("disabled", true);
    }

    if (FormResponse.Email.Valid) {
        $(".continuebutton","#contactinfo").prop("disabled", false);
    }
    else {
        $(".continuebutton","#contactinfo").prop("disabled", true);
    }

    if (FormResponse.Username.Valid) {
        $(".continuebutton","#profileinfo").prop("disabled", false);
    }
    else {
        $(".continuebutton", "#profileinfo").prop("disabled", true);
    }

    if (FormResponse.Password.Valid) {
        $(".continuebutton","#passwordinfo").prop("disabled", false);
    }
    else {
        $(".continuebutton","#passwordinfo").prop("disabled", true);
    }

}


function UpdateErrors(FormResponse) {

    /*

    if (!FormResponse.Firstname.Valid) {
        document.getElementById('firstnameerror').innerText = FormResponse.Firstname.Error;
        document.getElementById('firstnameerror').style.visibility = "visible";
    } else {
        document.getElementById('firstnameerror').style.visibility = "hidden";
    }

    if (!FormResponse.Surname.Valid) {
        document.getElementById('surnameerror').innerText = FormResponse.Surname.Error;
        document.getElementById('surnameerror').style.visibility = "visible";
    } else {
        document.getElementById('surnameerror').style.visibility = "hidden";
    }

    if (!FormResponse.Username.Valid) {
        document.getElementById('usernameerror').innerText = FormResponse.Username.Error;
        document.getElementById('usernameerror').style.visibility = "visible";
    } else {
        document.getElementById('usernameerror').style.visibility = "hidden";
    }

    if (!FormResponse.Email.Valid) {
        document.getElementById('emailerror').innerText = FormResponse.Email.Error;
        document.getElementById('emailerror').style.visibility = "visible";
    } else {
        document.getElementById('emailerror').style.visibility = "hidden";
    }

    */

    //Do this one last

    /*
    $Form->Password->Length = True;
    $Form->Password->UpperLower = True;
    $Form->Password->Numbers = True;
    $Form->Password->Special = True;
    $Form->Password->Match = True;
    */


    if (!FormResponse.Password.Length) {
        document.getElementById('length').style.backgroundColor = "#FF6961";
    }
    else {
        document.getElementById('length').style.backgroundColor = "#77dd77";
    }

    if (!FormResponse.Password.UpperLower) {
        document.getElementById('capital').style.backgroundColor = "#FF6961";
    }
    else {
        document.getElementById('capital').style.backgroundColor = "#77dd77";
    }

    if (!FormResponse.Password.Numbers) {
        document.getElementById('number').style.backgroundColor = "#FF6961";
    }
    else {
        document.getElementById('number').style.backgroundColor = "#77dd77";
    }

    if (!FormResponse.Password.Special) {
        document.getElementById('character').style.backgroundColor = "#FF6961";
    }
    else {
        document.getElementById('character').style.backgroundColor = "#77dd77";
    }

    if (!FormResponse.Password.Match) {
        document.getElementById("match").style.backgroundColor = "#FF6961";
    }
    else {
        document.getElementById('match').style.backgroundColor = "#77dd77";
    }

}

//Need to do some client side password checking, then also some server side checking