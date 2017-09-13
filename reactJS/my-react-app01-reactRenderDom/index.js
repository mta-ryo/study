import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';



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
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/page_a'>Page A</Link></li>
                        <li><Link to='/page_b'>Page B</Link></li>
                    </ul>
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
                  <Route path='/page_a' component={PageA} />
                  <Route path='/page_b' component={PageB} />
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

class PageA extends React.Component{
    render(){
        return(
            <h2>PageA</h2>
        );
    }
}

class PageB extends React.Component{
    render(){
        return(
            <h2>PageB</h2>
        );
    }
}

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>,
    document.getElementById('root')
);
