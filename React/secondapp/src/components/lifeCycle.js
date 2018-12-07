// 1 GET DEFAULT STATE
// 2 SET INITIAL STATE
// 3 BEFORE GET CREATED
// 4 RENDER JSX
// 5 AFTER COMPONENT CREATED

import React, {Component} from 'react';

class LifeCycle extends Component {
    // 1 GET DEFAULT STATE
    constructor(props){
        super(props)

        // 2 SET INITIAL STATE
        this.state = {
            title: 'LifeCycle'
        }
    }

   // 3 BEFORE GET CREATED
    componentWillMount(){
        console.log("Before created")
       
    }

    componentWillUpdate(){
        console.log("Before Update")
    }
    
    componentDidUpdate(){
        console.log("after update")
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log(this.state.title)
            if(nextState.title === this.state.title){
                return false
            }
        return true
    }

    // 4 RENDER JSX
    render(){
        return(
            <div>
                <h4>{this.state.title}</h4>
                <div onClick={()=>this.setState({title:'Update Data of lifecycle'})}>
                    Click to Change
                </div>
            </div>
        )
    }

      // 5 AFTER COMPONENT CREATED
    componentDidMount(){
        console.log("After Created")
        document.querySelector('h4').style.color="olive"
    }
  
    componentWillUnmount(){
        alert("do you want to leave")
    }

     
}


export default LifeCycle