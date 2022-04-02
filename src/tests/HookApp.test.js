import React from 'react';
import { HookApp } from './../HookApp';
import { shallow } from 'enzyme';

describe('Pruebas en <HookApp/>', () => {
    test('debe mostrarse correctamente', () => {
        const wrapper = shallow(<HookApp/>);
        expect(wrapper).toMatchSnapshot();
    });
});

