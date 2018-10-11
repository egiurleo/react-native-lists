import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import ListItem from "components/ListItem";
import styles from "./styles";

class UnorderedList extends Component {
  static propTypes = {
    children: PropTypes.array
  };

  static defaultProps = {
    children: []
  };

  render() {
    return (
      <View>
        {this.props.children.map(child => {
          if (child.type == ListItem) {
            return (
              <View>
                {"-"}
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
