import React from 'react';
import { shallow } from 'enzyme';
import { ListPage } from '../../components/ListPage';

test('should correctly render ListPage', () => {
  const wrapper = shallow(<ListPage />);
  expect(wrapper).toMatchSnapshot();
});

test('should call startLogin on button click', () => {
  const startLogin = jest.fn();
  const wrapper = shallow(<ListPage startLogin={startLogin} />);
  wrapper.find('button').simulate('click');
  expect(startLogin).toHaveBeenCalled();
});
