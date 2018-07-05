import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'class-names'
import GDPRToggle from './GDPRToggle'

export default class GDPRSection extends Component {
    static propTypes = {
        className: PropTypes.string,
        id:PropTypes.any.isRequired,
        title:PropTypes.string.isRequired,
        description:PropTypes.string,
        isAllowed:PropTypes.bool.isRequired,
        allowChange:PropTypes.bool,
        locale:PropTypes.shape({
            gdpr_active:PropTypes.string,
           gdpr_inactive:PropTypes.string,
           gdpr_always_active:PropTypes.string
        }).isRequired,
        onToggle:PropTypes.func
    }

    static defaultProps = {
        className:'',
        description:'',
        allowChange:true,
        onToggle:(id,value)=>{}
    }

    handleToggle = (value) =>{
        this.props.onToggle(this.props.id,value)
    }
  


    render() {
        return (
        <div className={classNames('gdpr-section',this.props.className)}>
            <div className="gdpr-title gdpr-section-title">{this.props.title}</div>
            <div className="gdpr-description gdpr-section-description">{this.props.description}</div>
            <GDPRToggle onToggle={this.handleToggle} allowChange={this.props.allowChange} isActive={this.props.isAllowed} locale={this.props.locale} />
        </div>
        )
    }
}