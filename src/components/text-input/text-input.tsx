import React = require('react');
import { Automation } from '../../common/automation'

export interface TextInputProps {
  value: string;
  placeholder?: string;
  onChange: React.FormEventHandler<HTMLInputElement>;
  className?: string;
}

export function TextInput(props: TextInputProps) {
  return (
    <div data-automation-id={Automation.TEXT_INPUT} className={props.className || 'comp-default'}>
      <input type="text" placeholder={props.placeholder} value={props.value}
             onChange={props.onChange} data-automation-id="NATIVE_INPUT" />
    </div>
  )
}