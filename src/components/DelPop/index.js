import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import './index.css';


export default class DelPopup extends React.Component {
    state = {
        
        status: false
    
    }

    setDispStatus = () => {

    }


    handleYes = () => {
        this.props.act(this.props.target);
        this.setState({status: false});
    }

    handleNo = () => {
        this.setState({
            status: false
        });
    }

    handleClick = () => {
        this.setState({
            status: true
        });
    }

    render() {
        return (
            <div className="app-popup">
                <Button onClick={this.handleClick}><img src={this.props.ico} alt="del image"></img></Button>
                <Dialog
                open={this.state.status}
                onClose={this.handleNo}
                aria-labelledby="form-dialog-title"
                >
                <DialogTitle id="form-dialog-title">Warning !</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                    Do you really want to <b>delete</b> the post? 
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleYes} color="primary">
                    Yes
                    </Button>
                    <Button onClick={this.handleNo} color="primary">
                    No
                    </Button>
                </DialogActions>
                </Dialog>
            </div>
        );
    }
} 