# components
A few Controlled components for React.js that i use in my apps.

[![NPM](https://nodei.co/npm/react-controlled-components.png?mini=true)](https://npmjs.org/package/react-controlled-components)

## What is a controlled component?
[Controlled components](https://facebook.github.io/react/docs/forms.html#controlled-components) do not maintain their own value as a state.

They get it from a parent component, along with a function to let the parent know an action to change the value has occurred.

## How to use

1. Install the package using npm: ```npm install --save react-controlled-components```
2. Import the required components (for example: ```import { Button } from 'react-controlled-components';```)
3. That's it! the components are ready for use.

## Basic Components

### Image
A simple image component that lets you provide a placeholder source incase the main one fails.

### ImageLink
An image that will navigate to a provided url when clicked.

### TextInput
A simple text input.

### CheckBox
A simple toggle component.

### Button
A simple button.

## Styling 
All components have a prop named `className` which allows you to pass a string for a class to be placed on the root element of a container.
