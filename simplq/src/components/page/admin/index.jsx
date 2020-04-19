import React from "react";
import axios from 'axios';
import ItemList from "./ItemList";

export default class Admin extends React.Component {
    state = {
        items: []
    }

    componentDidMount() {
        this.loadItems()
    }

    loadItems() {
        axios.get(`http://localhost:3000/queue`)
            .then(res => {
                const items = res.data;
                this.setState({ items });
            })
    }

    render() {
        return <>
        <h1>Hello, Admin {this.props.match.params.queueId}</h1>
        <p>Users in the queue:</p>
        <ItemList items={this.state.items}></ItemList>
        </>;
    }
}