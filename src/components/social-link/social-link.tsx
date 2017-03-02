import React = require('react');
import { Automation } from '../../common/automation'

import { Image } from '../';

interface SocialLinkProps {
  imageSrc: string;
  placeholderSrc?: string;
  onClick: React.EventHandler<any>;
}

export function SocialLink(props: SocialLinkProps) {
  return (
    <div data-automation-id={Automation.SOCIAL_LINK} onClick={props.onClick}>
      <Image src={props.imageSrc} placeholder={props.placeholderSrc}/>
    </div>
  )
}