import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import {AppBar} from '@material-ui/core'
import Button from '@material-ui/core/Button';

function Layout() {
  return (
      <div className="App">
            <AppBar title="My App">
                <div>
                    <h1>
                        SimplQ
                    </h1>
                    <p> Virtual queue generation for everyday use </p>
                </div>
                <p> Form here </p>
                <Button> Create a new Queue </Button>
            </AppBar>
        </div>
  );
}

export default Layout;
