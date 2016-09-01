"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// A file control can only be set to an empty string.
// I think we need to keep this as an uncontrolled component, so we override the
// value.prop.
var FileControl = function FileControl(props) {
    return _react2.default.createElement("input", _extends({}, props, {
        type: "file",
        label: undefined,
        value: undefined
    }));
};

exports.default = FileControl;