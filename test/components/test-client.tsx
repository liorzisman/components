import React = require('react');

import { expect, selectDom, waitForDom } from 'test-drive';
import { SocialLink } from '../../src/components';
import { Automation } from '../../src/common/automation';

const ReactDOM = require('react-dom');

describe('<SocialLink />', function() {
  let app, select;

  before(() => {
    app = document.createElement('div');
    app.id = 'app';
    document.body.appendChild(app);
    select = selectDom(app);
  });

  afterEach(() => {
    const newApp = document.createElement('div');
    app.id = 'app';
    document.body.replaceChild(newApp, app);
    app = newApp;
  });

  after(() => {
    document.body.removeChild(app);
  });

  it('is rendered to the screen', function() {
    ReactDOM.render(<SocialLink />, app);
    const socialLink = select(Automation.SOCIAL_LINK);

    return waitForDom(app, () => expect(socialLink).to.be.present());
  });
});
