import React = require('react');
import { Automation } from '../../common/automation'

interface ButtonProps {
  label: string;
  onClick: React.FormEventHandler<HTMLButtonElement>;
}

export function Button(props: ButtonProps) {
  return <button onClick={props.onClick} data-automation-id={Automation.BUTTON}>{props.label}</button>
}