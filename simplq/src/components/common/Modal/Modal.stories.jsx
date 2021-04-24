import React from 'react';
import Grid from '@material-ui/core/Grid';
import Modal from '.';
import Button from '../Button';

export default {
  component: Modal,
  title: 'Modal',
};

export const Normal = () => (
  <Modal open>
    <Grid container direction="column">
      <h2>Delete Account</h2>
      <p>Are you sure you want to delete your account?</p>
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <Button>Cancel</Button>
        <Button>Delete</Button>
      </div>
    </Grid>
  </Modal>
);
