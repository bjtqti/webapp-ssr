"use strict";

import React ,{Component} from 'react'
import autobind from 'autobind-decorator'
import classNames from 'classnames'

export default class CheckBox extends Component {

	constructor(props) {
		super(props);
	}

	@autobind
	handleChange(){
		//console.log(this)
		let {checked} = this.props;
		this.props.onChange(!!checked);
	}

	render() {
		let {name,checked} = this.props;
		 
		const checkboxClass = classNames({
            "checkbox":true,
            "checked" : checked
        });
		return (
			<div className="checkobx-wrap" onClick={this.handleChange}>
				<label>{name}</label>
				<div className={checkboxClass}></div>
			</div>
		)
	}
}