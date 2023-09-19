import './App.css'
import LineChart from './components/LineChart/LineChart'
import NavBar from './components/NavBar/NavBar'
import PriceOptions from './components/NavBar/PriceOptions/PriceOptions'
// import DaisyNav from './components/DaisyNav/DaisyNav'

function App() {
  

  return (
    <>
      
      {/* <DaisyNav></DaisyNav> */}

      <NavBar></NavBar>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      
      
    </>
  )
}

export default App
