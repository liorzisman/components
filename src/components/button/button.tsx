import React = require('react');
import { Automation } from '../../common/automation'

export interface ButtonProps {
  label: string;
  onClick: React.FormEventHandler<HTMLButtonElement>;
  className?: string;
}

export function Button(props: ButtonProps) {
  return <button className={props.className || 'comp-default'} onClick={props.onClick} data-automation-id={Automation.BUTTON}>{props.label}</button>
}