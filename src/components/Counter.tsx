import { useState } from 'react';

export const Counter = () => {
    const [value, setValue] = useState(100);

    const add = ( number: number) => {
        setValue( value + number);
    }

  return (
    <>
        <h3>Counter: <small>{ value }</small></h3>

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
