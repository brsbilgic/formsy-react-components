'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.commonDefaults = exports.commonProps = exports.styleClassname = undefined;

var _react = require('react');

// JedWatson/classnames
// --------------------
//
// This is a PropType definition that is suitable for converting to a HTML 'class' attribute value.
// See: https://github.com/JedWatson/classnames
var styleClassname = exports.styleClassname = _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.array, _react.PropTypes.object]);

var commonProps = exports.commonProps = {
    id: _react.PropTypes.string.isRequired,
    name: _react.PropTypes.string.isRequired,
    disabled: _react.PropTypes.bool,
    errorMessages: _react.PropTypes.array,
    help: _react.PropTypes.string,
    label: _react.PropTypes.string,
    layout: _react.PropTypes.oneOf(['horizontal', 'vertical', 'elementOnly']),
    showErrors: _react.PropTypes.bool,
    onChange: _react.PropTypes.func,
    onSetValue: _react.PropTypes.func
};

var commonDefaults = exports.commonDefaults = {
    onSetValue: function onSetValue() {},
    onChange: function onChange() {}
};