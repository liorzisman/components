import React = require('react');
import { Automation } from '../../common/automation'

export function CheckBox(props) {
  return <input type="checkbox" checked={props.value} onChange={props.onChange}
                data-automation-id={Automation.CHECK_BOX} />
}