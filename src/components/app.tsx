import React = require('react');
import { Image, ImageLink } from './index'

const placeholderUrl = 'https://placeholdit.imgix.net/~text?txtsize=13&txt=140%C3%97100&w=140&h=100';


export class App extends React.Component<{}, {}> {


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
      </div>
    )
  }
}