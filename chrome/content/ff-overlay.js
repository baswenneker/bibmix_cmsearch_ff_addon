bibmixcmsearch.onFirefoxLoad = function(event) {
  document.getElementById("contentAreaContextMenu")
          .addEventListener("popupshowing", function (e){ bibmixcmsearch.showFirefoxContextMenu(e); }, false);
};

bibmixcmsearch.showFirefoxContextMenu = function(event) {
  // show or hide the menuitem based on what the context menu is on
  document.getElementById("context-bibmixcmsearch").hidden = gContextMenu.onImage;
  document.getElementById("context-bibmixcmsearch").disabled = !(content.getSelection().toString().length > 0);
  if(content.getSelection().toString().length > 0){
  	document.getElementById("context-bibmixcmsearch").label = "Get reference of '"+ content.getSelection().toString() +"'";
  }else{
  	document.getElementById("context-bibmixcmsearch").label = "BibMix: select a citation.";
  }
};

window.addEventListener("load", bibmixcmsearch.onFirefoxLoad, false);
