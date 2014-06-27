var renderers = (function () {
    function CanvasRenderer(selector) {
        if (selector instanceof HTMLCanvasElement) {
            this.canvas = selector;
        } else if (typeof selector === "String" ||
            typeof selector === "string") {
            this.canvas = document.querySelector(selector);
        }
    }

    var drawRectangle = function (canvas, rectangle) {
        var ctx = canvas.getContext("2d");
        var rect = rectangle.getPosition();
        ctx.rect(rect.x, rect.y, rect.width, rect.height);
        ctx.stroke();
    };

    var drawCircle = function (canvas, circle) {
        var ctx = canvas.getContext("2d");
        var circle = circle.getPosition();
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
        ctx.stroke();
    };

    var drawLine = function (canvas, line) {
        var ctx = canvas.getContext("2d");
        var line = line.getPosition();
        ctx.beginPath();
        ctx.moveTo(line.x, line.y);
        ctx.lineTo(line.toX, line.toY);
        ctx.stroke();
    };

    CanvasRenderer.prototype = {
        draw: function (obj) {
            if (obj instanceof shapes.Circle) {
                drawCircle(this.canvas, obj);
            } else if (obj instanceof shapes.Rectangle) {
                drawRectangle(this.canvas, obj);
            } else if (obj instanceof shapes.Line) {
                drawLine(this.canvas, obj);
            }
        }
    };

    return {
        getCanvas: function (selector) {
            return new CanvasRenderer(selector);
        }
    }
}());
