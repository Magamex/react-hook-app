import React from 'react';
import { shallow } from 'enzyme';
import { MultipleCustomHooks } from './../../components/examples/MultipleCustomHooks';
import { useFetch } from '../../Hooks/useFetch';
import { useCounter } from './../../Hooks/useCounter';

jest.mock('../../Hooks/useFetch');
jest.mock('./../../Hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks/>', () => {
    

    test('debe de mostrarse correctamente', () => {
        useCounter.mockReturnValue({
            counter: 1,
            increment: () => {}
        })

        useFetch.mockReturnValue({
            data:null,
            loading: true,
            error: null
        });

        const wrapper = shallow(<MultipleCustomHooks/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar la informacion', () => {
        useCounter.mockReturnValue({
            counter: 1,
            increment: () => {}
        })
        
        useFetch.mockReturnValue({
            data:[{
                author: 'Pepe',
                quote: 'Hola Mundo'
            }],
            loading: false,
            error: null
        });
        const wrapper = shallow(<MultipleCustomHooks/>);

        expect(wrapper.find('.loading').exists()).toBe(false);
        expect(wrapper.find('p').text().trim()).toBe('Hola Mundo');
        expect(wrapper.find('footer').text().trim()).toBe('Pepe');

        console.log(wrapper.html())
    });
});
