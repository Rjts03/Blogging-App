import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import './style.css';


export default class Editor extends React.Component {
    state = {
        name: "",
        email: "",
        comment: "",
        title: "",
        status: false
    }

    setDispStatus = () => {

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
        this.props.act(this.state, this.props.target);
        this.setState({status: false});
    }

    handleCancel = () => {
        this.setState({
            status: false
        });
    }

    handleClick = () => {
        this.setState({
            name: this.props.info.name,
            email: this.props.info.email,
            title: this.props.info.title,
            comment: this.props.info.comment,
            status: true
        });
    }

    render() {
        return (
            
            <div className="app-popup">
                <Button onClick={this.handleClick}><img src={this.props.ico} alt="edit image"></img></Button>
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