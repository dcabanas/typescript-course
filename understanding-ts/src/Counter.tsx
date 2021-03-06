import React, { useState } from 'react'

interface Props {
   children: (
      counter: number,
      setCounter: React.Dispatch<React.SetStateAction<number>>
   ) => JSX.Element | null
}

const Counter: React.FC<Props> = ({ children }) => {
   const [counter, setCounter] = useState(0)

   return <div>{children(counter, setCounter)}</div>
}

export default Counter
