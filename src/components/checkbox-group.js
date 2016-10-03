import React, { Component, PropTypes } from 'react';
import { commonProps, commonDefaults } from './prop-types';
import ErrorMessages from './error-messages';
import Help from './help';
import Row from './row';

class CheckboxGroup extends Component {

    // Returns an array of the values of all checked items.
    handleChange = (event) => {

        let { options, name } = this.props;
        let checkedOptions = options.filter((option, key) => {
            return this.refs['element-' + key].checked;
        });
        let value = checkedOptions.map(option => {
            return option.value;
        });
        this.props.onSetValue(value, event.target.value);
        this.props.onChange(name, value, event.target.value);
    }

    renderElement = () => {
        const controls = this.props.options.map((checkbox, key) => {
            let checked = (this.props.value.indexOf(checkbox.value) !== -1);
            let disabled = checkbox.disabled || this.props.disabled;
            return (
                <div className="checkbox" key={key}>
                    <label>
                        <input
                            ref={'element-' + key}
                            checked={checked}
                            type="checkbox"
                            value={checkbox.value}
                            onChange={this.handleChange}
                            disabled={disabled}
                        /> {checkbox.label}
                    </label>
                </div>
            );
        });
        return controls;
    }

    render() {

        let element = this.renderElement();

        if (this.props.layout === 'elementOnly') {
            return (
                <div>{element}</div>
            );
        }

        return (
            <Row
                {...this.props}
                fakeLabel={true}
            >
                {element}
                {this.props.help ? <Help help={this.props.help} /> : null}
                {this.props.showErrors ? <ErrorMessages messages={this.props.errorMessages} /> : null}
            </Row>
        );
    }
}

CheckboxGroup.propTypes = {
    ...commonProps,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            disabled: PropTypes.bool,
            value: PropTypes.string,
            label: PropTypes.node
        })
    ),
    value: PropTypes.array
};

CheckboxGroup.defaultProps = {
    ...commonDefaults,
    label: '',
    options: [],
    value: [],
    help: null
};

export default CheckboxGroup;
