import React from "react";
import axios from 'axios';
import ItemList from "./ItemList";

export default class Admin extends React.Component {
    state = {
        items: []
    }

    componentDidMount() {
        this.loadItems(this.props.match.params.queueId)
    }

    loadItems(queueId) {
        axios.get(`http://localhost:3000/queue/` + queueId)
            .then(res => {
                const items = res.data.items;
                this.setState({ items });
            })
    }

    render() {
        if (this.state.items.length > 0) {
            return <ItemList items={this.state.items}/>
        } else {
            return <p>Empty Queue</p>
        }
    }
}