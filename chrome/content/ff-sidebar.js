var mainWindow = null;

function startup() {
  mainWindow = window.QueryInterface(Components.interfaces.nsIInterfaceRequestor)
                     .getInterface(Components.interfaces.nsIWebNavigation)
                     .QueryInterface(Components.interfaces.nsIDocShellTreeItem)
                     .rootTreeItem
                     .QueryInterface(Components.interfaces.nsIInterfaceRequestor)
                     .getInterface(Components.interfaces.nsIDOMWindow);

  // Sidebar is loaded and mainwindow is ready    
   
}

function showReference(reference){
	document.getElementById('refGrid').hidden = false;
	
	var boxes = document.getElementById('refGrid').getElementsByTagName('textbox');	
	for (var i = 0; i < boxes.length; i++) {
		if (reference[boxes[i]['id']]) {
			boxes[i].value = reference[boxes[i]['id']];
		}else{ 
			boxes[i].value = '';
		}
	}
	
//	for (attr in reference) {
//		var el = document.getElementById(attr)
//		if(el){
//			el.value = reference[attr];
//		}
//	}
}

function shutdown() {
  // Sidebar is unloading
}

window.addEventListener("load", startup, false);
window.addEventListener("unload", shutdown, false);
