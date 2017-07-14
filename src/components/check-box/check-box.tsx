import React = require('react');
import { Automation } from '../../common/automation'

export interface CheckBoxProps {
  value: boolean;
  onChange: React.FormEventHandler<HTMLInputElement>;
  className?: string;
}

export function CheckBox(props: CheckBoxProps) {
  return <input type="checkbox" checked={props.value} onChange={props.onChange}
                data-automation-id={Automation.CHECK_BOX} className={props.className || 'comp-default'}/>
}