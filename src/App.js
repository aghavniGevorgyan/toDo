import './App.css';
import InputArea from './InputArea/InputArea';
import { Route, Routes } from 'react-router-dom';
import Description from './Description/Description';
import HomWraper from './HomWraper/HomWraper';
import { createContext, useContext, useState } from 'react';
import { useReducer } from 'react';
import { initialState, reducer } from './Reduce/Reducer'

export const todoContext = createContext('')


export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  return (
    <div className="App">
      <todoContext.Provider value={{state,dispatch}}>
      <Routes >
          <Route path="/" element={<HomWraper />} >
            <Route index element={<InputArea/>}/>
            <Route path=':id' element={<Description />}/>
          </Route>
        </Routes>
      </todoContext.Provider>
      
    </div>
  );
}



