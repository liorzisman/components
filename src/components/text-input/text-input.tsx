import React = require('react');
import { Automation } from '../../common/automation'

interface TextInputProps {
  value: string;
  placeholder?: string;
  onChange: React.FormEventHandler<HTMLInputElement>;
}

export function TextInput(props: TextInputProps) {
  return (
    <div data-automation-id={Automation.TEXT_INPUT}>
      <input type="text" placeholder={props.placeholder} value={props.value}
             onChange={props.onChange} data-automation-id="NATIVE_INPUT" />
    </div>
  )
}