import React, {Component} from "react";

export default class SearchBar extends Component{
    constructor(props){
        super(props);

        this.state = { term: ' ' };
    }
    onInputChange(event){
        console.log(event.target.value);
    }
    render() {
        return(
            <form >
                <div className="input-group">
                    <input 
                        type="search" 
                        className="form-control" 
                        placeholder="Search Forcasts" 
                        aria-describedby="basic-addon2"
                        value={this.state.term}
                        onChange={this.onInputChange}
                        />
                    <span 
                        type="submit"
                        className="input-group-addon btn btn-primary" 
                        id="basic-addon2">Submit
                    </span>
                </div>           
            </form>
        );
    }
}