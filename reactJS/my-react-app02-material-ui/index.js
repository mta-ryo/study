import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';


const style = {
  margin: 3,
};

const App =()=>(
    <div>
        <Header/>
        <Main/>
    </div>
)

class Header extends React.Component{
    render(){
        return(
            <div>
                <nav>
                    <h1>Header</h1>

                        <Link to='/page_a'>
                            <FlatButton label="個人情報" primary={true} style={style} ></FlatButton>
                        </Link>

                        <Link to='/page_b'>
                            <FlatButton label="設定" secondary={true} style={style} ></FlatButton>
                        </Link>
                </nav>
            </div>
        );
    }
}

class Main extends React.Component{
    render(){
        return(
            <main>
                <h1>Main</h1>
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route path='/page_a' component={ProfileComponent} />
                  <Route path='/page_b' component={SettingComponent} />
                </Switch>
            </main>
        );
    }
}

class Home extends React.Component{
    render(){
        return(
            <h2>Home</h2>
        );
    }
}

class ProfileComponent extends React.Component{
    render(){
        return(
            <div>
                    <h2>個人情報</h2>
                    氏名：<input type="text" value="てすと" onChange={this.handleChange} />
                    <br />
                    氏名：<TextField id="name" hintText="your name"/>
            </div>
        );
    }
}

class SettingComponent extends React.Component{
    render(){
        return(
            <h2>設定</h2>
        );
    }
}

ReactDOM.render(<MuiThemeProvider><BrowserRouter><App /></BrowserRouter></MuiThemeProvider>,
    document.getElementById('root')
);
