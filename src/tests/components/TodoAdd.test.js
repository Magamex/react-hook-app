import { TodoAdd } from './../../components/useReducer/TodoAdd';
import { shallow } from 'enzyme';

describe('Pruebas en <TodoAdd/>', () => {
   
    const handleAdd = jest.fn();

    const wrapper = shallow(
        <TodoAdd
            handleAdd={handleAdd}
        />
    );

    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('No debe de llamar addTodo', () => {
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({ preventDefault(){} });
        expect(handleAdd).toHaveBeenCalledTimes(0);
    });

    test('Debe de llamar la function handleAdd', () => {
        const value = 'Aprende React';

        wrapper.find('input').simulate('change',{
            target: {
                value,
                name: 'description'
            }
        })

        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({ preventDefault(){} });
        expect(handleAdd).toHaveBeenCalledTimes(1);
        expect(handleAdd).toHaveBeenCalledWith(expect.any(Object));
        expect(handleAdd).toHaveBeenCalledWith({
            desc: value,
            done: false,
            id: expect.any(Number)
        })

        expect(wrapper.find('input').prop('value')).toBe('');

    });

});
