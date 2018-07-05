import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'class-names'
import GDPRSection from './partials/GDPRSection'
import OverlayScrollbars from 'overlayscrollbars'
//import 'overlayscrollbars/css/OverlayScrollbars.css'




export default class GDPRSettings extends Component {
    static propTypes = {
        className: PropTypes.string,
        content:PropTypes.arrayOf(PropTypes.shape({
            id:PropTypes.any.isRequired,
            title:PropTypes.string.isRequired,
            description:PropTypes.string,
            isAllowed:PropTypes.bool.isRequired,
            allowChange:PropTypes.bool
        })).isRequired,
        locale:PropTypes.shape({
           gdpr_title:PropTypes.string,
           gdpr_description:PropTypes.string,
           gdpr_validate:PropTypes.string,
           gdpr_active:PropTypes.string,
           gdpr_inactive:PropTypes.string,
           gdpr_always_active:PropTypes.string
        }).isRequired,
        onToggle:PropTypes.func,
        onValidate:PropTypes.func

    }

    static defaultProps = {
        className:'',
        onToggle:(id,value)=>{},
        onValidate:()=>{}
    }


    componentDidMount()
    {
       new  OverlayScrollbars(document.querySelector('.gdpr-content-wrapper'), { sizeAutoCapable:false,className : "os-theme-dark"});
        
          
    }




    handleToggle = (id,value)=>{
        this.props.onToggle(id,value)
    }

    handleClickValidate = () =>{
        this.props.onValidate()
    }


    render() {
        return (
        <div className={classNames('gdpr-settings',this.props.className)}>
            <div className="gdpr-overlay" />
            <div className="gdpr-popin">
                <div className="gdpr-container">
                    <div className="gdpr-title">{this.props.locale.gdpr_title}</div>
                    <div className="gdpr-content-wrapper os-host-flexbox">
                   
                    <div className="gdpr-content">
                        <div className="gdpr-description">{this.props.locale.gdpr_description}</div>
                        {
                            this.props.content.map(props =><GDPRSection onToggle={this.handleToggle} key={props.id} {...props} locale={this.props.locale} />)
                        }
                    </div>
                  
                    </div>
                    <div className="gdpr-footer">
                        <div onClick={this.handleClickValidate} className="gdpr-button gdpr-button-accept">{this.props.locale.gdpr_validate}</div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}