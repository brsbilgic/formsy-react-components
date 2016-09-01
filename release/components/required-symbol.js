'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RequiredSymbol = function RequiredSymbol(props) {
    if (props.required === false) {
        return null;
    }
    return _react2.default.createElement(
        'span',
        { className: 'required-symbol' },
        props.symbol
    );
};

RequiredSymbol.propTypes = {
    required: _react.PropTypes.bool.isRequired,
    symbol: _react.PropTypes.node
};

RequiredSymbol.defaultProps = {
    symbol: ' *'
};

exports.default = RequiredSymbol;