import React = require('react');
import { SocialLink } from './index'

export class App extends React.Component<{}, {}> {


  render() {
    return (
      <div>
        <h2>Components Demo</h2>
        <section>
          <h3>{'<SocialLink/>'}</h3>
          <SocialLink/>
        </section>
      </div>
    )
  }
}