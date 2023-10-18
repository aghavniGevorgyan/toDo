
import { type } from '@testing-library/user-event/dist/type'
import React,{useState,useContext, useEffect,} from 'react'
import { Link, useParams,useNavigate } from 'react-router-dom'

import { todoContext } from '../App'



function Description() {
  const {state} = useContext(todoContext)
  const {id} = useParams()
  const [decdata, setDecData] = useState({})

  const navigate=useNavigate()
 
 
console.log(state.todos);

 useEffect(() => {
  if(!!state.todos.length){
    const todoItem = state.todos.find(item => item.id === +id)
    localStorage.setItem('todoItem', JSON.stringify(todoItem))
    setDecData(todoItem)
  }else if (!!localStorage.getItem('todoItem')) {
    console.log('ok')
    setDecData(JSON.parse(localStorage.getItem('todoItem')))
  }
  else {
    navigate('/');
  }
  
}, [])
console.log(!!localStorage.getItem('todoItem'));
// useEffect (()=>{
//   localStorage.setItem('todoItem', JSON.stringify(todoItem))
// },[todoItem])



  return (

    <div className='descDiv'>
       <h2>Description</h2>
       
       <p>{decdata.description}</p>
          {/* <p>{todoItem.description}</p> */}
      
       
      <Link to="/">Go Back</Link>
    </div>
  )
}

export default Description