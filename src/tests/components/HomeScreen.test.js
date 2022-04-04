import React from 'react';
import { HomeScreen } from './../../components/useContext/HomeScreen';
import { shallow, mount } from 'enzyme';
import { UserContext } from '../../components/useContext/UserContext';


describe('Pruebas en <HomeScreen/>', () => {

    const user = {
        name: 'Pepe',
        emaial: 'pepe@gmail.com'
    }

    const wrapper = mount(
        <UserContext.Provider value={{user}}>
            <HomeScreen/>
        </UserContext.Provider>
    );


    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });



});