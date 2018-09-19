import React from 'react';
import Button from '@material-ui/core/Button';
import './style.css';


export default class Buttons extends React.Component {

    render() {
        return (
            <div className="app-btn">
                <Button onClick={this.props.clickOn} variant="contained" color="secondary">
                    {this.props.tag}
                </Button>
            </div>
        );
    }
} 