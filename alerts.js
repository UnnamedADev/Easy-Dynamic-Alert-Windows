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
                buildAlert();
            });
        }
    }
    
    function buildAlert(){
        
        console.log("xd");
        var myHolder = document.getElementById("alertHolder");
       
        var newAlert = document.createElement("div");
        newAlert.classList.add("alert");
        myHolder.appendChild(newAlert);
        newAlert.style.backgroundColor = "blue";
        
        var newParagraph = document.createElement("p");
        myHolder.appendChild(newParagraph);
        newParagraph.innerHTML = "hehe";
    }
});