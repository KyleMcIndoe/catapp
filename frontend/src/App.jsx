import { useState , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/facts/')
    .then(res => {
      console.log(res.data)
      setTitle(res.data[0].title)
      setBody(res.data[0].body)
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <>
      {title}
      {body}
    </>
  )
}

export default App
