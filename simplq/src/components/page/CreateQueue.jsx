import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import {createQueue} from '../../apis'

const styles = (theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
    centerAdornment: {
    marginLeft: "50%" // or your relevant measure
  },
});

class CreateQueue extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          textFieldValue: '',
      }
  }

  async handleClick(name) {
      const queueId = await createQueue(name);
      this.props.history.push("/queue/" + queueId + "/admin");
  }

  handleTextFieldChange = (e) => {
     this.setState({
         textFieldValue: e.target.value
     });
  }


  render() {
      const {classes} = this.props;
      return (
        <React.Fragment>
          <CssBaseline />
          <main>
            {/* Hero unit */}
            <div className={classes.heroContent}>
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

            <div className={classes.heroButtons}>
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
          </main>
        </React.Fragment>
      );
  }
}

export default withStyles(styles)(CreateQueue)
