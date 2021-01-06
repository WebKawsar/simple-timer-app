import React, { Component } from 'react';



class Home extends Component {


    
    render() {

        const button = {
            padding: "12px 40px",
            borderRadius: "4px",
            cursor: "pointer"
        }


        return (
            <div>
                <button style={button}>+</button>
                <button style={button}>-</button>

            </div>
        );
    }
}

export default Home;