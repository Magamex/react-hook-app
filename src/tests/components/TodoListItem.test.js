import React from 'react';
import { shallow } from 'enzyme';
import { TodoListItem } from './../../components/useReducer/TodoListItem';


const demoTodos = [{
    id:1,
    desc: 'Aprender React',
    done: false
},{
    id:2,
    desc: 'Aprender React Native',
    done: false
}];

describe('Pruebas en <TodoListItem/>', () => {

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(
        <TodoListItem 
            todo={demoTodos[0]}
            index={0}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
        />);
    
    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de llamar la funcion de borrar', () => {
        wrapper.find('button').simulate('click');
        expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id)
    });

    test('Debe de llamar la funcion toggle', () => {
        wrapper.find('p').simulate('click');
        expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id)
    });

    test('Debe de mostrar el texto correctamente', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(`NaN. ${demoTodos[0].desc}`)
    });

    test('debe de tener la clase complete', () => {

        const todo = demoTodos[0];
        todo.done = true;

        const wrapper = shallow(
        <TodoListItem 
            todo={todo}
            index={0}
        />);

        // console.log(wrapper.html());
        expect(wrapper.find('p').hasClass('tachado')).toBe(true);
    });

});
