import React, {Component} from "react";

export default class SearchBar extends Component{
    render() {
        return(
            <form className="form-inline">
                <input type="search" placeholder="search" />
            </form>
        );
    }
}