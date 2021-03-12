import React from 'react'
import Counter from './Counter'
import TextField from './TextField'

// THIS COVERS PROPS, HOOKS, RENDER PROPS

const App: React.FC = () => {
   return (
      <div>
         {/*<TextField text='hello' person={{ firstName: '', lastName: '' }} />*/}
         <Counter>
            {(counter, setCounter) => (
               <div>
                  {counter}
                  <button onClick={() => setCounter(counter + 1)}>+</button>
               </div>
            )}
         </Counter>
      </div>
   )
}

export default App
