'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InputControl = function InputControl(props) {
    var className = props.className;

    if (['hidden', 'range'].indexOf(props.type) !== -1) {
        className = null;
    }
    // TODO: We've lost our ref in SFC.
    return _react2.default.createElement('input', _extends({}, props, {
        className: className
        //id={props.id}
        //value={props.value}
        //onChange={props.onChange}
    }));
};

InputControl.propTypes = {
    type: _react.PropTypes.string.isRequired,
    value: _react.PropTypes.string.isRequired,
    className: _react.PropTypes.string
};

InputControl.defaultProps = {
    className: 'form-control',
    type: 'text'
};

exports.default = InputControl;