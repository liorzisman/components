import React = require('react');

import { expect, selectDom, waitForDom, sinon, waitFor } from 'test-drive';
import { simulate } from '../test-aux';
import { Slider } from '../../src/components';
import { Automation } from '../../src/common/automation';

const ReactDOM = require('react-dom');

describe('<Slider />', () => {
  let app, select;

  before(() => {
    app = document.createElement('div');
    app.id = 'app';
    document.body.appendChild(app);
    select = selectDom(app);
  });

  afterEach(() => {
    const newApp = document.createElement('div');
    newApp.id = 'app';
    document.body.replaceChild(newApp, app);
    app = newApp;
    select = selectDom(app);
  });

  after(() => {
    document.body.removeChild(app);
  });

  it('is rendered to the screen', () => {
    ReactDOM.render(<Slider min={0} max={100} step={5} value={50} onChange={() => console.log('hi')}/>, app);
    const slider = select(Automation.SLIDER);

    return waitForDom(app, () => expect(slider).to.be.present());
  });

  it('calls onChange when slider handle is dragged', () => {
    const onChange = sinon.spy();
    ReactDOM.render(<Slider min={0} max={100} step={5} value={50} onChange={onChange}/>, app);
    const slider = select(Automation.SLIDER);
    const sliderInput = select(Automation.SLIDER, 'NATIVE_INPUT');
    simulate.click(slider);
    simulate.change(sliderInput, { target: { value: 55 } });

    return waitFor(() => expect(onChange).to.have.been.calledWithMatch({ target: { value: 55 } }));
  });
});

