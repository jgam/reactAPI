import { tsConstructorType } from "@babel/types";

import React, { Component } from 'react';

import axios from 'axios';

class Apidata extends Component {
    constructor(){
        super();
        this.state = {
            pictures: [],
        };
    };


    render() {
        return (
            <div className="container2">
                <div className="container1">
                    {this.state.pictures}
                </div>
            </div>
        )
    }
}

export default Apidata;