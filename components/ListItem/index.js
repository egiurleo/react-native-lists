import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

class ListItem extends Component {
  static propTypes = {
    children: PropTypes.array,
  };

  render() {
    return <View>{this.props.children}</View>;
  }
}

export default ListItem;
