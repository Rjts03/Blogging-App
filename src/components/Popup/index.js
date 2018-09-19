import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Buttons from '../Button';
import './style.css';


const data = [];

export default class Popup extends React.Component {
    state = {
        name: "",
        email: "",
        comment: "",
        title: "",
        status: false
    
    }

    updateData = (pos) => {
        data.splice(pos, 1);
        this.props.getdata(data);
        console.log("updated len: ", data.length);
    }

    editData = (ele, pos) => {
        data.splice(pos, 1, ele);
        this.props.getdata(data);
        console.log("modified at", pos);
    }

    handleReset = () => {
        this.setState({
            name: "",
            email: "",
            comment: "",
            title: ""
        });
    }

    handleSubmit = () => {
        data.push(this.state);
        this.props.getdata(data);
        this.setState({status: false})
    }

    handleCancel = () => {
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
                <Buttons clickOn={this.handleClick} tag="Create Blog"/>
                <Dialog
                open={this.state.status}
                onClose={this.handleClose}
                aria-labelledby="form-dialog-title"
                >
                <DialogTitle id="form-dialog-title">Create Blog</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                    Add your details in the below form. Enter your views in the Comment-box. Click Submit to 
                    save your blog. Click Reset to clear all the fields. 
                    </DialogContentText>
                    <div className="textfield">
                        <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        type="text"
                        value = {this.state.name}
                        onChange = {(e)=>this.setState({name : e.target.value})}
                        fullWidth
                        color="secondary"
                        />
                    </div>
                    <div className="textfield">
                        <TextField
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        value = {this.state.email}
                        onChange = {(e)=>this.setState({email : e.target.value})}
                        fullWidth
                        />
                    </div>
                    <div className="textfield">
                        <TextField
                        margin="dense"
                        id="name"
                        label="Title"
                        type="text"
                        value = {this.state.title}
                        onChange = {(e)=>this.setState({title : e.target.value})}
                        fullWidth
                        />
                    </div>
                    
                    <div className="comment-box">
                    <textarea id="article" 
                    rows="5" 
                    cols="75" 
                    maxLength="1000"
                    wrap="hard" 
                    placeholder="Description"
                    value = {this.state.comment}
                    onChange = {(e)=>this.setState({comment : e.target.value})}
                    />
                    </div> 
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleCancel} color="primary">
                    Cancel
                    </Button>
                    <Button onClick={this.handleReset} color="primary">
                    Reset
                    </Button>
                    <Button onClick={this.handleSubmit} color="primary">
                    Submit
                    </Button>
                </DialogActions>
                </Dialog>
            </div>
            
        );
    }
} 