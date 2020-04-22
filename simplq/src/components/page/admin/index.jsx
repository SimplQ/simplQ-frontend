import React from "react";
import ItemList from "./ItemList";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import AddIcon from '@material-ui/icons/Add';
import RefreshIcon from '@material-ui/icons/Refresh';
import { IconButton, Button } from '@material-ui/core';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import { getQueuedItems } from '../../../apis'
import CentralSection from "../../CentralSection";

export default class Admin extends React.Component {
    state = {
        items: null,
        queueId: this.props.match.params.queueId
    }

    componentDidMount() {
        this.loadItems(this.state.queueId)
    }

    loadItems(queueId) {
        const items = getQueuedItems(queueId);
        this.setState({ items });
    }

    content() {
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
        var shareUrl = window.location.origin + "/" + this.state.queueId;
        return <CentralSection heading="Queue Dashboard">

            <p> Share this url with others to get started:</p>
            <p>{shareUrl} <CopyToClipboard text={shareUrl}>
                <IconButton><FileCopyIcon /></IconButton>
            </CopyToClipboard> </p>

            {this.content()}

            <IconButton aria-label="share">
                <AddIcon />
            </IconButton>
            <IconButton aria-label="share">
                <RefreshIcon />
            </IconButton>
            <div style={{ display: "flex", justifyContent: 'flex-end' }}>
                <Button variant="contained" color="primary" style={{
                    marginTop: 30,
                    marginLeft: 10,
                }}>
                    Refresh
                </Button>
            </div>
        </CentralSection>
    }
}
