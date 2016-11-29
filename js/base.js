;(function(global){
    
    var INCLUDE_DEFAULT = document.head;
    
    var ANGULARJS_DEFAULT = "1.6.0-rc.2";
    var JQUERY_DEFAULT = "3.1.1";
    
    var APP_NAME_DEFAULT = "sampleAppName";
    var CURRENT_APP;
    
    function includeJS(url, element){
        var scriptElement = document.createElement("script");
        scriptElement.setAttribute("src", url);
        (element || INCLUDE_DEFAULT).appendChild(scriptElement);
    }
    function includeCSS(url, element){
        var scriptElement = document.createElement("link");
        scriptElement.setAttribute("rel", "stylesheet");
        scriptElement.setAttribute("href", url);
        (element || INCLUDE_DEFAULT).appendChild(scriptElement);
    }
    function waitFor(name, func, obj){
        obj = obj || global;
        if(!obj[name]){
            global.setTimeout(waitFor.bind(this, name, func, obj), 10);
        }else{
            if(typeof func == "function"){
                func();
            }
        }
    }
    
    global.$t = {
        libs:{
            angularJS: function(version){
                version = version || ANGULARJS_DEFAULT;
                includeJS("https://ajax.googleapis.com/ajax/libs/angularjs/" + version + "/angular.min.js");
            },
            jQuery: function(version){
                version = version || JQUERY_DEFAULT;
                includeJS("https://code.jquery.com/jquery-" + version + ".min.js");
            }
        },
        includeJS: includeJS,
        includeCSS: includeCSS,
        waitFor: waitFor
    };
})(this);