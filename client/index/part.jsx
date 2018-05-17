"use strict";

import React ,{Component,Fragment} from 'react'

import {Provider,connect} from "react-redux";
import {createStore,compose} from "redux";

import autobind from 'autobind-decorator'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import CheckBox from './checkbox.jsx'
import rootReducer from './reducer.jsx'
 
class Index extends Component {
	 
	constructor(props) {
    	super(props);
    	this.state = {
    		date: new Date(),
    		isActive:false
    	};
  	}

	componentDidMount() {
		//console.log(333)
		// this.timerID = setInterval(()=>{
		// 	this.setState({
		// 		date:new Date()
		// 	})
		// },1000)
  	}

  	componentWillUnmount() {
    	clearInterval(this.timerID);
  	}

  	handleToggle(i,j,checked){
  		 this.props.dispatch({
        type:'change',
        value:[i,j,checked]
       })
  			console.log(i,j,checked)
  	}

    handleToggleAll(i,checked){
      this.props.dispatch({
        type:'toggleAll',
        value:[i,checked]
      })
    }

  	@autobind
  	handleClick(e) {
  		let {isActive} = this.state
  		clearInterval(this.timerID)
  		this.setState({
  			isActive:!isActive
  		})
  	}
  
  	renderMenuItem(data,i){
  		var items = data.map((item,j)=>{
        let id = `put-${i}-${j}`;
  			return (
  				<li key={`item-${i}-${j}`}>
            <CheckBox name={item.name} checked={item.checked} onChange={(checked)=>this.handleToggle(i,j,checked)} />
  				</li>
  			)
  		})
  		return (
  			<ul key={`item-${i}`}>{items}</ul>
  		)
  	}

  	renderMenuList(menuData) {
      if(menuData && menuData.length){
    		let menuItemList = menuData.map((item,i)=>{
          let notAllchecked = item.value.some((v)=>{
            return v.checked !== true
          });
          
    			return(
    				<li key={'item-'+i}>
    					<CheckBox name={item.name} checked={!notAllchecked} onChange={(checked)=>this.handleToggleAll(i,checked)} />
    					{this.renderMenuItem(item.value,i)}
    				</li>
    			)
    		})
    		return(
    			<ul>
    				{menuItemList}
    			</ul>
    		)
      }
      return 'DATA_ERROR'
  	}

	render() {
     
		let {date,isActive} = this.state;
    //console.log(this.state,this.props)
		let {menuList} = this.props;
		let iconStatus = classNames('icon-arrow',{'on':isActive})
		return (
			<Fragment>
				<div onClick={this.handleClick} className={iconStatus}></div>
				<div className="header">Hello Web app !</div>
				<div className="copy">{date.toLocaleTimeString()}</div>
				<div className="menu">
					<div className="flexbox job">
						<div className="job">职位</div>
						<div className="clear">清除</div>
					</div>
					<div className="menu-list">
            {this.renderMenuList(menuList)}
					</div>
				</div>
			</Fragment>
		)
	}
}


Index.propTypes = {
  initialState: PropTypes.object
}

function selector(state){
  //console.log(state)
    const {menuList} = state
    return {
      menuList
    };
}

let IndexConnected = connect(selector)(Index);


 
function configureStore(initialState){
    const store = createStore(rootReducer, initialState)
    return store
}

 
export default class IndexApp extends Component{
    render(){
        const {menuList} = this.props.initialState;
        //console.log(this.props)
        const initialState = {
            menuList
        };

        var store = configureStore(initialState);

        return (
            <Provider store={store}>
              <IndexConnected />
            </Provider>
        )
    }
}