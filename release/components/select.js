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

var _select = require('./controls/select');

var _select2 = _interopRequireDefault(_select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Select = function (_Component) {
    _inherits(Select, _Component);

    function Select() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Select);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Select.__proto__ || Object.getPrototypeOf(Select)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (event) {
            var target = event.currentTarget;
            var value;
            if (_this.props.multiple) {
                value = [];
                for (var i = 0; i < target.length; i++) {
                    var option = target.options[i];
                    if (option.selected) {
                        value.push(option.value);
                    }
                }
            } else {
                value = target.value;
            }
            _this.props.onSetValue(value);
            _this.props.onChange(_this.props.name, value);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Select, [{
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

            var rest = _objectWithoutProperties(_props, ['help', 'elementWrapperClassName', 'errorMessages', 'labelClassName', 'rowClassName', 'showErrors', 'onSetValue', 'instance']);

            var control = _react2.default.createElement(_select2.default, _extends({}, rest, {
                onChange: this.handleChange
            }));

            if (this.props.layout === 'elementOnly') {
                return control;
            }

            return _react2.default.createElement(
                _row2.default,
                _extends({}, this.props, {
                    htmlFor: this.props.id
                }),
                control,
                this.props.help ? _react2.default.createElement(_help2.default, { help: this.props.help }) : null,
                this.props.showErrors ? _react2.default.createElement(_errorMessages2.default, { messages: this.props.errorMessages }) : null
            );
        }
    }]);

    return Select;
}(_react.Component);

Select.propTypes = _extends({}, _propTypes.commonProps, {
    multiple: _react.PropTypes.bool,
    options: _react.PropTypes.arrayOf(_react.PropTypes.shape({
        value: _react.PropTypes.string,
        label: _react.PropTypes.node,
        group: _react.PropTypes.string
    }))
});

Select.defaultProps = {
    options: []
};

exports.default = Select;