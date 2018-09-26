import React from 'react';

import {shallow} from 'enzyme';
import AddActivity from "./AddActivity";

const list = [{ id: '1'}, { id: '2'}];
const active = { id: '1', text: 'mario' };

it('AddActivity: populates input field form with active element', () => {
  const wrapper= shallow(
    <AddActivity
      active={active}
      onSaveActivity={() => {}}/>
  );
  // check if input name is 'active.name'
  expect(wrapper.find('input[name="text"]').props().value).toBe('mario');
});


it('AddActivity: populates input field form with active element', () => {
  const wrapper= shallow(
    <AddActivity
      active={active}
      onSaveActivity={() => {}}/>
  );
  // simulate input change
  wrapper.find('input').simulate('change', {target: {value: 'abc'}});
  // check if active is changed
  expect(wrapper.state().active.text).toBe('abc');
});

it('AddActivity: check if label is EDIT when active is active', () => {
  const wrapper= shallow(
    <AddActivity
      active={active}
      onSaveActivity={() => {}}/>
  );
  const buttonLabel = wrapper.find('button[type="submit"]').text()
  expect(buttonLabel).toBe('EDIT');
});


it('check if label is ADD when active is null', () => {
  const wrapper= shallow(
    <AddActivity
      active={null}
      onSaveActivity={() => {}}/>
  );
  let buttonLabel = wrapper.find('button[type="submit"]').text()
  expect(buttonLabel).toBe('ADD');

  wrapper.setState({ active })
  buttonLabel = wrapper.find('button[type="submit"]').text()
  expect(buttonLabel).toBe('EDIT');
});

