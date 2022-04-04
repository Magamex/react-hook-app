import React from 'react';
import { AppRouter } from './../../components/useContext/AppRouter';
import { mount } from 'enzyme';
import { UserContext } from '../../components/useContext/UserContext';

describe('Pruebas en <AppRouter/>', () => {

    const user = {
        id: 1,
        name: 'Juan'
    }

    const wrapper = mount(
        <UserContext.Provider value={{user}}>
            <AppRouter/>
        </UserContext.Provider>
    );

    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    

});