'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash.debounce');

var _lodash2 = _interopRequireDefault(_lodash);

var _propTypes = require('./prop-types');

var _errorMessages = require('./error-messages');

var _errorMessages2 = _interopRequireDefault(_errorMessages);

var _help = require('./help');

var _help2 = _interopRequireDefault(_help);

var _row = require('./row');

var _row2 = _interopRequireDefault(_row);

var _textarea = require('./controls/textarea');

var _textarea2 = _interopRequireDefault(_textarea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Textarea = function (_Component) {
    _inherits(Textarea, _Component);

    function Textarea(props) {
        _classCallCheck(this, Textarea);

        var _this = _possibleConstructorReturn(this, (Textarea.__proto__ || Object.getPrototypeOf(Textarea)).call(this, props));

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

        _this.state = { value: props.value };
        _this.changeDebounced = (0, _lodash2.default)(props.onSetValue, _this.getDebounceInterval('change'));
        _this.blurDebounced = (0, _lodash2.default)(props.onSetValue, _this.getDebounceInterval('blur'));
        return _this;
    }

    _createClass(Textarea, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var help = _props.help;
            var elementWrapperClassName = _props.elementWrapperClassName;
            var errorMessages = _props.errorMessages;
            var labelClassName = _props.labelClassName;
            var rowClassName = _props.rowClassName;
            var showErrors = _props.showErrors;
            var onSetValue = _props.onSetValue;
            var instance = _props.instance;
            var updateOn = _props.updateOn;
            var debounce = _props.debounce;

            var rest = _objectWithoutProperties(_props, ['help', 'elementWrapperClassName', 'errorMessages', 'labelClassName', 'rowClassName', 'showErrors', 'onSetValue', 'instance', 'updateOn', 'debounce']);

            var element = _react2.default.createElement(_textarea2.default, _extends({}, rest, {
                value: this.state.value,
                onChange: this.handleChange,
                onBlur: this.handleBlur
            }));

            if (this.props.layout === 'elementOnly') {
                return element;
            }

            return _react2.default.createElement(
                _row2.default,
                _extends({}, this.props, {
                    htmlFor: this.props.id
                }),
                element,
                this.props.help ? _react2.default.createElement(_help2.default, { help: this.props.help }) : null,
                this.props.showErrors ? _react2.default.createElement(_errorMessages2.default, { messages: this.props.errorMessages }) : null
            );
        }
    }]);

    return Textarea;
}(_react.Component);

Textarea.propTypes = _extends({}, _propTypes.commonProps, {
    cols: _react.PropTypes.number,
    debounce: _react.PropTypes.object,
    rows: _react.PropTypes.number,
    updateOn: _react.PropTypes.string,
    value: _react.PropTypes.string,
    onBlur: _react.PropTypes.func
});

Textarea.defaultProps = _extends({}, _propTypes.commonDefaults, {
    cols: 0, // React doesn't render the cols attribute if it is zero
    rows: 3,
    updateOn: 'blur change',
    debounce: {
        blur: 0,
        change: 500
    },
    onBlur: function onBlur() {}
});

exports.default = Textarea;