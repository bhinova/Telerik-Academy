var MovingShapes = (function(){
    var ELEMENT_SIZE = 40;
    var BORDER_RADIUS = 20;

    var counter = 0;

    var addElement = function(shape){
        var wrapper = document.querySelector('#wrapper');
        var element = document.createElement('div');
        generateStyles(element);

        if(shape === 'ellipse'){
            generateShape(element);
            circularMovement(element);
        } else {
            rectangularMovement(element);
        }

        wrapper.appendChild(element);
    };

    function generateStyles(element) {
        //The module should generate random background, font and border colors for the div element

        var backgroundColor = generateRandomColor();
        var textColor = generateRandomColor();
        var borderColor = generateRandomColor();


        element.style.width = ELEMENT_SIZE + 'px';
        element.style.height = ELEMENT_SIZE + 'px';
        element.style.backgroundColor = backgroundColor;
        element.style.color = textColor;
        element.style.textAlign = 'center';
        element.style.border = "1px solid #000";
        element.style.borderColor = borderColor;
        element.style.position = "absolute";
        element.innerText = 'div';
    }

    function generateRandomColor() {
        return '#' + Math.round(0xffffff * Math.random()).toString(16);
    }

    function generateShape(element) {
        return element.style.borderRadius = BORDER_RADIUS + 'px';
    }

    function circularMovement(element) {
        counter++;

        var angle = 0;
        var centerX = Math.floor(Math.random() * 500 + 1);
        var centerY = Math.floor(Math.random() * 500 + 1);
        var radius = Math.floor(Math.random() * 50 + 1);

        setInterval(function () {
            element.style.left = (centerX + radius * Math.cos(angle)) + "px";
            element.style.top = (centerY + radius * Math.sin(angle)) + "px";
            angle += 0.2;
        }, 100);
    }

    function  rectangularMovement(element) {
        counter++;

        var startX = Math.floor(Math.random() * 500 + 1);
        var startY = Math.floor(Math.random() * 500 + 1);
        var widthMovement = Math.floor(Math.random() * 200 + 1);
        var heightMovement = Math.floor(Math.random() * 200 + 1);
        var direction = "left";

        element.style.left = startX + "px";
        element.style.top = startY + "px";

        setInterval(function () {

            var currentLeft = parseInt(element.style.left);
            var currentTop = parseInt(element.style.top);

            if (startX + widthMovement < currentLeft && direction == "left") {
                direction = "bottom";
            }

            if (startX > currentLeft && direction == "right") {
                direction = "top";
            }

            if (startY + heightMovement < currentTop && direction == "bottom") {
                direction = "right";
            }

            if (startY > currentTop && direction == "top") {
                direction = "left";
            }

            if (direction == "left") {
                element.style.left = currentLeft + 10 + "px";
            }

            if (direction == "right") {
                element.style.left = currentLeft - 10 + "px";
            }

            if (direction == "top") {
                element.style.top = currentTop - 10 + "px";
            }

            if (direction == "bottom") {
                element.style.top = currentTop + 10 + "px";
            }

        }, 100);
    }

    return {
        add : addElement
    };
})();

//add element with rectangular movement
MovingShapes.add("rect");
//add element with ellipse movement
MovingShapes.add("ellipse");
