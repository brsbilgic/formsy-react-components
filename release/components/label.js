'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _dedupe = require('classnames/dedupe');

var _dedupe2 = _interopRequireDefault(_dedupe);

var _requiredSymbol = require('./required-symbol');

var _requiredSymbol2 = _interopRequireDefault(_requiredSymbol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Label = function Label(props) {
    var layout = props.layout;
    var label = props.label;
    var htmlFor = props.htmlFor;
    var labelClassName = props.labelClassName;
    var fakeLabel = props.fakeLabel;
    var required = props.required;


    if (layout === 'elementOnly') {
        return null;
    }

    var labelClassNames = (0, _dedupe2.default)(['control-label', layout === 'horizontal' ? 'col-sm-3' : '', labelClassName]);

    if (fakeLabel) {
        return _react2.default.createElement(
            'div',
            {
                className: labelClassNames,
                'data-required': required
            },
            _react2.default.createElement(
                'strong',
                null,
                label,
                _react2.default.createElement(_requiredSymbol2.default, { required: required })
            )
        );
    }

    return _react2.default.createElement(
        'label',
        {
            className: labelClassNames,
            'data-required': required,
            htmlFor: htmlFor
        },
        label,
        _react2.default.createElement(_requiredSymbol2.default, { required: required })
    );
};

Label.propTypes = {
    fakeLabel: _react.PropTypes.bool,
    htmlFor: _react.PropTypes.string,
    label: _react.PropTypes.node,
    labelClassName: _react2.default.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.array, _react.PropTypes.object]),
    layout: _react.PropTypes.oneOf(['horizontal', 'vertical', 'elementOnly']),
    required: _react.PropTypes.bool
};

exports.default = Label;