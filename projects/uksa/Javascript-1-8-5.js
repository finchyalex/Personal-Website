function doesCookieExist(){
    if (!(document.cookie.indexOf("cookieExists=1") >= 0)) {            //Checks if 'cookieExists' has been created, aka have they accepted cookies
        var myElement = document.getElementsByClassName(".cookie_form");    
        myElement.style.display = "initial";                //Displays cookie form
      }
    else{
        loadCookies();
    }
}

function cookiesAccepted(){
    document.cookie = "cookieExists=1";                             //This variable is used so cookie form will not open in the future
    var myElement = document.querySelector(".cookie_form");           
    myElement.style.display = "none";                                      //Hides cookie form
}

function loadCookies(){
    //Basically does what you think it does
}