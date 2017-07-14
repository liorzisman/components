import React = require('react');

import { expect, selectDom, waitForDom, sinon, waitFor, simulate } from 'test-drive-react';
import { CheckBox } from '../../src/components';
import { Automation } from '../../src/common/automation';

const ReactDOM = require('react-dom');

describe('<CheckBox />', () => {
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
    ReactDOM.render(<CheckBox value={true} onChange={() => console.log('hi')}/>, app);
    const checkbox = select(Automation.CHECK_BOX);

    return waitForDom(app, () => expect(checkbox).to.be.present());
  });

  it('is set to \'Checked\' when the value is true', () => {
    ReactDOM.render(<CheckBox value={true} onChange={() => console.log('hi')}/>, app);
    const checkbox = select(Automation.CHECK_BOX);

    return waitForDom(app, () => expect(checkbox.checked).to.eql(true));
  });

  it('is set to \'Unchecked\' when the value is true', () => {
    ReactDOM.render(<CheckBox value={false} onChange={() => console.log('hi')}/>, app);
    const checkbox = select(Automation.CHECK_BOX);

    return waitForDom(app, () => expect(checkbox.checked).to.eql(false));
  });

  it('invokes he provided onChanged when the checkbox is clicked', () => {
    const onChange = sinon.spy();
    ReactDOM.render(<CheckBox value={false} onChange={onChange}/>, app);

    simulate.change(select(Automation.CHECK_BOX));

    return waitFor(() => expect(onChange).to.have.been.calledOnce);
  });
});

