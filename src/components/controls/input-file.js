import React from 'react';

// A file control can only be set to an empty string.
// I think we need to keep this as an uncontrolled component, so we override the
// value.prop.
const FileControl = (props) => {
    const {layout, ...rest} = props;

    return (
        <input
            {...rest}
            type="file"
            label={undefined}
            value={undefined}
        />
    );
}

export default FileControl;
