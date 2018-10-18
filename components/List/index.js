import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import ListItem from '../ListItem';
import styles from './styles';

class List extends Component {
  static propTypes = {
    children: PropTypes.array,
    getBulletElement: PropTypes.func,
    level: PropTypes.number.isRequired,
    customStyle: PropTypes.object,
    customBulletStyle: PropTypes.object,
    alignBullets: PropTypes.oneOf(['top', 'bottom', 'center']),
  };

  static defaultProps = {
    children: [],
    getBulletElement: () => null,
    alignBullets: 'center',
  };

  render() {
    var { children, level, getBulletElement, alignBullets } = this.props;

    if (!Array.isArray(children)) {
      children = [children];
    }

    return (
      <View style={this.props.customStyle}>
        {children.map((child, idx) => {
          if (child.type == ListItem) {
            return (
              <View style={[styles.listItemContainer, styles[alignBullets]]}>
                <View style={[styles.bullet]}>{getBulletElement(idx)}</View>
                {child}
              </View>
            );
          }

          return (
            <View style={styles.childContainer}>
              {React.cloneElement(child, {
                level: level + 1,
              })}
            </View>
          );
        })}
      </View>
    );
  }
}

export default List;
