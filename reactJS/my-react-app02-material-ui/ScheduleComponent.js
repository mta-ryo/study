import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import Toggle from 'material-ui/Toggle';

const style = {
  margin: 3,
  toggle: {
      marginBottom: 16,
  },
  block: {
      maxWidth: 250,
  },
  component:{
      backgroundColor:'#eee',
      border: 'solid #808000',
  },
  infoarea:{
      margin : 40,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

class ScheduleComponent extends React.Component{

    render(){
        return(
            <div style={style.component}>
                <h2>スケジュール</h2>
            </div>

        );
    }

}
export default ScheduleComponent;
