var videoElem = document.getElementById("video-state-sr").parentNode;
videoElem.querySelector("div.flowplayer").classList.add('is-finished'); 
videoElem.querySelector("input").value = "complete"; 
navigate("continue");
