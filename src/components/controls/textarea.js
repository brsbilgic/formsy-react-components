import React, { PropTypes } from 'react';

const TextareaControl = (props) => {
    const {layout, updateOn, ...rest} = props;
    return (
        <textarea {...rest} />
    );
}

TextareaControl.propTypes = {
    className: PropTypes.string,
    value: PropTypes.string
}

TextareaControl.defaultProps = {
    className: 'form-control',
    value: ''
}

export default TextareaControl;
