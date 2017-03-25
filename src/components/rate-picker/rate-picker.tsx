import React = require('react');
import { Automation } from '../../common/automation'

interface RatePickerProps {
  minRating: number;
  maxRating: number;
}

interface RatingStarProps {
  value: number;
}

import './rate-picker.css';

// Note: rate pickers will most likely not contain ranges
// that will overload any average device nowadays

function range(start, end) {
  const rangeArr = [];
  for (let i = start; i <= end; i++) rangeArr.push(i);
  return rangeArr;
}

function RatingStar(props: RatingStarProps) {
  return (
    <div data-automation-id={Automation.RATING_STAR} className="rating-star">
    </div>
  )
}

export function RatePicker({maxRating = 5, minRating = 1}) {
  return (
    <div data-automation-id={Automation.RATE_PICKER} className="controlled-rate-picker">
      {range(minRating, maxRating).map(rateValue => <RatingStar value={rateValue}/>)}
    </div>
  )
}