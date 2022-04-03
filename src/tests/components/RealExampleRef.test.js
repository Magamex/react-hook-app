import React from 'react';
import { RealExampleRef } from '../../components/useRef/RealExampleRef';
import { shallow } from 'enzyme';

describe('Pruebas en <RealExampleRef/>', () => {

    let wrapper = shallow(<RealExampleRef/>);

    beforeEach( () =>  {
        wrapper = shallow(<RealExampleRef/>); 
    });
    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
    });

    test('Debe de mostrar el componente <MultipleCustomHooks/>', () => {
        wrapper.find('button').simulate('click');
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
    });
});
