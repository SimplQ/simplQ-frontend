import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import QueueService from '../../services/queue';

const styles = (theme) => ({
  content: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
    height: "100vh"
  },
  button: {
    marginTop: theme.spacing(4),
  }
});

class CreateQueue extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      textFieldValue: '',
    }
  }

  handleClick(name) {
    QueueService.createQueue(name).then(
      queueId => this.props.history.push("/admin/" + queueId)
    )

  }

  handleTextFieldChange = (e) => {
    this.setState({
      textFieldValue: e.target.value
    });
  }


  render() {
    const { classes } = this.props;
    return (
      <>
        <div className={classes.content}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              SimplQ
                </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              A simple queue service for everyday use
                </Typography>

            <TextField
              style={{ margin: 8 }}
              placeholder="Enter a name for a new queue"
              fullWidth
              required
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              value={this.state.textFieldValue}
              onChange={this.handleTextFieldChange}
            />

            <div className={classes.button}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary"
                    onClick={() => this.handleClick(this.state.textFieldValue)}
                  >
                    Create A new queue
                      </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default withStyles(styles)(CreateQueue)
