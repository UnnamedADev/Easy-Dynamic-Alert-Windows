"use strict";

$(document).ready(function() {
    //vars
    var duration = 200;
    
    //main
    buildAlertHolder();
    addEvents();
    
    //fx
    function buildAlertHolder(){
        var myPage = document.getElementsByTagName("body")[0];
        var myHolder = document.createElement("div");
        myHolder.id = "alertHolder";
        myPage.appendChild(myHolder);
    }
    
    function addEvents(){
        var allReactors = document.getElementsByClassName("handleAlert");
        
        for(var i=0;i<allReactors.length;i++){
            allReactors[i].addEventListener("click", function(){
                var type = this.getAttribute("alertType");
                var content = this.getAttribute("alertContent");
                var expire = this.getAttribute("alertExpire");
                buildAlert(type, content, expire);
            });
        }
    }
    
    function buildAlert(type,content,expire){
        expire *= 1000;
        var myHolder = document.getElementById("alertHolder");
       
        var newAlert = document.createElement("div");
        newAlert.classList.add("alert");
        myHolder.appendChild(newAlert);
        var alertColor, borderColor;
        switch(type){
            case "neutral":
                alertColor = "#ad8201";
                borderColor = "#c6a641";
                break;
            case "negative":
                alertColor = "#a50000";
                borderColor = "#ad3e3e";
                break;
            case "positive":
                alertColor = "#2c8400";
                borderColor = "#489323";
                break;
            default:
                window.alert("#ERROR: \n-Invalid alert type.\n -Check in HTML code element that provides this event for any errors in name of 'alertType' attribute. This attribute can be only: neutral / positive / negative.")
                break;
        }

        newAlert.style.backgroundColor = alertColor;
        newAlert.style.borderColor = borderColor;
        var newParagraph = document.createElement("p");
        newAlert.appendChild(newParagraph);
        newParagraph.innerHTML = content;
        
        $(newAlert).slideDown(duration);
        
        setTimeout(function(){
            $(newAlert).slideUp(duration, function(){
                newAlert.removeChild(newParagraph);
                myHolder.removeChild(newAlert);
            });
        },expire);
    }
});