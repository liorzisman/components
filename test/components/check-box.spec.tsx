import React = require('react');

import { expect, sinon, waitFor, simulate, ClientRenderer } from 'test-drive-react';
import { CheckBox } from '../../src/components';
import { Automation } from '../../src/common/automation';

describe('<CheckBox />', () => {

  const clientRenderer = new ClientRenderer();

  afterEach(() => {
    clientRenderer.cleanup();
  });

  it('is rendered to the screen', () => {
    const { select, waitForDom } = clientRenderer.render(<CheckBox value={true} onChange={() => {}} />);
    const checkbox = select(Automation.CHECK_BOX);

    return waitForDom(() => expect(checkbox).to.be.present());
  });

  it('is set to \'Checked\' when the value is true', () => {
    const { select, waitForDom } = clientRenderer.render(<CheckBox value={true} onChange={() => {}} />);
    const checkbox = select(Automation.CHECK_BOX) as HTMLInputElement;

    return waitForDom(() => expect(checkbox.checked).to.equal(true));
  });

  it('is set to \'Unchecked\' when the value is false', () => {
    const { select, waitForDom } = clientRenderer.render(<CheckBox value={false} onChange={() => {}} />);
    const checkbox = select(Automation.CHECK_BOX) as HTMLInputElement;

    return waitForDom(() => expect(checkbox.checked).to.equal(false))
  });

  it('invokes he provided onChanged when the checkbox is clicked', () => {
    const onChange = sinon.spy();
    const { select } = clientRenderer.render(<CheckBox value={false} onChange={onChange} />);

    simulate.change(select(Automation.CHECK_BOX));

    return waitFor(() => expect(onChange).to.have.been.calledOnce);
  });
});

