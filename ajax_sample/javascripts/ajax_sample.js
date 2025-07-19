let number = 0;
const tittleArea = document.getElementById ("title")
const contentArea = document.getElementById("content")
const videoArea = document.getElementById("video")
const button =document.getElementById('btn')

function getData() {
    // 1. Generate XMLHttpRequest object
    const request = new XMLHttpRequest(); 
    // Set event handlers in the XMLHttpRequest object and configure processing during communication
    
    request.onreadystatechange = function() { 
      if (request.readyState == 4) { 
        if(request.status == 200) { 
      
         tittleArea.innerText = request.response[number].title;
         videoArea.setAttribute("src", request.response[number].url);
         contentArea.innerText = request.response[number].content;
         number == 2 ? number = 0 : number++;
        }
      }
    }
   
    request.open("GET", "javascripts/ajax.json"); 
    request.responseType = "json"; 
    request.send(null); 
  }

  
document.getElementById("btn").onclick = getData;