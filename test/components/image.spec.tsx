import React = require('react');

import { expect, ClientRenderer } from 'test-drive-react';
import { Image } from '../../src/components';
import { Automation } from '../../src/common/automation';

const githubImageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/120px-Octicons-mark-github.svg.png';
const placeholderUrl = 'https://placeholdit.imgix.net/~text?txtsize=13&txt=140%C3%97100&w=140&h=100';

describe('<Image />', () => {
  const clientRenderer = new ClientRenderer();

  afterEach(() => {
    clientRenderer.cleanup();
  });

  it('is rendered to the screen', () => {
    const { select, waitForDom } = clientRenderer.render(<Image src={githubImageUrl} />);
    const image = select(Automation.IMAGE);

    return waitForDom(() => expect(image).to.be.present());
  });

  it('is loaded with the provided image', () => {
    const { select, waitForDom } = clientRenderer.render(<Image src={githubImageUrl} placeholder={placeholderUrl} />);
    const image = select(Automation.IMAGE, 'IMAGE_SRC');

    return waitForDom(() => expect(image).to.have.attribute('src', githubImageUrl));
  });

  it('is loaded with the provided placeholder when src is invalid', () => {
    const { select, waitForDom } = clientRenderer.render(<Image src={'notReal'} placeholder={placeholderUrl}/>);

    return waitForDom(() => expect(select(Automation.IMAGE, 'IMAGE_PLACEHOLDER')).to.have.attribute('src', placeholderUrl));
  });
});

