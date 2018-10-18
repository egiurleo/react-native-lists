import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  listItemContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  top: {
    alignItems: 'flex-start',
  },
  center: {
    alignItems: 'center',
  },
  bottom: {
    alignItems: 'flex-end',
  },
  bullet: {
    marginRight: 5,
  },
  childContainer: {
    paddingLeft: 10,
  },
});

export default styles;
