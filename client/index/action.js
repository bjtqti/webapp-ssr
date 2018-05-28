"use strict"

import {TOGGLE_CHECK_END,TOGGLE_CHECK_START,TOGGLE_CHECK_ALL,CLEAR_ALL} from './constant.jsx'

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
    // axios.get('/').then((res)=>{
    //   dispatch(finshCheckStatus(param))
    // })
    dispatch(startCheckStatus());
    setTimeout(()=>{
      //console.log(param)
      dispatch(finshCheckStatus(param))
    },1000)
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