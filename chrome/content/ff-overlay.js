bibmixcmsearch.onFirefoxLoad = function(event) {
  document.getElementById("contentAreaContextMenu")
          .addEventListener("popupshowing", function (e){ bibmixcmsearch.showFirefoxContextMenu(e); }, false);
};

bibmixcmsearch.showFirefoxContextMenu = function(event) {
  // show or hide the menuitem based on what the context menu is on
  document.getElementById("context-bibmixcmsearch").hidden = gContextMenu.onImage;
};

window.addEventListener("load", bibmixcmsearch.onFirefoxLoad, false);
