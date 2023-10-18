
import { Link } from 'react-router-dom'
import React from 'react'

function ToDo({ title, idx,fnRemove,status ,id,fnStatus,fnEdit,description}) {
  
  return (
    <>
      <ul className='liUl'>
        <li>
          {idx + 1}
        </li>
        <li 
        className={status?'Completed':''}
        >
          {title}
        </li>
        <li>
        <Link to={`/${id}`} title={title}>
        <i className="fa fa-info-circle" aria-hidden="true"></i>
        </Link>
        </li>
        <li>
          <button 
            onClick={()=>fnStatus(id,status)}
            className={status?'CompletedBtn':'TodoBtn'}
          >
          {status ? 'Completed' : 'Todo'}
          </button>
        </li>
        <li>
          {status? <i className="fa fa-lock" aria-hidden="true"></i>:''}
       
        <button disabled={status}
        onClick={()=>fnEdit(id,title,description)}
        > 
          <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
          </button>
        </li>
        <li>
        {status?'':<i className="fa fa-lock" aria-hidden="true"></i>}
          <button disabled={!status}
          onClick={()=>fnRemove(id)}
          >
            <i className="fa fa-trash" aria-hidden="true"></i>
          </button>
        </li>
      </ul>
    </>

  )
}

export default ToDo