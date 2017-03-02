import React = require('react');

import {expect, selectDom, waitForDom} from 'test-drive';
import { ImageLink } from '../../src/components';
import { Automation } from '../../src/common/automation';

const ReactDOM = require('react-dom');

const githubImageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/120px-Octicons-mark-github.svg.png';
const googleUrl = 'www.google.com';

describe('<ImageLink />', function() {
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
    select = selectDom(app);
  });

  after(() => {
    document.body.removeChild(app);
  });

  it('is rendered to the screen', () => {
    ReactDOM.render(<ImageLink imageSrc={githubImageUrl} url={googleUrl}/>, app);
    const socialLink = select(Automation.IMAGE_LINK);

    return waitForDom(app, () => expect(socialLink).to.be.present());
  });
});

