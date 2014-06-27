var DomModule = (function(){
    var buffer = [];
    var MAX_ELEMENTS = 100;

    var addElement = function(element, selector){
        var wrapper = document.querySelector(selector);
        wrapper.appendChild(element);
    };

    var removeElement = function(selector, element){
       var wrapper = document.querySelector(selector);
       var item = document.querySelector(element);
       wrapper.removeChild(item);

        // Removing a specified element without having to specify its parent node
        //var item = document.querySelector(element);
        //item.parentNode.removeChild(item);
    };

    var addHandler = function(element, eventType, eventHandler ){
        var item =  document.querySelector(element);

        item.addEventListener(eventType, eventHandler);
    };

    var appendToBuffer = function(selector, element) {
        if (!buffer[selector]) {
            buffer[selector] = document.createDocumentFragment();
        }

        buffer[selector].appendChild(element);

        if(buffer[selector].childNodes.length === MAX_ELEMENTS){
            var appendTo = document.querySelector(selector);
            appendTo.appendChild(buffer[selector]);
            buffer[selector] = null;
        }
    };

    return {
        appendChild : addElement,
        removeChild : removeElement,
        addHandler : addHandler,
        appendToBuffer : appendToBuffer
    };
})();


var div = document.createElement("div");
div.innerText = 'some div';
//appends div to #wrapper
DomModule.appendChild(div, '#wrapper');

//removes li:first-child from ul
DomModule.removeChild("ul","li:first-child");

//add handler to each a element with class button
DomModule.addHandler("a.button", 'click',
    function(){alert("Clicked")});

for (var i = 1; i <= 100; i++) {
    var divs = document.createElement("div");
    DomModule.appendToBuffer("#container", div.cloneNode(true));
}



