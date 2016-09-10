'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var TextareaControl = function TextareaControl(props) {
    var layout = props.layout;
    var updateOn = props.updateOn;

    var rest = _objectWithoutProperties(props, ['layout', 'updateOn']);

    return _react2.default.createElement('textarea', rest);
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