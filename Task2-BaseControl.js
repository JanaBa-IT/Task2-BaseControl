
var slider1 = document.getElementById("CONTROL1");
var output1 = document.getElementById("value1");

var slider2 = document.getElementById("CONTROL2");
var output2 = document.getElementById("value2");

var slider3 = document.getElementById("CONTROL3");
var output3 = document.getElementById("value3");

var slider4 = document.getElementById("CONTROL4");
var output4 = document.getElementById("value4");

var slider5 = document.getElementById("CONTROL5");
var output5 = document.getElementById("value5");

var slider6 = document.getElementById("CONTROL6");
var output6 = document.getElementById("value6");

output1.innerHTML = slider1.value;
output2.innerHTML = slider2.value;
output3.innerHTML = slider3.value;
output4.innerHTML = slider4.value;
output5.innerHTML = slider5.value;
output6.innerHTML = slider6.value;

slider1.oninput = function() { output1.innerHTML = this.value; }

slider2.oninput = function() { output2.innerHTML = this.value; }

slider3.oninput = function() { output3.innerHTML = this.value; }

slider4.oninput = function() { output4.innerHTML = this.value; }

slider5.oninput = function() { output5.innerHTML = this.value; }

slider6.oninput = function() { output6.innerHTML = this.value; }
 
  window.watsonAssistantChatOptions = {
      integrationID: "60f413b1-2924-46e6-a4f3-ef3ec8be39f5", // The ID of this integration.
      region: "eu-gb", // The region your integration is hosted in.
      serviceInstanceID: "50346204-c089-4108-af40-3491bbfac99d", // The ID of your service instance.
      onLoad: function(instance) { instance.render(); }
    };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js";
    document.head.appendChild(t);
  });
