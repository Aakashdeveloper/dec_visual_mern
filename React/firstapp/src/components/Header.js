import React, {Component} from 'react';

class Header extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            keywords: 'Navdeep'
        }
    }

    dataChange(event){
        console.log(event.target.value)
        this.setState({keywords: event.target.value})
    }

    render(){
        return(
            <header>
                <div className="logo" onClick={() => { console.log("hiii")}}>Logo</div>
                <center>
                    <input type="text" onChange={this.dataChange.bind(this)} />
                    <p>{this.state.keywords}</p>
                </center>  
            </header>
        )
    }
}

export default Header;