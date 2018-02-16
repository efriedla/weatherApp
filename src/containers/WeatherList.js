import React, { Component } from 'react';
import {connect} from 'react-redux';

export default class WeatherList extends Component{

        render(){
            return(
            <table className="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">City</th>
                    <th scope="col">Weather</th>
                    <th scope="col">Temp</th>
                    <th scope="col">feels like</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">Seattle</th>
                    <td>Rainy</td>
                    <td>43</td>
                    <td>40</td>
                    </tr>
                 
                </tbody>
            </table>
            );
        }
}

function mapStateToProps(state){
    return { weather: state.weather };
}