
import React, { useState, useReducer, useEffect } from 'react'
import ToDo from '../ToDoLi/ToDo';
import { Link } from 'react-router-dom';
import EditArea from '../EditArea/EditArea';
import { useContext } from 'react';
import { todoContext } from '../App';


function InputArea() {
  const [velInp, setVelInp] = useState('')
  const [desc,setDesc]=useState('')
  const [editingWork, setEditingWork] = useState(null)
  const {state, dispatch} = useContext(todoContext)
  
  useEffect(() => {
    console.log(!!JSON.parse(localStorage.getItem('works')));
    if (JSON.parse(localStorage.getItem('works'))) {
      const existingWorks = JSON.parse(localStorage.getItem('works'))
      dispatch({
        type: 'set',
        payload: existingWorks
      })
    }
   
  }, [])

  useEffect(()=> {
    localStorage.setItem('works', JSON.stringify(state.todos))
  }, [state.todos])

  const handleAddButtonClick = () => {
    if (velInp.length !== 0) {
      const newWork = {
        id: new Date().getTime(),
        title: velInp,
        description:desc,
        status: false
      }
      dispatch({
        type: 'add',
        payload: newWork
      })
    }
    setVelInp('')
    setDesc('')
  }
  const handleRemoveClick = (id) => {
    dispatch({
      type: 'del',
      payload: id
    })
  }
  const handleStatusChange = (id) => {
    dispatch({
      type: 'changeStatus',
      payload: { id  }
    })
  }
  const handleEditClick = (id, title,description) => {
    setEditingWork({ id, title,description })
    console.log(state.todos);

  }

  return (
    <div className='container'>
      <div className='child'>
        <input type="text"
          placeholder='Enter to Do Work '
          value={velInp}
          onChange={(e) => setVelInp(e.target.value)}
        />
        <input type="text" 
          placeholder='Enter to Do Description '
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          />
        <button className='addBtn'
          onClick={handleAddButtonClick}
        >
          <i className="fa fa-plus" aria-hidden="true"></i>
        </button>
      </div>
      <ul className='headUl'>
        <li>#</li>
        <li>Task Name</li>
        <li> Description</li>
        <li>Status</li>
        <li>Edit</li>
        <li>Remove</li>
      </ul>
      <hr />
      {
        state.todos?.map((el, idx) => (
          <ToDo {...el} key={el.id} idx={idx} 
            fnRemove={(id) => handleRemoveClick(id)}
            fnStatus={(id, status) => handleStatusChange(id, status)}
            fnEdit={(id, title,description) => handleEditClick(id, title,description)}
          />
        ))
      }
      {editingWork && (
        <EditArea editingWork={editingWork} setEditingWork={setEditingWork}
        // editingDesc={editingDesc} setEditingDesc={setEditingDesc}
         />
      )}
    </div>
  )
}

export default React.memo(InputArea)