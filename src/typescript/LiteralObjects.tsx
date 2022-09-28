import React from 'react'

interface Person {
    fullName: string,
    age: number,
    address: Address
}

interface Address {
    country: string,
    streets: string,
    houseNo: number
}

export const LiteralObjects = () => {

    const person: Person = {
        fullName: 'Luis',
        age: 35,
        address: {
            country: 'Ecuador',
            streets: 'Sauces',
            houseNo: 15
        }
    }



  return (
    <>
        <h3>Literal Objects</h3>
        <code>
            <pre>
                { JSON.stringify(person, null, 2) }
            </pre>
        </code>
    </>
  )
}
