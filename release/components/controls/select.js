'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var SelectControl = function SelectControl(props) {

    var renderOption = function renderOption(item, key) {
        return _react2.default.createElement(
            'option',
            _extends({ key: key }, item, { label: null }),
            item.label
        );
    };

    var options = props.options;

    var groups = options.filter(function (item) {
        return item.group;
    }).map(function (item) {
        return item.group;
    });
    // Get the unique items in group.
    groups = [].concat(_toConsumableArray(new Set(groups)));

    var optionNodes = [];

    if (groups.length == 0) {
        optionNodes = options.map(function (item, index) {
            return renderOption(item, index);
        });
    } else {
        // For items without groups.
        var itemsWithoutGroup = options.filter(function (item) {
            return !item.group;
        });

        itemsWithoutGroup.forEach(function (item, index) {
            optionNodes.push(renderOption(item, 'no-group-' + index));
        });

        groups.forEach(function (group, groupIndex) {

            var groupItems = options.filter(function (item) {
                return item.group === group;
            });

            var groupOptionNodes = groupItems.map(function (item, index) {
                return renderOption(item, groupIndex + '-' + index);
            });

            optionNodes.push(_react2.default.createElement(
                'optgroup',
                { label: group, key: groupIndex },
                groupOptionNodes
            ));
        });
    }
    return _react2.default.createElement(
        'select',
        _extends({
            className: 'form-control'
        }, props),
        optionNodes
    );
};

SelectControl.propTypes = {
    options: _react.PropTypes.arrayOf(_react.PropTypes.shape({
        value: _react.PropTypes.string,
        label: _react.PropTypes.string,
        group: _react.PropTypes.string
    })).isRequired,
    multiple: _react.PropTypes.bool
};

exports.default = SelectControl;