import React = require('react');

import { expect, sinon, waitFor, simulate, ClientRenderer } from 'test-drive-react';
import { Button } from '../../src/components';
import { Automation } from '../../src/common/automation';

describe('<Button />', () => {
  const clientRenderer = new ClientRenderer();

  afterEach(() => {
    clientRenderer.cleanup();
  });

  it('is rendered to the screen', () => {
    const { select, waitForDom } = clientRenderer.render(<Button label="Button" onClick={() => {}} />);
    const button = select(Automation.BUTTON);

    return waitForDom(() => expect(button).to.be.present());
  });

  it('invokes onClick when clicked', () => {
    const onClick = sinon.spy();

    const { select } = clientRenderer.render(<Button label="Button" onClick={onClick} />);
    simulate.click(select(Automation.BUTTON));

    return waitFor(() => expect(onClick).to.have.been.calledOnce);
  })
});

