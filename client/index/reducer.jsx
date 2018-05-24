'use strict'

import {TOGGLE_CHECK,TOGGLE_CHECK_ALL} from './constant.jsx'

function rootReducer(state={},action){
  //console.log(state,action)
    switch(action.type){
        //单选
        case TOGGLE_CHECK:
          var {menuList} = state;
          var [i,j,checked] = action.value;
          var _menu = menuList.map((item)=>{
             return item
          })
          _menu[i].value[j].checked = checked;
          let notAllchecked = _menu[i].value.some((v)=>{
            return v.checked !== true
          });
          _menu[i].checked = !notAllchecked;
          return Object.assign({},state,{
              menuList:_menu
          });
        //全选
        case TOGGLE_CHECK_ALL:
          var {menuList} = state;
          var [i,checked] = action.value;
          var _menu = menuList.map((item)=>{
             return item
          })
          _menu[i].checked = checked;
          _menu[i].value = _menu[i].value.map((item)=>{
            item.checked = checked;
            return item;
          })
          return Object.assign({},state,{
              menuList:_menu
          });;
        default:
            return state;
    }
}

export default rootReducer;