import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import ListItem from '../ListItem';
import styles from './styles';

class UnorderedList extends Component {
  static propTypes = {
    children: PropTypes.array,
    type: PropTypes.oneOfType([
      PropTypes.oneOf(['cirlce', 'disc', 'square', 'none']),
      PropTypes.element,
    ]),
  };

  static defaultProps = {
    children: [],
    type: 'disc',
  };

  bulletElement = () => {
    if (this.props.type.type == PropTypes.element) {
      return this.props.type;
    }

    switch (this.props.type) {
      case 'circle':
        return <Text>{'\u25E6'}</Text>;
      case 'disc':
        return <Text>{'\u2022'}</Text>;
      case 'square':
        return <Text>{'\u25A0'}</Text>;
      case 'none':
        return null;
      default:
        throw 'Prop type is invalid!';
    }
  };

  render() {
    return (
      <View>
        {this.props.children.map(child => {
          if (child.type == ListItem) {
            return (
              <View style={styles.listItemContainer}>
                {this.bulletElement()}
                {child}
              </View>
            );
          }

          return child;
        })}
      </View>
    );
  }
}

export default UnorderedList;
