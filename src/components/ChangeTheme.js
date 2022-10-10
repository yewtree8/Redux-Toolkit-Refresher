import React, {useState} from 'react'
import {useDispatch} from "react-redux";
import { changeColour } from '../features/theme';

const ChangeTheme = () => {
    
    const [themeColour, setColor] = useState("");
    const dispatch = useDispatch();

    return (
    <div>
      <input type="text"
       onChange={(e) => {
        setColor(e.target.value);
        console.log(e.target.value);
        
        }}/>

      <button
      onClick={
        () => {
        dispatch(changeColour(themeColour))
      }}>THEME TOGGLE</button>
    </div>
  )
}

export default ChangeTheme;
