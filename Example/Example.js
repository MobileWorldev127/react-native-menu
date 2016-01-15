'use strict';

const React = require('react-native');
const {
  StyleSheet,
  Text,
  View
  } = React;
const Menu = require('react-native-menu');
const { MenuContext, MenuTrigger, MenuOptions, MenuOption } = Menu;

const Example = React.createClass({
  getInitialState() {
    return { message: 'Click the top-right menu triggers' };
  },
  onSelect(value) {
    if (typeof value === 'object') {
      this.setState({ message: `Woah!\n\nYou selected an object:\n\n${JSON.stringify(value)}` });
    } else {
      this.setState({ message: `You selected "${value}"` });
    }
    return value !== 'do not close';
  },
  render() {
    return (
      <MenuContext style={{ flex: 1 }}>
        <View style={styles.topbar}>
          <View style={styles.title}>
            <Text style={styles.titleText}>First</Text>
          </View>
          <Menu name ="menu1" onSelect={this.onSelect}>
            <MenuTrigger style={styles.menuTrigger}>
              <Text style={styles.menuTriggerText}>&#8942;</Text>
            </MenuTrigger>
            <MenuOptions style={styles.menuOptions}>
              <MenuOption value="normal">
                <Text>Normal option</Text>
              </MenuOption>
              <MenuOption value="do not close">
                <Text>Does not close menu</Text>
              </MenuOption>
              <MenuOption value="disabled" disabled={true}>
                <Text style={styles.disabled}>Disabled option</Text>
              </MenuOption>
              <View style={styles.divider}/>
              <MenuOption value={{ message: 'Hello World!' }}>
                <Text>Option with object value</Text>
              </MenuOption>
            </MenuOptions>
          </Menu>
        </View>
        <View style={[styles.topbar, { backgroundColor: '#333' }]}>
          <View style={styles.title}>
            <Text style={styles.titleText}>Second</Text>
          </View>
          <Menu name="menu2">
            <MenuTrigger style={styles.menuTrigger}>
              <Text style={styles.menuTriggerText}>&#8942;</Text>
            </MenuTrigger>
            <MenuOptions>
              <MenuOption value={1}>
                <Text>One</Text>
              </MenuOption>
              <MenuOption value={2}>
                <Text>Two</Text>
              </MenuOption>
              <MenuOption value={3}>
                <Text>Three</Text>
              </MenuOption>
            </MenuOptions>
          </Menu>
        </View>
        <View style={styles.content}>
          <Text style={styles.contentText}>
            { this.state.message }
          </Text>
        </View>
      </MenuContext>
    );
  }
});

const styles = StyleSheet.create({
  topbar: {
    flexDirection: 'row',
    backgroundColor: 'black',
    paddingHorizontal: 5,
    paddingVertical: 10
  },
  title: {
    flex: 1,
    alignSelf: 'flex-start',
    paddingLeft: 5
  },
  titleText: {
    color: '#ddd',
    fontSize: 20
  },
  menuTrigger: {
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    paddingHorizontal: 10
  },
  menuTriggerText: {
    color: 'lightgrey',
    fontWeight: '600',
    fontSize: 20
  },
  disabled: {
    color: '#ccc'
  },
  divider: {
    marginVertical: 5,
    marginHorizontal: 2,
    borderBottomWidth: 1,
    borderColor: '#eee'
  },
  content: { flex: 1, alignItems: 'center', backgroundColor: 'lightgrey',justifyContent: 'center' },
  contentText: { fontSize: 20 }
});

module.exports = Example;
