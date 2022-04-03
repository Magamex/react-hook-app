import React from 'react';
import { shallow } from 'enzyme';
import { TodoList } from './../../components/useReducer/TodoList';

const demoTodos = [{
    id:1,
    desc: 'Aprender React',
    done: false
},{
    id:2,
    desc: 'Aprender React Native',
    done: false
}];

describe('Pruebas en <TodoList/>', () => {
    
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();
        
    const wrapper = shallow(
        <TodoList 
            todos={demoTodos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
        />);
    
    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de tener 2 <TodoListItem/>', () => {
        expect(wrapper.find('TodoListItem').length).toBe(demoTodos.length);
    });

    test('Debe tener las propiedades correctas', () => {
        expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual(expect.any(Function));
        expect(wrapper.find('TodoListItem').at(0).prop('handleToggle')).toEqual(expect.any(Function));
    });
});
