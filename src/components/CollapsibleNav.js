import React, { Component } from 'react'
import PropTypes from 'prop-types'

var removeMargin = {
    marginBlockStart: '0px',
    marginBlockend: '0px',
    paddingInlineStart: '0px'
  }

class CollapsibleNav extends Component {
    constructor(props){
        super(props)
        this.state = {
            isExpanded: false
        }
    }

    handleNavToggle(e){
        this.setState({
            isExpanded: !this.state.isExpanded
        });
    }

    render() {
        const {title, children} = this.props;
        const {isExpanded} = this.state;
        return (
            <li  className={`vt-panel ${isExpanded ? 'is-expanded' : ''}`} onClick={(e) => this.handleNavToggle(e)}>
                <span>{title}</span>
                    <div className="arrow-right">
                        <i className="fa fa-angle-right custom" ></i>
                    </div>
                <ul className="vt-panel-collapse" style={removeMargin}>
                    {children}
                </ul>
            </li>
        )
    }
}

CollapsibleNav.propTypes = {
    title: PropTypes.string
};


export default CollapsibleNav