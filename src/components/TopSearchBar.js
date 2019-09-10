import React, { Component } from 'react'

var centering = {
    width: '80%',
    margin: '0 auto'
}

class TopSearchBar extends Component {
    render() {
        return (
            <>
                <form className="form-inline">
                    <div className="bg-light rounded rounded-pill shadow-sm" style={centering}>
                        <div className="input-group">
                        <input type="search" placeholder="What're you searching for?" aria-describedby="button-addon1" className="form-control border-0 bg-light" />
                        <div className="input-group-append">
                            <button id="button-addon1" type="submit" className="btn btn-link text-primary"><i className="fa fa-search"></i></button>
                        </div>
                        </div>
                    </div>
                </form>
            </>
        )
    }
}

export default TopSearchBar
