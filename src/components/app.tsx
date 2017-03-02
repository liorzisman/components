import React = require('react');
import { SocialLink } from './index'

const placeholderUrl = 'https://placeholdit.imgix.net/~text?txtsize=13&txt=140%C3%97100&w=140&h=100';


export class App extends React.Component<{}, {}> {


  render() {
    return (
      <div>
        <h2>Components Demo</h2>
        <section>
          <h3>{'<SocialLink/>'}</h3>
          <SocialLink imageSrc={placeholderUrl} onClick={() => console.log('Hello')}/>
        </section>
      </div>
    )
  }
}