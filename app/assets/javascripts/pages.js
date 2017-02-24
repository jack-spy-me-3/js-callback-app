// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.


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
$.get("https://data.cityofnewyork.us/resource/cdpt-29ur.json", function(data) {
  // console.log(data);
  var htmlString = "";
  for (var i = 0; i < data.length; i++) {
    var market = data[i];
    htmlString += "<div class='borough' onclick='changeMarket(this)'>";
    htmlString += "<h1>" + market.market_name + "</h1>";
    htmlString += "<p>" + market.borough + "</p>";
    htmlString += "<p>" + market.street_address + "</p>";
    htmlString += "</div>";
  }
  // console.log(htmlString);
  document.getElementById("market").innerHTML = htmlString;
});

var colors = ["red", "black", "green", "yellow", "orange"];
function changeMarket(market) {
  if (market.style['color'] === 'blue') {
    market.style['color'] = colors[Math.floor(Math.random() * 5 + 1)];
  } else {
    market.style['color'] = "blue";
  }
  for (var i = 0; i < market.children.length; i++) {
    if (i !== 0) {
      if (market.children[i].style.display === "none") {
        market.children[i].style.display = "block";
      } else {
        market.children[i].style.display = "none";
      }
    }
  }
}

function brooklynOnly() {
  var brooklynMarkets = document.getElementsByClassName("borough");
  console.log(brooklynMarkets);
  for (var i = 0; i < brooklynMarkets.length; i++) {
    var market = brooklynMarkets[i];
    if (market.innerHTML.indexOf("Brooklyn") !== -1) {
      market.style.display = "block";
    } else {
      market.style.display = "none";
    }
  }
}

function allMarkets() {
  var markets = document.getElementsByClassName("borough");
  for (var i = 0; i < markets.length; i++) {
    var market = markets[i];
    market.style.display = "block";
  }
}