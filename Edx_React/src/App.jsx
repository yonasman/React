import './App.css'

function App() {
  let currentTime = new Date();
  return (
    <>
      <h1>Hello React</h1>
      <p>The current time is: {currentTime.toLocaleTimeString()} and current date {currentTime.toLocaleDateString()}</p>
    </>
  )
}

export default App
