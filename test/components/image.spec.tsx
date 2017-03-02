import React = require('react');

import { expect, selectDom, waitForDom } from 'test-drive';
import { Image } from '../../src/components';
import { Automation } from '../../src/common/automation';

const ReactDOM = require('react-dom');

const githubImageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/120px-Octicons-mark-github.svg.png';
const placeholderUrl = 'https://placeholdit.imgix.net/~text?txtsize=13&txt=140%C3%97100&w=140&h=100';

describe('<Image />', () => {
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
    ReactDOM.render(<Image src={githubImageUrl}/>, app);
    const image = select(Automation.IMAGE);

    return waitForDom(app, () => expect(image).to.be.present());
  });

  it('is loaded with the provided image', () => {
    ReactDOM.render(<Image src={githubImageUrl} placeholder={placeholderUrl}/>, app);
    const image = select(Automation.IMAGE, 'IMAGE_SRC');

    return waitForDom(app, () => expect(image).to.have.attribute('src', githubImageUrl));
  });

  it('is loaded with the provided placeholder when src is invalid', () => {
    ReactDOM.render(<Image src={'notReal'} placeholder={placeholderUrl}/>, app);

    return waitForDom(app, () => expect(select(Automation.IMAGE, 'IMAGE_PLACEHOLDER')).to.have.attribute('src', placeholderUrl));
  });

});

