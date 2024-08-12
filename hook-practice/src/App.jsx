import { createContext } from 'react'
import './App.css'
import UseEffectHook from './UseEffectHook'
import { Component1 } from './Component1';
// import PracticeHook from './PracticeHook'
export const MyContext = createContext();


function App() {

  return (
    <>
      <MyContext.Provider value="Hello from context">
        <p>Hello Hook</p>
        {/* <PracticeHook/> */}
        <UseEffectHook/>
      </MyContext.Provider>
      <Component1/>
    </>
  )
}

export default App
