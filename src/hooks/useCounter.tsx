import { useState } from "react";

export const useCounter = ( initnumber: number = 10) => {
    const [value, setValue] = useState(initnumber);

    const add = ( number: number) => {
        setValue( value + number);
    }

    return {
        value,
        add
    }
}
