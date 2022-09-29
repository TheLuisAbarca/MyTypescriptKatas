import { useCounter } from '../hooks/useCounter';

export const CounterWithHook = () => {
    const { value, add } = useCounter(50);

  return (
    <>
        <h3>Counter with Custom Hook: <small>{ value }</small></h3>

        <button
            className='btn btn-primary'
            onClick={ () => add(1) }
        >
            +1
        </button>
        &nbsp;
        <button
            className='btn btn-primary'
            onClick={ () => add(-1) }
        >
            -1
        </button>
    </>
  )
}
