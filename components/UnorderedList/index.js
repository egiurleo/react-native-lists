import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import List from '../List';
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

  getBulletElement = _ => {
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

    return bullet;
  };

  render() {
    const { children, type, level } = this.props;

    return (
      <List type={type} level={level} getBulletElement={this.getBulletElement}>
        {children}
      </List>
    );
  }
}

export default UnorderedList;
