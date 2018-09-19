import React, { Component } from 'react';
import './App.css';
import Popup from './components/Popup';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import DelPopup from './components/DelPop';
import Editor from './components/Editor';

const editlogo = require('./assets/icons/round-create-24px.svg');
const clearlogo = require('./assets/icons/round-close-24px.svg');

const themes = createMuiTheme({
  palette: {
    primary: {
      main: '#673ab7',
    },
    secondary: {
      main: '#ff4081',
    },
    action: {
      main: '#D32F2F',
    },
  },
});

class App extends Component {
  state = {
    blogs: [],
  }
  
  constructor(props) {
    super(props);
    this.refpopup = React.createRef();
  }

  getData = (data) => {
    this.setState({blogs : data});
  }

  removePost = (pos) => {
    this.refpopup.current.updateData(pos);
    console.log("final at",pos,"len: ", this.state.blogs.length);
  }

  editPost = (ele,pos) => {
    this.refpopup.current.editData(ele, pos);
    console.log("modified at", pos);
  }


  render() {
    return (
      <MuiThemeProvider theme={ themes }>
        <div className="App">
          <div className="status-bar">   
          </div>
          <header className="App-header">
            <div className="app-logo-wrapper"> 
            <img src="https://image.flaticon.com/icons/svg/771/771594.svg" className="App-logo" alt="logo" />
              <div className="logo-head">Blogger</div>
            </div>
            <Popup getdata={this.getData} ref={this.refpopup}/>
          </header>
          { this.state.blogs.length!==0 ? <div></div> : <div className="app-message">Your posts appear here</div> }
          <div className="blog-wrap">
            <div className="blog-container">
              {this.state.blogs.map( (item, index) => 
              <div className="blog-content">
                <div className="box-btns">
                  <Editor ico={editlogo} target={index} info={item} act={this.editPost}/>
                  <DelPopup ico={clearlogo} target={index} act={this.removePost}/>
                </div>
                <div><label className="label">Name: </label>{item.name}</div>
                <div><label className="label">e-mail: </label>{item.email}</div>
                <div><label className="label">Title: </label>{item.title}</div>
                <div className="comment-box"><label className="label">Comment: </label>{item.comment}</div>
              </div>
              )}
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
