"use strict"

import {TOGGLE_CHECK_END,TOGGLE_CHECK_START,TOGGLE_CHECK_ALL,CLEAR_ALL} from './constant.jsx'
import axios from 'axios'
function startCheckStatus(){
  return {
    type:TOGGLE_CHECK_START
  }
}

function finshCheckStatus(param){
  let {i,j,checked} = param
  return {
    type:TOGGLE_CHECK_END,
    value:[i,j,checked]
  }
}

export function fetchCheckboxStatus(param){
  return function(dispatch){
    dispatch(startCheckStatus());
    axios.get('http://localhost:3000/api',{
      name:'frog'
    }).then((res)=>{
      console.log(res)
      dispatch(finshCheckStatus(param))
    }).catch((err)=>{
      dispatch(finshCheckStatus(param))
    })
  }
}

export function toggleAll(i,checked){
  return {
      type:TOGGLE_CHECK_ALL,
      value:[i,checked]
    }
}

export function clearAll(){
  return {
     type:CLEAR_ALL,
     value:[]
  }
}