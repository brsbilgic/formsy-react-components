import React, { Component, PropTypes } from 'react';
import { HOC as FormsyHOC } from 'formsy-react';
import { styleClassname } from '../components/prop-types';

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
export var FormsyReactComponent = (ComposedComponent) => {
    class ComponentHOC extends Component {

        // Use the following value for layout:
        // 1. layout prop (if supplied)
        // 2. [else] layout context (if defined)
        // 3. [else] 'horizontal' (default value)
        mergeLayoutContext = () => {
            return this.props.layout || (this.context.layout || 'horizontal');
        }

        // Use the following value for layout:
        // 1. validatePristine prop (if supplied)
        // 2. [else] validatePristine context (if defined)
        // 3. [else] false (default value)
        mergeValidatePristineContext = () => {
            if (typeof this.props.validatePristine === 'boolean') {
                return this.props.validatePristine;
            }
            return this.context.validatePristine || false;
        }

        // Combine the parent context value with the component prop value.
        // This is used for CSS classnames, where the value is passed to `JedWatson/classnames`.
        combineContextWithProp(key) {
            return [this.context[key], this.props[key]];
        }

        getComponentProps = () => {
            return {
                disabled:                this.props.isFormDisabled() || this.props.disabled,
                elementWrapperClassName: this.combineContextWithProp('elementWrapperClassName'),
                errorMessages:           this.props.getErrorMessages(),
                id:                      this.getId(),
                labelClassName:          this.combineContextWithProp('labelClassName'),
                layout:                  this.mergeLayoutContext(),
                required:                this.props.isRequired(),
                rowClassName:            this.combineContextWithProp('rowClassName'),
                showErrors:              this.shouldShowErrors(),
                value:                   this.props.getValue(),
                onSetValue:              this.props.setValue,
                instance:                this.getInstance,
            };
        }

        // getId
        // -----
        //
        // The ID is used as an attribute on the form control, and is used to allow
        // associating the label element with the form control.
        //
        // If we don't explicitly pass an `id` prop, we generate one based on the
        // `name` and `label` properties.
        getId = () => {
            let { id, label, name } = this.props;
            if (id !== '') {
                return id;
            }
            return [
                'frc',
                name.split('[').join('_').replace(']', ''),
                this.hashString(JSON.stringify(label))
            ].join('-');
        }

        hashString = (string) => {
            var hash = 0;
            for (var i = 0; i < string.length; i++) {
                hash = (((hash << 5) - hash) + string.charCodeAt(i)) & 0xFFFFFFFF;
            }
            return hash;
        }

        // Determine whether to show errors, or not.
        shouldShowErrors = () => {
            if (this.props.isPristine() === true) {
                if (this.mergeValidatePristineContext() === false) {
                    return false;
                }
            }
            return (this.props.isValid() === false);
        }

        // We pass through all props, but some are overwritten with `massaged`
        // versions to give our components what they expect.
        render() {

            let props = {
                ...this.props,
                ...this.getComponentProps()
            };

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

            return (
                <ComposedComponent ref="instance"
                    {...props}
                />
            );
        }

        getInstance = () => {
          var instance = this.refs.instance;

          if (typeof instance.getInstance === "function") {
            return instance.getInstance();
          }

          return instance;
        }
    }

    // These are the props that we require from the formsy-react HOC.
    // There are others, but as we don't use them, we don't need to define their PropTypes.
    const formsyPropTypes = {
        getErrorMessages: PropTypes.func.isRequired,
        getValue: PropTypes.func.isRequired,
        isFormDisabled: PropTypes.func.isRequired,
        isPristine: PropTypes.func.isRequired,
        isRequired: PropTypes.func.isRequired,
        isValid: PropTypes.func.isRequired,
        setValue: PropTypes.func.isRequired
    };

    ComponentHOC.propTypes = {

        ...formsyPropTypes,

        name: PropTypes.string.isRequired,
        disabled: PropTypes.bool,
        elementWrapperClassName: styleClassname,

        // Not used here, but composed components expect this to be a string.
        help: PropTypes.string,

        id: PropTypes.string,
        label: PropTypes.string,
        labelClassName: styleClassname,
        layout: PropTypes.string,
        rowClassName: styleClassname,

        // Whether to show validation errors on pristine (untouched) components.
        // Note: this doesn't stop the validation from running, it's just a flag
        // to determine whether the error messages should be shown on components
        // in their 'pristine' state.
        validatePristine: PropTypes.bool,

        // TODO: Not sure having these here this is a good idea.
        // These callbacks are not used here, but added because composed
        // components expect these to be present. (See defaultProps).
        onBlur: PropTypes.func,
        onChange: PropTypes.func,
        onFocus: PropTypes.func
    };

    ComponentHOC.contextTypes = {
        layout: PropTypes.string,
        validatePristine: PropTypes.bool,
        rowClassName: styleClassname,
        labelClassName: styleClassname,
        elementWrapperClassName: styleClassname
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
        onBlur: function() {},
        onChange: function() {},
        onFocus: function() {}
    };

    return FormsyHOC(ComponentHOC);

};
