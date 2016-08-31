'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('./prop-types');

var _errorMessages = require('./error-messages');

var _errorMessages2 = _interopRequireDefault(_errorMessages);

var _help = require('./help');

var _help2 = _interopRequireDefault(_help);

var _row = require('./row');

var _row2 = _interopRequireDefault(_row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Checkbox = function (_Component) {
    _inherits(Checkbox, _Component);

    function Checkbox() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Checkbox);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (event) {
            var value = event.currentTarget.checked;
            _this.props.onSetValue(value);
            _this.props.onChange(_this.props.name, value);
        }, _this.renderElement = function () {
            var _this$props = _this.props;
            var valueLabel = _this$props.valueLabel;
            var elementWrapperClassName = _this$props.elementWrapperClassName;
            var errorMessages = _this$props.errorMessages;
            var labelClassName = _this$props.labelClassName;
            var layout = _this$props.layout;
            var rowClassName = _this$props.rowClassName;
            var showErrors = _this$props.showErrors;
            var onSetValue = _this$props.onSetValue;
            var instance = _this$props.instance;

            var rest = _objectWithoutProperties(_this$props, ['valueLabel', 'elementWrapperClassName', 'errorMessages', 'labelClassName', 'layout', 'rowClassName', 'showErrors', 'onSetValue', 'instance']);

            return _react2.default.createElement(
                'div',
                { className: 'checkbox' },
                _react2.default.createElement(
                    'label',
                    null,
                    _react2.default.createElement('input', _extends({}, rest, {
                        type: 'checkbox',
                        label: undefined,
                        checked: _this.props.value === true,
                        onChange: _this.handleChange
                    })),
                    ' ',
                    _this.props.valueLabel
                )
            );
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Checkbox, [{
        key: 'render',
        value: function render() {
            var element = this.renderElement();

            if (this.props.layout === 'elementOnly') {
                return element;
            }

            return _react2.default.createElement(
                _row2.default,
                _extends({}, this.props, {
                    fakeLabel: true,
                    htmlFor: this.props.id
                }),
                element,
                this.props.help ? _react2.default.createElement(_help2.default, { help: this.props.help }) : null,
                this.props.showErrors ? _react2.default.createElement(_errorMessages2.default, { messages: this.props.errorMessages }) : null
            );
        }
    }]);

    return Checkbox;
}(_react.Component);

/*
 * TODO Document this API change.
 *
 * The expected props for this component have been changed for consistency with
 * the other components.
 *
 * Should warn and depricate this on the master branch.
 *
 * if rowLabel and label passed:
 * - show deprication warning.
 * - behind the scenes:
 *   - map 'label' to 'valueLabel'
 *   - map 'rowLabel' to 'label'
 *
 * if valueLabel and label passed:
 * - no warning, new API being used
 *
 * Old was:
 *
 * Checkbox.propTypes = {
 *     ...commonProps,
 *     rowLabel: PropTypes.string,
 *     value: PropTypes.bool
 * };
 */


Checkbox.propTypes = _extends({}, _propTypes.commonProps, {
    value: _react.PropTypes.bool,
    valueLabel: _react.PropTypes.string
});

Checkbox.defaultProps = _extends({}, _propTypes.commonDefaults, {
    value: false,
    valueLabel: ''
});

exports.default = Checkbox;