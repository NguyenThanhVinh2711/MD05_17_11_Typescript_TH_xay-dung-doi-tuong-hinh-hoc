"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Rectangle = exports.Shape = void 0;
// @ts-ignore
var Shape = /** @class */ (function () {
    function Shape(x, y) {
        this._x = x;
        this._y = y;
    }
    Object.defineProperty(Shape.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (y) {
            this._y = y;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (x) {
            this._x = x;
        },
        enumerable: false,
        configurable: true
    });
    Shape.prototype.toString = function () {
        return "(x: ".concat(this._x, ", y: ").concat(this._y, ")");
    };
    return Shape;
}());
exports.Shape = Shape;
// @ts-ignore
var shape_1 = require("./shape");
exports.Shape = shape_1.Shape;
// @ts-ignore
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(x, y, _width, _height) {
        var _this = _super.call(this, x, y) || this;
        _this._width = _width;
        _this._height = _height;
        return _this;
    }
    Rectangle.prototype.area = function () {
        return this._width * this._height;
    };
    Object.defineProperty(Rectangle.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (width) {
            this._width = width;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (height) {
            this._height = height;
        },
        enumerable: false,
        configurable: true
    });
    return Rectangle;
}(shape_1.Shape));
exports.Rectangle = Rectangle;
// @ts-ignore
var rectangle_1 = require("./rectangle");
exports.Rectangle = rectangle_1.Rectangle;
var rectangle = new rectangle_1.Rectangle(5, 5, 10, 20);
console.log(rectangle.toString());
console.log(rectangle.area());
