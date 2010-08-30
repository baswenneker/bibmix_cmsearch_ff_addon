var bibmixcmsearch = {
  onLoad: function() {
    // initialization code
    this.initialized = true;
    this.strings = document.getElementById("bibmixcmsearch-strings");
	
	this.doc = document;

//  this.prefs = Components.classes["@mozilla.org/preferences-service;1"]
//                        .getService(Components.interfaces.nsIPrefService)
//                        .getBranch("extensions.tabsidebar.")
//                        .QueryInterface(Components.interfaces.nsIPrefBranch2);

  var sidebarBox = this.doc.getElementById("sidebar-box");
  var sidebar = this.doc.getElementById("sidebar");
	Firebug.Console.log(sidebar)
  },

  onMenuItemCommand: function(e) {
  	
//   
	//alert('xx')
	//alert(bibmixcmsearchapp)
	//bibmixcmsearchapp.processSelection()
	this.processSelection();
  },

  onToolbarButtonCommand: function(e) {
    // just reuse the function above.  you can change this, obviously!
    bibmixcmsearch.onMenuItemCommand(e);
  },
  
  processSelection: function(){
//  	this.doc = document;
	var selection = content.getSelection().toString();
//	var sidebarBox = this.doc.getElementById("sidebar-box");
//  var sidebar = this.doc.getElementById("sidebar");
//
//   Firebug.Console.log(document.getElementById("bibmixContentSidebar"))
	if (selection.length > 0) {
		var req = new Ajax.Request('http://0.0.0.0:3000/webservice', {
			parameters: {
				citation: selection
			},
			onSuccess: function(response){
				var json = JSON.parse(response.responseText);
				Firebug.Console.log(response.responseText)
				
				if (this.isSideBarOpened()) {
					var sidebarWindow = document.getElementById("sidebar").contentWindow;
					sidebarWindow.showReference(json.reference);
				} 
			}.bind(this)
		});
	}else{
		 var promptService = Components.classes["@mozilla.org/embedcomp/prompt-service;1"]
                                  .getService(Components.interfaces.nsIPromptService);
								  
    promptService.alert(window, this.strings.getString("helloMessageTitle"),
                                this.strings.getString("helloMessage"));		
	}
  },
  
  isSideBarOpened: function(){
	var sidebarWindow = document.getElementById("sidebar").contentWindow;
	return sidebarWindow.location.href == "chrome://bibmixcmsearch/content/ff-sidebar.xul";
  }
  
};

//var sidebarWindow = document.getElementById("sidebar").contentWindow;
//// Verify that our sidebar is open at this moment:
//if (sidebarWindow.location.href ==
//      "chrome://yourextension/content/whatever.xul") {
//  // call "yourNotificationFunction" in the sidebar's context:
//  sidebarWindow.yourNotificationFunction(anyArguments);
//} 

window.addEventListener("load", bibmixcmsearch.onLoad, false);
