
import React ,{Component} from 'react'
import classNames from 'classnames'

export default class Loading extends Component{
  constructor(props) {
    super(props);
  }
  render(){
    let isActive = this.props.isActive ? true : false;
    let loadingClass = classNames('spinner-5',{on:isActive})
    return (
      <div className={loadingClass}>
        <div className="spinner-container container1">
          <div className="circle1"></div>
          <div className="circle2"></div>
          <div className="circle3"></div>
          <div className="circle4"></div>
        </div>
        <div className="spinner-container container2">
          <div className="circle1"></div>
          <div className="circle2"></div>
          <div className="circle3"></div>
          <div className="circle4"></div>
        </div>
        <div className="spinner-container container3">
          <div className="circle1"></div>
          <div className="circle2"></div>
          <div className="circle3"></div>
          <div className="circle4"></div>
        </div>
      </div>
    )
  }
}