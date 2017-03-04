import React = require('react');
import { Automation } from '../../common/automation'

interface CheckBoxProps {
  value: boolean;
  onChange: React.FormEventHandler<HTMLInputElement>;
}

export function CheckBox(props: CheckBoxProps) {
  return <input type="checkbox" checked={props.value} onChange={props.onChange}
                data-automation-id={Automation.CHECK_BOX} />
}