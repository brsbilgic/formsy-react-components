'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextareaControl = function TextareaControl(props) {
    return _react2.default.createElement('textarea', props);
};

TextareaControl.propTypes = {
    className: _react.PropTypes.string,
    value: _react.PropTypes.string
};

TextareaControl.defaultProps = {
    className: 'form-control',
    value: ''
};

exports.default = TextareaControl;