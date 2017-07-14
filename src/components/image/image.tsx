import React = require('react');
import { Automation } from '../../common/automation'

export interface ImageProps {
  src: string;
  placeholder?: string;
  className?: string;
}

export interface ImageState {
  errorLoadingSrc: boolean;
}

export class Image extends React.Component<ImageProps, ImageState> {

  constructor() {
    super();

    this.state = {
      errorLoadingSrc: false
    };
  }

  onErrorLoadingSrc = () => {
    this.setState({errorLoadingSrc: true});
  };

  render() {
    return (
      <div data-automation-id={Automation.IMAGE} className={this.props.className || 'comp-default'}>
        { this.state.errorLoadingSrc ?
          <img data-automation-id="IMAGE_PLACEHOLDER" src={this.props.placeholder} />
          :
          <img data-automation-id="IMAGE_SRC" src={this.props.src} onError={this.onErrorLoadingSrc} />
        }
      </div>
    )
  }
}