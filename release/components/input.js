'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash.debounce');

var _lodash2 = _interopRequireDefault(_lodash);

var _propTypes = require('./prop-types');

var _errorMessages = require('./error-messages');

var _errorMessages2 = _interopRequireDefault(_errorMessages);

var _help = require('./help');

var _help2 = _interopRequireDefault(_help);

var _icon = require('./icon');

var _icon2 = _interopRequireDefault(_icon);

var _input = require('./controls/input');

var _input2 = _interopRequireDefault(_input);

var _inputGroup = require('./input-group');

var _inputGroup2 = _interopRequireDefault(_inputGroup);

var _row = require('./row');

var _row2 = _interopRequireDefault(_row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Input = function (_Component) {
    _inherits(Input, _Component);

    function Input(props) {
        _classCallCheck(this, Input);

        var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));

        _this.componentWillReceiveProps = function (nextProps) {
            var isValueChanging = nextProps.value !== _this.props.value;
            if (isValueChanging) {
                _this.setState({ value: nextProps.value });
                _this.props.onSetValue(nextProps.value);
            }
        };

        _this.shouldUpdateOn = function (eventName) {
            var updateOnEventNames = _this.props.updateOn.split(' ');
            return updateOnEventNames.includes(eventName);
        };

        _this.getDebounceInterval = function (eventName) {
            if (_this.props.debounce.hasOwnProperty(eventName)) {
                return _this.props.debounce[eventName];
            }
            return 0;
        };

        _this.handleChange = function (event) {
            var value = event.currentTarget.value;
            _this.setState({ value: value });
            if (_this.shouldUpdateOn('change')) {
                _this.changeDebounced(value);
            }
            _this.props.onChange(_this.props.name, value);
        };

        _this.handleBlur = function (event) {
            var value = event.currentTarget.value;
            _this.setState({ value: value });
            if (_this.shouldUpdateOn('blur')) {
                _this.changeDebounced.cancel();
                _this.blurDebounced(value);
            }
            _this.props.onBlur(_this.props.name, value);
        };

        _this.render = function () {
            var _props = this.props;
            var layout = _props.layout;
            var elementWrapperClassName = _props.elementWrapperClassName;
            var errorMessages = _props.errorMessages;
            var labelClassName = _props.labelClassName;
            var rowClassName = _props.rowClassName;
            var showErrors = _props.showErrors;
            var onSetValue = _props.onSetValue;
            var instance = _props.instance;
            var updateOn = _props.updateOn;
            var debounce = _props.debounce;
            var addonBefore = _props.addonBefore;
            var addonAfter = _props.addonAfter;
            var buttonBefore = _props.buttonBefore;
            var buttonAfter = _props.buttonAfter;
            var help = _props.help;

            var rest = _objectWithoutProperties(_props, ['layout', 'elementWrapperClassName', 'errorMessages', 'labelClassName', 'rowClassName', 'showErrors', 'onSetValue', 'instance', 'updateOn', 'debounce', 'addonBefore', 'addonAfter', 'buttonBefore', 'buttonAfter', 'help']);

            var control = _react2.default.createElement(_input2.default, _extends({}, rest, {
                value: this.state.value,
                onChange: this.handleChange,
                onBlur: this.handleBlur
            }));

            if (this.props.type === 'hidden') {
                return control;
            }

            if (this.props.addonBefore || this.props.addonAfter || this.props.buttonBefore || this.props.buttonAfter) {
                control = _react2.default.createElement(
                    _inputGroup2.default,
                    rest,
                    control
                );
            }

            if (this.props.layout === 'elementOnly') {
                return control;
            }

            return _react2.default.createElement(
                _row2.default,
                _extends({}, this.props, {
                    htmlFor: this.props.id
                }),
                control,
                this.props.showErrors ? _react2.default.createElement(_icon2.default, { symbol: 'remove', className: 'form-control-feedback' }) : null,
                this.props.help ? _react2.default.createElement(_help2.default, { help: this.props.help }) : null,
                this.props.showErrors ? _react2.default.createElement(_errorMessages2.default, { messages: this.props.errorMessages }) : null
            );
        };

        _this.state = { value: props.value };
        _this.changeDebounced = (0, _lodash2.default)(props.onSetValue, _this.getDebounceInterval('change'));
        _this.blurDebounced = (0, _lodash2.default)(props.onSetValue, _this.getDebounceInterval('blur'));
        return _this;
    }

    return Input;
}(_react.Component);

Input.propTypes = _extends({}, _propTypes.commonProps, {
    addonAfter: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.node]),
    addonBefore: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.node]),
    buttonAfter: _react.PropTypes.node,
    buttonBefore: _react.PropTypes.node,
    debounce: _react.PropTypes.object,
    type: _react.PropTypes.oneOf(['color', 'date', 'datetime', 'datetime-local', 'email', 'hidden', 'month', 'number', 'password', 'range', 'search', 'tel', 'text', 'time', 'url', 'week']),
    updateOn: _react.PropTypes.string,
    value: _react.PropTypes.string,
    onBlur: _react.PropTypes.func
});

Input.defaultProps = _extends({}, _propTypes.commonDefaults, {
    type: 'text',
    value: '',
    updateOn: 'blur change',
    debounce: {
        blur: 0,
        change: 500
    },
    addonBefore: null,
    addonAfter: null,
    buttonBefore: null,
    buttonAfter: null,
    onBlur: function onBlur() {}
});

exports.default = Input;