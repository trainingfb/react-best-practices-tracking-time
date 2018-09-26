import React from 'react';
// cimport ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import Activities from "./Activities";

const list = [{ id: '1'}, { id: '2'}];
const active = { id: '1' };

it('Match Snapshot', () => {
  const wrapper= shallow(
    <Activities
      list={list}
      active={active}
    >bla bla</Activities>
  );
  expect(wrapper).toMatchSnapshot();
});

it('Create a list of element', () => {
  const wrapper= shallow(
    <Activities
      list={list}
      active={active} />
  );
  expect(wrapper.find('div').children().length).toBe(list.length);
});


it('Add the "actived" class to the selected one', () => {
  const wrapper= shallow(
    <Activities
      list={list}
      active={active} />
  );
  expect(wrapper.find('div').childAt(0).hasClass('actived')).toBe(true);
});