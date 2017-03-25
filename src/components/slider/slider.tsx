import React = require('react');
import { Automation } from '../../common/automation'

interface SliderProps {
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: React.FormEventHandler<HTMLInputElement>;
}

import './slider.css';

export function Slider(props: SliderProps) {
  return (
    <div data-automation-id={Automation.SLIDER} className="controlled-slider">
      <div className="slider-row">
        <input type="range" value={props.value} min={props.min} max={props.max} step={props.step}
               onChange={props.onChange} data-automation-id="NATIVE_INPUT" className="native-slider" />
        <span className="slider-value">{props.value}</span>
      </div>
      <div className="slider-row slider-split">
        <span>{props.min}</span>
        <span>{props.max}</span>
    </div>
    </div>
  )
}