import React, {Component} from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from "../actions/mainAction";

export default class SearchBar extends Component{
    constructor(props){
        super(props);

        this.state = { term: '' };

        this.onInputChange = this.onInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    onInputChange(event){
        console.log(event.target.value);
        this.setState({ term: event.target.value})
    }
    handleSubmit(event) {
        event.preventDefault();
        alert('sumbited ' + this.state.term);
       
      }
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="input-group">
                    <input 
                        type="search" 
                        className="form-control" 
                        placeholder="Search City Forcasts" 
                        aria-describedby="basic-addon2"
                        value={this.state.term}
                        onChange={this.onInputChange}
                        />
                    <span 
                        onClick={this.handleSubmit}
                        type="submit"
                        value="submit"
                        className="input-group-addon btn btn-primary" 
                        id="basic-addon2">Submit
                    </span>
                </div>           
            </form>
        );
    }
}