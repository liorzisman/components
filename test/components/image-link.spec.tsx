import React = require('react');

import { expect, ClientRenderer } from 'test-drive-react';
import { ImageLink } from '../../src/components';
import { Automation } from '../../src/common/automation';

const githubImageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/120px-Octicons-mark-github.svg.png';
const googleUrl = 'www.google.com';

describe('<ImageLink />', function() {
  const clientRenderer = new ClientRenderer();

  afterEach(() => {
    clientRenderer.cleanup();
  });

  it('is rendered to the screen', () => {
    const { select, waitForDom } = clientRenderer.render(<ImageLink imageSrc={githubImageUrl} url={googleUrl} />);
    const socialLink = select(Automation.IMAGE_LINK);

    return waitForDom(() => expect(socialLink).to.be.present());
  });
});

