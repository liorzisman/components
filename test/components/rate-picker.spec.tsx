import React = require('react');

import { expect, selectDom, waitForDom, sinon, waitFor } from 'test-drive';
import { simulate } from '../test-aux';
import { RatePicker } from '../../src/components';
import { Automation } from '../../src/common/automation';

const ReactDOM = require('react-dom');

describe('<RatePicker />', () => {
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
    ReactDOM.render(<RatePicker />, app);
    const ratePicker = select(Automation.RATE_PICKER);

    return waitForDom(app, () => expect(ratePicker).to.be.present());
  });
});

