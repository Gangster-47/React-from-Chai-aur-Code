import Card from "./components/Card"
import './App.css'

function App() {

  return (
    <>
      <h1 className='bg-emerald-200 text-violet-900'>Welcome TailWind CSS</h1>
      <Card username="Yash Rautela" place="India" occupation="Web Developer"/>
      <Card username="Pranjal Arora" place="US" occupation="Software Engineer"/>
      <Card username="Tejas Tyagi" occupation="Backend Developer"/>
    </>
  )
}

export default App
