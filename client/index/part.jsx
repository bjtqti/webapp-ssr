"use strict";

import React ,{Component,Fragment} from 'react'
import autobind from 'autobind-decorator'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import axios from 'axios'
import {fetchCheckboxStatus,toggleAll,clearAll} from './action.js'
import Loading from '../component/loading.jsx'
import CheckBox from './checkbox.jsx'

export default class Index extends Component {
	 
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
  	//clearInterval(this.timerID);
	}

  @autobind
  handleClick(e) {
    let {isActive} = this.state
    //clearInterval(this.timerID)
    this.setState({
      isActive:!isActive
    })
  }

  /**
   * 切换勾选状态
   */ 
	handleToggle(i,j,checked){
		 // this.props.dispatch({
   //    type:TOGGLE_CHECK,
   //    value:[i,j,checked]
   //   })

   let {dispatch,isFetching}  = this.props;
   //console.log(isFetching)
   if(isFetching) {
    return false;
   }
   dispatch(fetchCheckboxStatus({
    i,j,checked
   }))
	}
  
  /**
   * 是否全选
   */
  handleToggleAll(i,checked){
    this.props.dispatch(toggleAll(i,checked))
  }

  /**
   * 清除全选中
   */
  @autobind
  handleClearAll(){
    this.props.dispatch(clearAll())
  }

  /** 
   * 渲染菜单项目
   */
	renderMenuItem(data,i){
		var items = data.map((item,j)=>{
      let id = `put-${i}-${j}`;
			return (
				<li key={`item-${i}-${j}`}>
          <CheckBox name={item.get('name')} checked={item.get('checked')} onChange={(checked)=>this.handleToggle(i,j,checked)} />
				</li>
			)
		})
		return (
			<ul key={`item-${i}`}>{items}</ul>
		)
	}

	renderMenuList(menuData) {
    if(menuData && !menuData.isEmpty()){
  		let menuItemList = menuData.map((item,i)=>{
  			return(
  				<li key={'item-'+i}>
  					<CheckBox name={item.get('name')} checked={item.get('checked')} onChange={(checked)=>this.handleToggleAll(i,checked)} />
  					{this.renderMenuItem(item.get('value'),i)}
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
		let {menuList,isFetching} = this.props;
		let iconStatus = classNames('icon-arrow',{'on':isActive})
		return (
			<Fragment>
				<div onClick={this.handleClick} className={iconStatus}></div>
				<div className="header">Hello Web app !</div>
				<div className="copy">{date.toLocaleTimeString()}</div>
				<div className="menu">
					<div className="flexbox job">
						<div className="job">职位</div>
						<div className="clear" onClick={this.handleClearAll}>清除</div>
					</div>
					<div className="menu-list">
            {this.renderMenuList(menuList)}
					</div>
				</div>
        <Loading isActive={isFetching} />
			</Fragment>
		)
	}
}


Index.propTypes = {
  initialState: PropTypes.object
}

 