import React, { Component } from 'react';
import {connect} from 'react-redux';

class WeatherList extends Component{
    renderWeather(cityData){
        console.log(cityData);
        return(
            <td>{cityData.city.name}</td>
        )
    }
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
                    
                    {/* {this.props.weather.map(this.renderWeather)} */}
                    
                    </tr>
                 
                </tbody>
            </table>
            );
        }
}

function mapStateToProps({weather}){
    return { weather: weather };
}

export default connect(mapStateToProps)(WeatherList);