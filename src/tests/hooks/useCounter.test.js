import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from './../../Hooks/useCounter';


describe('Pruebas en useCounter', () => {
    test('debe retornar valores por defecto', () => {
        const { result } = renderHook(()=>useCounter());

        // console.log(result.current);

        expect(result.current.counter).toBe(10);
        expect(typeof result.current.increment).toBe('function');
        expect(typeof result.current.decrement).toBe('function');
        expect(typeof result.current.reset).toBe('function');
    });

    
    test('debe tener el counter en 100', () => {
        const { result } = renderHook(()=>useCounter(100));

        // console.log(result.current);

        expect(result.current.counter).toBe(100);
    });

    test('debe incrementar el counter', () => {
        const { result } = renderHook(()=>useCounter(100));
        const { increment } = result.current;

        act(()=>{
            increment();
        })
        const { counter } = result.current;
        expect(counter).toBe(101);
    });

    test('debe decrementar el counter', () => {
        const { result } = renderHook(()=>useCounter(100));
        const { decrement } = result.current;

        act(()=>{
            decrement();
        })
        const { counter } = result.current;
        expect(counter).toBe(99);
    });

    test('debe resetear el counter', () => {
        const { result } = renderHook(()=>useCounter(100));
        const { decrement,reset } = result.current;

        act(()=>{
            decrement();
            reset();
        })
        const { counter } = result.current;
        expect(counter).toBe(100);
    });

});
