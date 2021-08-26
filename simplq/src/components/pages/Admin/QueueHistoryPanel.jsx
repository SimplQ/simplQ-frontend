import React from 'react'
import HistoryIcon from '@material-ui/icons/History'
import SidePanelItem from 'components/common/SidePanel/SidePanelItem'
import QueueHistory from 'components/common/QueueHistory/QueueHistory'
import TablePagination from '@material-ui/core/TablePagination'
import Data from 'data/QueueEvents.json'

class QueueHistoryPanel extends React.PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            page: 0,
            rowsPerPage: 5
        }
    }

    handlePageChange = (event, newPage) => {
        this.setState({ page: newPage })
    }

    handleChangeRowsPerPage = (event) => {
        this.setState({
            page: 0,
            rowsPerPage: event.target.value
        })
    }

    render() {
        return (
            <SidePanelItem
                Icon={HistoryIcon}
                title="Queue History"
                description="History of events in the queue"
                expandable
            >
                <QueueHistory
                    queueId={this.props.queueId}
                    data={Data.slice(
                        this.state.page * this.state.rowsPerPage,
                        Math.min(
                            Data.length,
                            (this.state.page + 1) * this.state.rowsPerPage
                        )
                    )}
                />
                <div>
                    <TablePagination
                        component="div"
                        rowsPerPageOptions={[5, 10, 25, 50, 100]}
                        count={Data.length}
                        page={this.state.page}
                        onPageChange={this.handlePageChange}
                        rowsPerPage={this.state.rowsPerPage}
                        onRowsPerPageChange={this.handleChangeRowsPerPage}
                    />
                </div>
            </SidePanelItem>
        )
    }
}

export default QueueHistoryPanel
