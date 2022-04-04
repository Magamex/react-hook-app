import React from 'react';
import { LoginScreen } from './../../components/useContext/LoginScreen';
import { shallow, mount } from 'enzyme';
import { UserContext } from '../../components/useContext/UserContext';

describe('Pruebas en <LoginScreen/>', () => {
    
    const setUser = jest.fn(()=>{});

    const wrapper = mount(
        <UserContext.Provider value={{
            setUser
        }}>
            <LoginScreen/>
        </UserContext.Provider>
    );



    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de ejecutar el setUser con el argumento', () => {
        wrapper.find('button').prop('onClick')();
        expect(setUser).toHaveBeenCalledWith({
            id: 1,
            name: 'Juan'
        })
    });

});
