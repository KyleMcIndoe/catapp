import { useState , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  useEffect(() => {
    getFact()
  }, [])

  function getFact() {
    axios.get('http://127.0.0.1:8000/api/facts/')
    .then(res => {
      console.log(res.data)
      let obj = Object.keys(res.data)
      let i = getRandomInt(obj.length)
      setTitle(res.data[i].title)
      setBody(res.data[i].body)
    })
    .catch(err => console.log(err))
  }

  return (
    <>
      <h1 className='title'>{title}</h1>
      <p className='body'>{body}</p>
      <button onClick={() => {
        getFact()
      }}>Get cat fact</button>
    </>
  )
}

export default App
