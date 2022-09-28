import React from 'react'

export const BasicTypes = () => {
    const name: string = 'Luis';
    const edad: number  = 35;
    const isActive: boolean = true;

    const powers: string[] = ['Velocity', 'Fly', 'Breath under water'];


  return (
    <>
        <h3>Basic Types</h3>
        { name }, { edad }, { (isActive) ? 'Active' : 'Inactive' }
        <br/>
        { powers.join(', ') }
    </>
  )
}
