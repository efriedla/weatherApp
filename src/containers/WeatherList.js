import React, { Component } from 'react';

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
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
            );
        }
}