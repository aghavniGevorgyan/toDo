import React,{useState,useEffect,useReducer} from 'react'
import { initialState, reducer } from '../Reduce/Reducer'
import { useContext } from 'react';
import { todoContext } from '../App';

function EditArea({ editingWork, setEditingWork}) {
  const [editedTitle, setEditedTitle] = useState('');
  const [editedDesc, setEditedDesc] = useState('');
  // const [state, dispatch] = (reducer, initialState)
  const {state, dispatch} = useContext(todoContext)

  console.log(editingWork);
  useEffect(() => {
    setEditedTitle(editingWork.title);
  }, [])

  useEffect(() => {
    setEditedDesc(editingWork.description);
  }, [])

  const handleSaveClick = () => {
    dispatch({
      type: 'edit',
      payload: {
        id: editingWork.id,
        newTitle: editedTitle,
        newDescription: editedDesc,
      },
    })

    setEditedTitle('')
    setEditingWork(null)
    setEditedDesc(null)
  }
  const handleCancelClick = () => {
    setEditedTitle('')
    setEditedDesc(null)
    setEditingWork(null)

  }
  console.log(editedTitle);
  console.log(editedDesc);

  return (
    <div>
    <input
      type="text"
      value={editedTitle}
      onChange={(e) => setEditedTitle(e.target.value)}
    />
        <input
      type="text"
      value={editedDesc}
      onChange={(e) => setEditedDesc(e.target.value)}
    />
    <button onClick={handleSaveClick}>Save</button>
    <button onClick={handleCancelClick}>Cancel</button>
  </div>
  )
}

export default EditArea


