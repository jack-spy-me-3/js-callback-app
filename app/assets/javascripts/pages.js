// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

global $
var colors = ["red", "blue", "green", "yellow", "orange"];
function changeColors() {
  setInterval(function() {
    setTimeout(function() {
      document.getElementById('first').style["color"] = colors[Math.floor(Math.random() * 5 + 1)];
      setTimeout(function() {
        document.getElementById('second').style["color"] = colors[Math.floor(Math.random() * 5 + 1)];
        setTimeout(function() {
          document.getElementById('third').style["background-color"] = colors[Math.floor(Math.random() * 5 + 1)];
          setTimeout(function() {
            document.getElementById('fourth').style["font-size"] = "100px";
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 5000);

}
var response = $.get("https://data.cityofnewyork.us/resource/cdpt-29ur.json", function(data) {
  console.log(data);
  document.getElementById('fourth').innerHTML = data;
});
