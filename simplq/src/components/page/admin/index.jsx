import React from "react";
import axios from 'axios';
import ItemList from "./ItemList";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import AddIcon from '@material-ui/icons/Add';
import RefreshIcon from '@material-ui/icons/Refresh';
import { IconButton } from '@material-ui/core';
import FileCopyIcon from '@material-ui/icons/FileCopy';

export default class Admin extends React.Component {
    state = {
        items: null,
        queueId: this.props.match.params.queueId
    }

    componentDidMount() {
        this.loadItems(this.state.queueId)
    }

    loadItems(queueId) {
        axios.get(`http://localhost:3000/queue/` + queueId)
            .then(res => {
                const items = res.data.items;
                this.setState({ items });
            })
    }

    cardContent() {
        if (this.state.items == null) {
            return <p>Loading...</p>
        }
        if (this.state.items.length > 0) {
            return <ItemList items={this.state.items} />
        } else {
            return <p>Empty Queue</p>
        }
    }

    render() {
        var shareUrl = "http://localhost:3000/" + this.state.queueId;
        return <Card>
            <CardContent>
                <p> Share this url with others to get started:</p>
                <p>{shareUrl} <CopyToClipboard text={shareUrl}>
                <IconButton><FileCopyIcon /></IconButton>
                </CopyToClipboard> </p>
                
                {this.cardContent()}
            </CardContent>
            <CardActions>
                <IconButton aria-label="share">
                    <AddIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <RefreshIcon />
                </IconButton>
            </CardActions>
        </Card>
    }
}