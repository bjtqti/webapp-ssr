"use strict";

import React ,{Component} from 'react'
import {Provider,connect} from "react-redux";
import {fromJS} from 'immutable';
import Index from './part.jsx'
import createStoreWithMiddleware from '../utils/helper.js'
import rootReducer from './reducer.jsx'

 
function selector(state){
  //console.log(state)
    const {menuList,isFetching,isFetched} = state
    return {
      menuList,isFetching,isFetched
    };
}

let IndexConnected = connect(selector)(Index);

 
class IndexApp extends Component{
    render(){
        const {menuList} = this.props.initialState;
        //console.log(this.props)
        const initialState = {
            menuList:fromJS(menuList),
            isFetching:false,
            isFetched:true
        };

        var store = createStoreWithMiddleware(rootReducer, initialState)

        return (
            <Provider store={store}>
              <IndexConnected />
            </Provider>
        )
    }
}

export default (initialState) => {
    return <IndexApp initialState = {initialState} />
}