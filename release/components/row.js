'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _dedupe = require('classnames/dedupe');

var _dedupe2 = _interopRequireDefault(_dedupe);

var _label = require('./label');

var _label2 = _interopRequireDefault(_label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Row = function Row(props) {
    var elementWrapperClassName = props.elementWrapperClassName;
    var required = props.required;
    var rowClassName = props.rowClassName;
    var showErrors = props.showErrors;
    var layout = props.layout;
    var label = props.label;


    var element = props.children;

    if (layout === 'elementOnly') {
        return _react2.default.createElement(
            'span',
            null,
            element
        );
    }

    var cssClasses = {
        row: ['form-group'],
        elementWrapper: []
    };

    if (showErrors) {
        cssClasses.row.push('has-error');
        cssClasses.row.push('has-feedback');
    }

    // We should render the label if there is label text defined, or if the
    // component is required (so a required symbol is displayed in the label tag)
    var shouldRenderLabel = label !== null || required;

    if (layout === 'horizontal') {

        // Horizontal layout needs a 'row' class for Bootstrap 4
        cssClasses.row.push('row');

        if (!shouldRenderLabel) {
            cssClasses.elementWrapper.push('col-sm-offset-3');
        }

        cssClasses.elementWrapper.push('col-sm-9');
        cssClasses.elementWrapper.push(elementWrapperClassName);

        element = _react2.default.createElement(
            'div',
            { className: (0, _dedupe2.default)(cssClasses.elementWrapper) },
            element
        );
    }

    cssClasses.row.push(rowClassName);

    return _react2.default.createElement(
        'div',
        { className: (0, _dedupe2.default)(cssClasses.row) },
        shouldRenderLabel ? _react2.default.createElement(_label2.default, props) : null,
        element
    );
};

Row.propTypes = {
    children: _react.PropTypes.node,
    elementWrapperClassName: _react2.default.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.array, _react.PropTypes.object]),
    fakeLabel: _react.PropTypes.bool,
    htmlFor: _react.PropTypes.string,
    label: _react.PropTypes.node,
    labelClassName: _react2.default.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.array, _react.PropTypes.object]),
    layout: _react.PropTypes.oneOf(['horizontal', 'vertical', 'elementOnly']),
    required: _react.PropTypes.bool,
    rowClassName: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.array, _react.PropTypes.object]),
    showErrors: _react.PropTypes.bool
};

Row.defaultProps = {
    label: null,
    rowClassName: '',
    labelClassName: '',
    elementWrapperClassName: '',
    required: false,
    showErrors: false,
    fakeLabel: false
};

exports.default = Row;