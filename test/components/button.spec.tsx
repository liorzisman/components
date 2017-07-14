import React = require('react');

import { expect, selectDom, waitForDom, sinon, waitFor, simulate } from 'test-drive-react';
import { Button } from '../../src/components';
import { Automation } from '../../src/common/automation';

const ReactDOM = require('react-dom');

function doNothing() {}

describe('<Button />', () => {
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
    ReactDOM.render(<Button label="Button" onClick={doNothing} />, app);
    const button = select(Automation.BUTTON);

    return waitForDom(app, () => expect(button).to.be.present());
  });

  it('invokes onClick when clicked', () => {
    const onClick = sinon.spy();

    ReactDOM.render(<Button label="Button" onClick={onClick} />, app);
    simulate.click(select(Automation.BUTTON));

    return waitFor(() => expect(onClick).to.have.been.calledOnce);
  })
});

