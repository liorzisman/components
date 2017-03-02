import React = require('react');
import { Automation } from '../../common/automation'

export class SocialLink extends React.Component<{}, {}> {
  render() {
    return <a data-automation-id={Automation.SOCIAL_LINK}>Social Link</a>;
  }
}