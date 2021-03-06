import React = require('react');
import { Automation } from '../../common/automation'

import { Image } from '../';

export interface ImageLinkProps {
  imageSrc: string;
  placeholderSrc?: string;
  url: string;
  className?: string;
}

export function ImageLink(props: ImageLinkProps) {

  return (
    <div data-automation-id={Automation.IMAGE_LINK} className={props.className || 'comp-default'}
         onClick={() => window.location.href = props.url}>
      <Image src={props.imageSrc} placeholder={props.placeholderSrc}/>
    </div>
  )
}