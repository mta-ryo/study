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
      backgroundColor:'#eee'
  },
  infoarea:{
      margin : 40,
  }
};

class ProfileComponent extends React.Component{
    render(){
        return(
            <div style={style.component}>
                <div style={style.infoarea}>
                    <h2>個人情報</h2>
                    <TextField id="name" hintText="your name"　floatingLabelText="氏名"/>
                    <DatePicker hintText="Landscape Dialog" mode="landscape" floatingLabelText="生年月日"　/>
                    <TextField id="mail" floatingLabelText="メールアドレス"　hintText="your name"/><br/>
                    <TextField id="telNumber" floatingLabelText="携帯番号"　hintText="your name"/><br/>
                    <br/><br/>
                    <div style={style.block}>
                        <Toggle　label="メール配信希望"　style={style.toggle}/>
                    </div>
                </div>
            </div>
        );
    }
}
export default ProfileComponent;
