"use strict";

$(document).ready(function() {
    
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
                buildAlert(type, content);
            });
        }
    }
    
    function buildAlert(type,content){

        var myHolder = document.getElementById("alertHolder");
       
        var newAlert = document.createElement("div");
        newAlert.classList.add("alert");
        myHolder.appendChild(newAlert);
        var alertColor;
        switch(type){
            case "neutral":
                alertColor="yellow";
                break;
            case "negative":
                alertColor = "red";
                break;
            case "positive":
                alertColor = "green";
                break;
            default:
                window.alert("#ERROR: \n-Invalid alert type.\n -Check in HTML code element that provides this event for any errors in name of 'alertType' attribute. This attribute can be only: neutral / positive / negative.")
                break;
        }

        newAlert.style.backgroundColor = alertColor;
        
        var newParagraph = document.createElement("p");
        newAlert.appendChild(newParagraph);
        newParagraph.innerHTML = content;
    }
});