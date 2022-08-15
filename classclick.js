function clickedClassHandler(name,callback) {

    // apply click handler to all elements with matching className
    var allElements = document.body.getElementsByTagName("*");

    for(var x = 0, len = allElements.length; x < len; x++) {
        if(allElements[x].className == name) {
            allElements[x].onclick = handleClick;
        }
    }

    function handleClick() {
        var elmParent = this.parentNode;
        var parentChilds = elmParent.childNodes;
        var index = 0;

        for(var x = 0; x < parentChilds.length; x++) {
            if(parentChilds[x] == this) {
                break;
            }

            if(parentChilds[x].className == name) {
                index++;
            }
        }

        callback.call(this,index);
    }
}