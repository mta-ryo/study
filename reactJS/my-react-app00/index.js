import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
const style = {
  margin: 3,
};
const App = () =>(
    <MuiThemeProvider>
        <div>
            <h1>aaa</h1>
                <RaisedButton label="Primary" primary={true} style={style} />
                <RaisedButton label="Primary" primary={true} style={style} />
                <RaisedButton label="Primary" primary={true} style={style} />
                <RaisedButton label="Secondary" secondary={true} style={style} />
                <MainComponent/>
        </div>
    </MuiThemeProvider>
);

class MainComponent extends React.Component{
    render(){
        return(
            <h1>aaaaa</h1>
        );
    }
}


ReactDOM.render(<App />,
    document.getElementById('root')
);
