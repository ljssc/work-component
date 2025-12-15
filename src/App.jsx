import "./App.css"; // подключаю стили
import { useState } from "react"; // подключаю хук для управления состоянием компонентов


import {Header} from "./components/Header"; // подключаю хеадер компонент
import {Set} from "./components/Set"; // подключаю сет компонент


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="App">
        <Header/>
        <Set/>
     </div>
    </>
  )
}

export default App
