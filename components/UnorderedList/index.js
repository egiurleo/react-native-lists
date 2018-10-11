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
    margin: PropTypes.number,
  };

  static defaultProps = {
    children: [],
    type: 'disc',
    margin: 10,
  };

  bulletElement = () => {
    const { type } = this.props;
    let bullet;

    if (type === 'circle') {
      bullet = <Text>{'\u25E6'}</Text>;
    } else if (type === 'disc') {
      bullet = <Text>{'\u2022'}</Text>;
    } else if (type === 'square') {
      <Text>{'\u25A0'}</Text>;
    } else if (type === 'none') {
      return null;
    } else if (React.isValidElement(this.props.type)) {
      bullet = this.props.type;
    } else {
      throw 'Prop type is invalid!';
    }

    return <View style={styles.bullet}>{bullet}</View>;
  };

  render() {
    const { children, margin } = this.props;
    debugger;
    return (
      <View>
        {children.map(child => {
          if (child.type == ListItem) {
            return (
              <View style={[styles.listItemContainer, { paddingLeft: margin }]}>
                {this.bulletElement()}
                {child}
              </View>
            );
          }

          return <View style={[{ paddingLeft: margin }]}>{child}</View>;
        })}
      </View>
    );
  }
}

export default UnorderedList;
