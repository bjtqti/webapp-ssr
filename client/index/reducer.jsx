'use strict'

function rootReducer(state={},action){
  //console.log(state,action)
    switch(action.type){
        case 'change':
          var {menuList} = state;
          var [i,j,checked] = action.value;
          var _menu = menuList.map((item)=>{
             return item
          })
         _menu[i].value[j].checked = !checked;
          return Object.assign({},state,{
              menuList:_menu
          });
        case 'toggleAll':
          var {menuList} = state;
          var [i,checked] = action.value;
          var _menu = menuList.map((item)=>{
             return item
          })
          _menu[i].checked = !checked;
          _menu[i].value = _menu[i].value.map((item)=>{
            item.checked = !checked;
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