import React = require('react');

import { expect, selectDom, waitForDom, sinon, waitFor } from 'test-drive';
import { simulate } from '../test-aux';
import { TextInput } from '../../src/components';
import { Automation } from '../../src/common/automation';

const ReactDOM = require('react-dom');

describe('<TextInput />', () => {
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
    ReactDOM.render(<TextInput value="Hello" onChange={() => console.log('hi')}/>, app);
    const textInput = select(Automation.TEXT_INPUT);

    return waitForDom(app, () => expect(textInput).to.be.present());
  });

  it('invokes the onChange when text is entered', () => {
    const onChange = sinon.spy();

    ReactDOM.render(<TextInput value="" onChange={onChange}/>, app);

    const textInput = select(Automation.TEXT_INPUT, 'NATIVE_INPUT');
    simulate.change(textInput, {data: 'hello'});

    return waitFor(() => expect(onChange).to.have.been.calledWithMatch({data: 'hello'}));
  });

});

