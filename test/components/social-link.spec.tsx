import React = require('react');

import {expect, selectDom, waitForDom, sinon, waitFor} from 'test-drive';
import { SocialLink } from '../../src/components';
import { Automation } from '../../src/common/automation';

const ReactDOM = require('react-dom');

const githubImageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/120px-Octicons-mark-github.svg.png';

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
    select = selectDom(app);
  });

  after(() => {
    document.body.removeChild(app);
  });

  it('is rendered to the screen', () => {
    ReactDOM.render(<SocialLink imageSrc={githubImageUrl} onClick={() => console.log('click')}/>, app);
    const socialLink = select(Automation.SOCIAL_LINK);

    return waitForDom(app, () => expect(socialLink).to.be.present());
  });

  it('invokes the provided onClick when clicked', () => {
    const onClick = sinon.spy();
    ReactDOM.render(<SocialLink imageSrc={githubImageUrl} onClick={onClick}/>, app);

    const socialLink = select(Automation.SOCIAL_LINK);
    socialLink.click();

    return waitFor(() => expect(onClick).to.have.been.calledOnce);
  });
});

