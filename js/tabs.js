function Tab(name, content, redirect){
    function use($, contentElement){
        if(redirect){
            window.location = content;
        }else{
            contentElement.innerHTML = $.ajax({
                url: content,
                type: "GET",
                success: function(data){
                    contentElement.innerHTML = data;
                }
            });
        }
    }
    
    function apply($, navElement, contentElement){
        var e = document.createElement("a");
        e.innerHTML = name;
        e.onclick = function(){
            use($, contentElement);
        };
        navElement.appendChild(e);
    }
    
    return {
        apply: apply,
        use: use
    }
}