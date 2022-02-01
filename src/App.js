import React, {Component} from "react";
import './App.css';
import {CardList} from "./components/card-list/card-list.component";
import {SearchBox} from "./components/search-box/search-box.component";


class App extends Component {
    constructor() {
        super();


        this.state = {
            monsters: [],
            searchField: ''
        };
        // this.handleChange = this.handleChange.bind(this); // Explicit: This have context of app-component know, Modern way use arrow function
    }


    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(
                response => response.json())
            .then(users => this.setState({monsters: users}));
    }
// method for handleChange extracted for reuse other places
    handleChange = e => {
        this.setState({searchField: e.target.value});
    };

    render() {
        const {monsters, searchField} = this.state; // Destructuring
        // const monster = this.state.monsters;
        // include returns true/false if searchField name match
        const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase())
        )
        return (
            <div className="App">
                <h1> Monster Rolodex</h1>
                <SearchBox
                    placeholder='search monsters'
                    handleChange={this.handleChange}
                />
                <CardList monsters={filteredMonsters}/>
            </div>
        );
    }
}

export default App;
