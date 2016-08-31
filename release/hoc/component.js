'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FormsyReactComponent = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _formsyReact = require('formsy-react');

var _propTypes = require('../components/prop-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Component HOC
// -------------
//
// This mixin provides shared code for our form components.
//
// We also use this to merge props set using the ParentContextMixin, so that
// commonly used props can be set on an enclosing component.
//
// This allows us to set these properties 'as a whole' for each component in the
// the form, while retaining the ability to override the prop on a per-component
// basis.
var FormsyReactComponent = exports.FormsyReactComponent = function FormsyReactComponent(ComposedComponent) {
    var ComponentHOC = function (_Component) {
        _inherits(ComponentHOC, _Component);

        function ComponentHOC() {
            var _ref;

            var _temp, _this, _ret;

            _classCallCheck(this, ComponentHOC);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ComponentHOC.__proto__ || Object.getPrototypeOf(ComponentHOC)).call.apply(_ref, [this].concat(args))), _this), _this.mergeLayoutContext = function () {
                return _this.props.layout || _this.context.layout || 'horizontal';
            }, _this.mergeValidatePristineContext = function () {
                if (typeof _this.props.validatePristine === 'boolean') {
                    return _this.props.validatePristine;
                }
                return _this.context.validatePristine || false;
            }, _this.getComponentProps = function () {
                return {
                    disabled: _this.props.isFormDisabled() || _this.props.disabled,
                    elementWrapperClassName: _this.combineContextWithProp('elementWrapperClassName'),
                    errorMessages: _this.props.getErrorMessages(),
                    id: _this.getId(),
                    labelClassName: _this.combineContextWithProp('labelClassName'),
                    layout: _this.mergeLayoutContext(),
                    required: _this.props.isRequired(),
                    rowClassName: _this.combineContextWithProp('rowClassName'),
                    showErrors: _this.shouldShowErrors(),
                    value: _this.props.getValue(),
                    onSetValue: _this.props.setValue,
                    instance: _this.getInstance
                };
            }, _this.getId = function () {
                var _this$props = _this.props;
                var id = _this$props.id;
                var label = _this$props.label;
                var name = _this$props.name;

                if (id !== '') {
                    return id;
                }
                return ['frc', name.split('[').join('_').replace(']', ''), _this.hashString(JSON.stringify(label))].join('-');
            }, _this.hashString = function (string) {
                var hash = 0;
                for (var i = 0; i < string.length; i++) {
                    hash = (hash << 5) - hash + string.charCodeAt(i) & 0xFFFFFFFF;
                }
                return hash;
            }, _this.shouldShowErrors = function () {
                if (_this.props.isPristine() === true) {
                    if (_this.mergeValidatePristineContext() === false) {
                        return false;
                    }
                }
                return _this.props.isValid() === false;
            }, _this.getInstance = function () {
                var instance = _this.refs.instance;

                if (typeof instance.getInstance === "function") {
                    return instance.getInstance();
                }

                return instance;
            }, _temp), _possibleConstructorReturn(_this, _ret);
        }

        // Use the following value for layout:
        // 1. layout prop (if supplied)
        // 2. [else] layout context (if defined)
        // 3. [else] 'horizontal' (default value)


        // Use the following value for layout:
        // 1. validatePristine prop (if supplied)
        // 2. [else] validatePristine context (if defined)
        // 3. [else] false (default value)


        _createClass(ComponentHOC, [{
            key: 'combineContextWithProp',


            // Combine the parent context value with the component prop value.
            // This is used for CSS classnames, where the value is passed to `JedWatson/classnames`.
            value: function combineContextWithProp(key) {
                return [this.context[key], this.props[key]];
            }

            // getId
            // -----
            //
            // The ID is used as an attribute on the form control, and is used to allow
            // associating the label element with the form control.
            //
            // If we don't explicitly pass an `id` prop, we generate one based on the
            // `name` and `label` properties.


            // Determine whether to show errors, or not.

        }, {
            key: 'render',


            // We pass through all props, but some are overwritten with `massaged`
            // versions to give our components what they expect.
            value: function render() {

                var props = _extends({}, this.props, this.getComponentProps());

                // Formsy HOC props we don't use.
                delete props.getErrorMessage;
                delete props.getErrorMessages;
                delete props.getValue;
                delete props.hasValue;
                delete props.isFormDisabled;
                delete props.isFormSubmitted;
                delete props.isPristine;
                delete props.isRequired;
                delete props.isValid;
                delete props.isValidValue;
                delete props.resetValue;
                delete props.setValidations;
                delete props.setValue;
                delete props.showError;
                delete props.showRequired;

                // Formsy props we don't use
                delete props.validationError;
                delete props.validationErrors;
                delete props.validations;

                return _react2.default.createElement(ComposedComponent, _extends({ ref: 'instance'
                }, props));
            }
        }]);

        return ComponentHOC;
    }(_react.Component);

    // These are the props that we require from the formsy-react HOC.
    // There are others, but as we don't use them, we don't need to define their PropTypes.


    var formsyPropTypes = {
        getErrorMessages: _react.PropTypes.func.isRequired,
        getValue: _react.PropTypes.func.isRequired,
        isFormDisabled: _react.PropTypes.func.isRequired,
        isPristine: _react.PropTypes.func.isRequired,
        isRequired: _react.PropTypes.func.isRequired,
        isValid: _react.PropTypes.func.isRequired,
        setValue: _react.PropTypes.func.isRequired
    };

    ComponentHOC.propTypes = _extends({}, formsyPropTypes, {

        name: _react.PropTypes.string.isRequired,
        disabled: _react.PropTypes.bool,
        elementWrapperClassName: _propTypes.styleClassname,

        // Not used here, but composed components expect this to be a string.
        help: _react.PropTypes.string,

        id: _react.PropTypes.string,
        label: _react.PropTypes.string,
        labelClassName: _propTypes.styleClassname,
        layout: _react.PropTypes.string,
        rowClassName: _propTypes.styleClassname,

        // Whether to show validation errors on pristine (untouched) components.
        // Note: this doesn't stop the validation from running, it's just a flag
        // to determine whether the error messages should be shown on components
        // in their 'pristine' state.
        validatePristine: _react.PropTypes.bool,

        // TODO: Not sure having these here this is a good idea.
        // These callbacks are not used here, but added because composed
        // components expect these to be present. (See defaultProps).
        onBlur: _react.PropTypes.func,
        onChange: _react.PropTypes.func,
        onFocus: _react.PropTypes.func
    });

    ComponentHOC.contextTypes = {
        layout: _react.PropTypes.string,
        validatePristine: _react.PropTypes.bool,
        rowClassName: _propTypes.styleClassname,
        labelClassName: _propTypes.styleClassname,
        elementWrapperClassName: _propTypes.styleClassname
    };

    // TODO: Should we add default props for the following?:
    // * elementWrapperClassName
    // * labelClassName
    // * rowClassName

    // The following props get their default values by first looking for props in the parent context.
    // * layout (See mergeLayoutContext, defaults to 'horizontal')
    // * validatePristine: (See mergeValidatePristineContext, defaults to 'false'),
    ComponentHOC.defaultProps = {
        disabled: false,
        id: '',
        label: '',
        onBlur: function onBlur() {},
        onChange: function onChange() {},
        onFocus: function onFocus() {}
    };

    return (0, _formsyReact.HOC)(ComponentHOC);
};