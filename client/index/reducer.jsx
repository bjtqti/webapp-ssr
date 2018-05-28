'use strict'

import {TOGGLE_CHECK_END,TOGGLE_CHECK_START,TOGGLE_CHECK_ALL,CLEAR_ALL} from './constant.jsx'

function rootReducer(state={},action){
  
    switch(action.type){
        case TOGGLE_CHECK_START:
          return Object.assign({},state,{
            isFetching:true,
            isFetched:false
          })
        //单选
        case TOGGLE_CHECK_END:
          var [i,j,checked] = action.value;
          var menuList = state.menuList.setIn([i,'value',j,'checked'],checked);
          let notAllchecked = menuList.getIn([i,'value']).some(v=>!v.get('checked'));
          menuList = menuList.setIn([i,'checked'],!notAllchecked)
          return Object.assign({},state,{menuList,
                  isFetching:false,
                  isFetched:true})
          // var {menuList} = state;
          // var [i,j,checked] = action.value;
          // var _menu = menuList.map((item)=>{
          //    return Object.assign({},item)
          // })
          // _menu[i].value[j].checked = checked;
          // let notAllchecked = _menu[i].value.some((v)=>{
          //   return v.checked !== true
          // });
          // _menu[i].checked = !notAllchecked;
          // return Object.assign({},state,{
          //     menuList:_menu
          // });
        //全选
        case TOGGLE_CHECK_ALL:
          var [i,checked] = action.value;
          var menuList = state.menuList.setIn([i,'checked'],checked).updateIn([i,'value'],list=>{
            return list.map(v=>v.set('checked',checked))
          });
        
          return Object.assign({},state,{menuList:menuList})
          // var {menuList} = state;
          // var _menu = menuList.map((item)=>{
          //    return Object.assign({},item)
          // })
          // _menu[i].checked = checked;
          // _menu[i].value = _menu[i].value.map((item)=>{
          //   item.checked = checked;
          //   return item;
          // })
          // return Object.assign({},state,{
          //     menuList:_menu
          // });;
        case CLEAR_ALL:
          var menuList = state.menuList.map(list=>{
            return list.set('checked',false).updateIn(['value'],list=>{
              return list.map(v=>v.set('checked',false))
            });
          })
         // console.log(menuList)
          return Object.assign({},state,{menuList:menuList})
        default:
            return state;
    }
}

export default rootReducer;