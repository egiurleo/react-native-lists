# react-native-lists

A React Native component library that mimics the HTML ordered and unordered list elements.

## Installation
If you use yarn:
```
yarn add react-native-lists
```
If you use npm:
```
npm install react-native-lists --save
```

## Usage
```
import React, { Component } from 'react';
import { OrderedList, ListItem } from 'react-native-lists';
import { Text } from 'react-native';

class App extends Component {
  render() {
    return (
      <OrderedList type="I">
        <ListItem>
          <Text>Chapter One</Text>
        </ListItem>
        <ListItem>
          <Text>Chapter Two</Text>
        </ListItem>
      </OrderedList>
    );
  }
}
```

## Components

### UnorderedList
|Prop|Type|Description|
|-------------------|-----------------------------------|-------------------------------------------------------------------------------------------------------|
| `type`            | String or React element           | Supports all regular HTML types ("disc", "circle", "square", "none") as well as custom React elements |
| `customStyle`     | Object                            | Custom styles for the list object                                                                     |
|`customBulletStyle`| Object                            | Custom styles for the list bullets                                                                    |
|`alignBullets`     | One of: 'top', 'center', 'bottom' | Where to align the list bullets                                                                       |

### OrderedList
| Prop              | Type                              | Description                                               |
|-------------------|-----------------------------------|-----------------------------------------------------------|
|`type`             | String                            | Supports all regular HTML types ("1", "I", "i", "A", "a") |
|`customStyle`      | Object                            | Custom styles for the list object                         |
|`customBulletStyle`| Object                            | Custom styles for the list bullets                        |
|`alignBullets`     | One of: 'top', 'center', 'bottom' | Where to align the list bullets                           |

### ListItem
| Prop        | Type   | Description                     |
|-------------|--------|---------------------------------|
|`customStyle`| Object | Custom styles for the list item |
