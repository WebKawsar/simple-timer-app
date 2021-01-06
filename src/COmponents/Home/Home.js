import React, { Component } from 'react';



class Home extends Component {

    state = {
        count: 0
    }


    intervalid = null

    handleIncrement = () => {
        this.setState({count: this.state.count + 1})
    }
    handleDecrement = () => {
        if(this.state.count > 0){
            this.setState({count: this.state.count - 1})
        }
    }
    
    
    handleStart =() => {
        if(this.state.count > 0 && !this.intervalid){
            this.intervalid = setInterval(() => {
                this.setState({count: this.state.count - 1}, () => {
                    if(this.state.count === 0){
                        alert("Timer is finished");
                        clearInterval(this.intervalid)
                        this.intervalid = null
                    }
                })
            }, 1000)
        }
    }

    handleStop =() => {
        if(this.intervalid){
            clearInterval(this.intervalid)
            this.intervalid = null
        }
    }

    handleRest =() => {
        this.setState({count: 0})
        clearInterval(this.intervalid)
        this.intervalid = null
    }

    
    render() {

        const button = {
            padding: "12px 40px",
            borderRadius: "4px",
            cursor: "pointer",
            margin: "0 30px"
        }


        return (
            <div style={{padding: "100px 0", textAlign: "center"}}>
                
                <h1>Simple Timer App</h1>

                <button onClick={this.handleIncrement} style={button}><b>+</b></button>
                <span style={{fontWeight: "bold", fontSize: "35px"}}>{this.state.count}</span>
                <button onClick={this.handleDecrement} style={button}><b>-</b></button>
                <br/>
                <br/>
                <hr/>
                <br/>

                <button onClick={this.handleStart} style={button}>Start</button>
                <button onClick={this.handleStop} style={button}>Stop</button>
                <button onClick={this.handleRest} style={button}>Reset</button>
            </div>
        );
    }
}

export default Home;