function Tab(name, content, redirect){
    function iframeFix(contentElement){
        var iframe = document.createElement("iframe");
        iframe.setAttribute("src", content);
        contentElement.appendChild(iframe);
    }
    
    function use($, contentElement){
        if(redirect){
            window.location = content;
        }else{
            while(contentElement.children.length > 0){
                contentElement.children[0].remove();
            }
            iframeFix(contentElement);
            $.ajax({
                url: content,
                type: "GET",
                success: function(data){
                    contentElement.innerHTML = data;
                    if(contentElement.children.length == 0){
                        iframeFix(contentElement);
                    }
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