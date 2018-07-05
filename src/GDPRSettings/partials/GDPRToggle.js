import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'class-names'

export default class GDPRToggle extends Component {
    static propTypes = {
        className: PropTypes.string,
        isActive:PropTypes.bool,
        allowChange:PropTypes.bool,
        locale:PropTypes.shape({
            gdpr_active:PropTypes.string,
            gdpr_inactive:PropTypes.string,
            gdpr_always_active:PropTypes.string
        }),
        onToggle:PropTypes.func
    }

    static defaultProps = {
        className:'',
        isActive:false,
        allowChange:true,
        onToggle:(value)=>{}
    }

    constructor(props)
    {
        super(props)
        this.state = {
           // isActive:true
        }
    }

    componentWillMount()
    {
        //this.setState({isActive:this.props.isActive})
    } 

    handleClick = () =>{
       // this.setState({isActive:!this.state.isActive})
        this.props.onToggle(!this.props.isActive)
    }

    render() {
        if(!this.props.allowChange)
        {
            return (
                <div className="gdpr-toggle validated">
                <div className="gdpr-status gdpr-toggle-status">{this.props.locale.gdpr_always_active}</div>
                </div>
                
            )
        }
        let label = this.props.isActive ? this.props.locale.gdpr_active : this.props.locale.gdpr_inactive
        return (
        <div onClick={this.handleClick} className={classNames('gdpr-toggle',this.props.className,{'validated':this.props.isActive})}>
        <div className="gdpr-status gdpr-toggle-status">{label}</div>
            <div className="gdpr-toggle-track"> <div className="gdpr-toggle-cursor" /></div>    
     
        </div>
        )
    }
}