import React = require('react');
import { Image, ImageLink, TextInput, CheckBox, Button } from './index'

const placeholderUrl = 'https://placeholdit.imgix.net/~text?txtsize=13&txt=140%C3%97100&w=140&h=100';

interface AppState {
  textInputValue: string;
  checkBoxValue: boolean;
}


export class App extends React.Component<{}, AppState> {

  constructor() {
    super();

    this.state = {
      textInputValue: '',
      checkBoxValue: true
    };
  }

  textInputOnChange = (e) => {
    this.setState({textInputValue: e.target.value})
  };

  checkBoxOnChange = () => {
    this.setState({checkBoxValue: !this.state.checkBoxValue});
  };

  render() {
    return (
      <div>
        <h2>Components Demo</h2>
        <section>
          <h3>{'<Image />'}</h3>
          <Image src={placeholderUrl} />
        </section>
        <section>
          <h3>{'<ImageLink />'}</h3>
          <ImageLink imageSrc={placeholderUrl} url="http://www.google.com"/>
        </section>
        <section>
          <h3>{'<TextInput />'}</h3>
          <TextInput value={this.state.textInputValue} onChange={this.textInputOnChange} />
        </section>
        <section>
          <h3>{'<CheckBox />'}</h3>
          <CheckBox value={this.state.checkBoxValue} onChange={this.checkBoxOnChange} />
        </section>
        <section>
          <h3>{'<Button />'}</h3>
          <Button label="Magic" onClick={this.checkBoxOnChange} />
        </section>
      </div>
    )
  }
}