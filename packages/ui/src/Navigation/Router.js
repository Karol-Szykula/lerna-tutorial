import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'


import Navigation from './Navigation'
import MenuItem from './MenuItem';
import ToDo from './../ToDo/ToDo'


class Router extends React.Component {

    state = {
        isDrawerOpen: false
    }

    toggleDrawer = () => this.setState({ isDrawerOpen: !this.state.isDrawerOpen })

    handleClose = () => this.setState({ isDrawerOpen: false })

    render() {

        return (
            <BrowserRouter>
                <div>
                    <Navigation
                        toggleDrawer={this.toggleDrawer}
                        isDrawerOpen={this.state.isDrawerOpen}
                        title="Test app">
                        <MenuItem
                            handleClose={this.handleClose}
                            to="/"
                            text="ToDo"
                        />


                    </Navigation>
                    <Route path="/" exact component={ToDo} />

                </div>
            </BrowserRouter>
        )
    }
}

export default Router