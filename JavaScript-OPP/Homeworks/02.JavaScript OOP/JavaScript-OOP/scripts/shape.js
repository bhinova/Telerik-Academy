var shapes = (function () {
    var Shape = function (x, y) {
        this.x = x;
        this.y = y;
    };

    Shape.prototype = {
        getPosition: function () {
            return {
                x: this.x,
                y: this.y
            };
        }
    };

    var Rectangle = function (x, y, width, height) {
        Shape.call(this, x, y);
        this.width = width;
        this.height = height;
    };

    Rectangle.prototype = new Shape();
    Rectangle.prototype.constructor = Rectangle;

    Rectangle.prototype.getPosition = function() {
       var setParameters = Shape.prototype.getPosition.call(this);
        setParameters.width = this.width;
        setParameters.height = this.height;

        return setParameters;
    };

    var Circle = function (x, y, radius) {
        Shape.call(this, x, y);
        this.radius = radius;
    };

    Circle.prototype = new Shape();
    Circle.prototype.constructor = Circle;

    Circle.prototype.getPosition = function() {
        var setParameters = Shape.prototype.getPosition.call(this);
        setParameters.radius = this.radius;

        return setParameters;
    };

    var Line = function (x, y, toX, toY) {
        Shape.call(this, x, y);
        this.toX = toX;
        this.toY = toY;
    };

    Line.prototype = new Shape();
    Line.prototype.constructor = Line;

    Line.prototype.getPosition = function() {
        var setParameters = Shape.prototype.getPosition.call(this);
        setParameters.toX = this.toX;
        setParameters.toY = this.toY;

        return setParameters;
    };

    return  {
        getRectangle: function (x, y, width, height) {
            return new Rectangle(x, y, width, height);
        },
        getCircle: function (x, y, radius) {
            return new Circle(x, y, radius);
        },
        getLine: function (x, y, toX, toY) {
            return new Line(x, y, toX, toY);
        },
        Rectangle: Rectangle,
        Circle: Circle,
        Line: Line
    };
}());
