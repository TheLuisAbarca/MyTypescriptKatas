// import { BasicTypes } from "./typescript/BasicTypes";

import { CounterWithHook } from "./components/CounterConHook";

// import { Counter } from "./components/Counter";

// import { Functions } from "./typescript/Functions";

// import { LiteralObjects } from "./typescript/LiteralObjects";

const App = () => {
  return (
    <div className='mt-2'>
      <h1>Introduction 2 Typescript React</h1>
      <hr />
      {/* <BasicTypes/> */}
      {/* <LiteralObjects/> */}
      {/* <Functions/> */}
      {/* <Counter/> */}
      <CounterWithHook/>
    </div>
  )
}

export default App;