import React, { Component, PropTypes } from 'react';
import { commonProps, commonDefaults } from './prop-types';
import ErrorMessages from './error-messages';
import Help from './help';
import Row from './row';
import Icon from './icon';
import FileControl from './controls/input-file';

class File extends Component {

    handleChange = (event) => {
        let target = event.currentTarget;
        let value = target.value;
        this.props.onSetValue(target.files);

        // We're passing an additional argument to the onChange handler here,
        // the 'value' of the field. This value is actually pretty useless,
        // and we're only including here for completeness.
        // An example value would be: "C:\fakepath\name-of-file.txt". Note that
        // if we select multiple files, it only returns a "fakepath" string for
        // the first file.
        // A web search for "C:\fakepath\" gives more details.
        this.props.onChange(this.props.name, target.files, value);
    }

    render() {
        const {help, elementWrapperClassName, errorMessages, labelClassName, rowClassName, showErrors, onSetValue,
            instance, ...rest} = this.props;
        let control = (
            <FileControl
                {...rest}
                onChange={this.handleChange}
            />
        );

        if (this.props.layout === 'elementOnly') {
            return control;
        }

        return (
            <Row
                {...this.props}
                htmlFor={this.props.id}
            >
                {control}
                {this.props.showErrors ? <Icon symbol="remove" className="form-control-feedback" /> : null}
                {this.props.help ? <Help help={this.props.help} /> : null}
                {this.props.showErrors ? <ErrorMessages messages={this.props.errorMessages} /> : null}
            </Row>
        );
    }

}

File.propTypes = {
    ...commonProps,
    value: PropTypes.object
};

File.defaultProps = {
    ...commonDefaults,
    value: {}
};

export default File;
