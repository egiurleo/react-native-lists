import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import ListItem from '../ListItem';
import styles from './styles';

const DISC = 'disc';
const CIRCLE = 'circle';
const SQUARE = 'square';
const NONE = 'none';

class UnorderedList extends Component {
  static propTypes = {
    children: PropTypes.array,
    type: PropTypes.oneOfType([
      PropTypes.oneOf([CIRCLE, DISC, SQUARE, NONE]),
      PropTypes.element,
    ]),
    margin: PropTypes.number,
  };

  static defaultProps = {
    children: [],
    margin: 10,
    level: 0,
  };

  getDefaultBulletType = () => {
    const { level } = this.props;

    switch (level) {
      case 0:
        return DISC;
      case 1:
        return CIRCLE;
      default:
        return SQUARE;
    }
  };

  bulletElement = () => {
    const type = this.props.type || this.getDefaultBulletType();
    let bullet;

    if (type === CIRCLE) {
      bullet = <Text>{'\u25E6'}</Text>;
    } else if (type === DISC) {
      bullet = <Text>{'\u2022'}</Text>;
    } else if (type === SQUARE) {
      bullet = <Text>{'\u25AA'}</Text>;
    } else if (React.isValidElement(type)) {
      bullet = type;
    } else if (type === NONE) {
      return null;
    } else {
      throw 'Prop type is invalid!';
    }

    return <View style={styles.bullet}>{bullet}</View>;
  };

  render() {
    const { children, margin } = this.props;

    return (
      <View>
        {children.map(child => {
          if (child.type == ListItem) {
            return (
              <View style={[styles.listItemContainer]}>
                {this.bulletElement()}
                {child}
              </View>
            );
          }

          return (
            <View style={[{ marginLeft: margin }]}>
              {React.cloneElement(child, {
                level: this.props.level + 1,
                margin,
              })}
            </View>
          );
        })}
      </View>
    );
  }
}

export default UnorderedList;
