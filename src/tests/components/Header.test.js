import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';
import toJSON from 'enzyme-to-json'


test('Should render Header correctly', () => {
    const wrapper = shallow(<Header />);
    expect(toJSON(wrapper)).toMatchSnapshot();
    }
    );