import React, { Component } from 'react'
import {connect} from 'react-redux';
import Input from './Components/Input';
import Option from './Components/Option';
import * as action from './store/actions';
import * as actionTpe from './store/actionType';
import * as InputName from './inputsNames';


import './App.css';
class App extends Component {
  render() {
    return (
        <div className="App">
          <header>
            
          </header>
          <body className="App-body">
            <div className="container">
              <div className="inputs">
                    
                    <Input type="text" 
                          desc="put your name"
                          name="userName"
                          onchange={this.props.updateInput.bind(this,actionTpe.Update_Username)}
                    />
                    <Input type="text" 
                          desc="put your Family Name"
                          name="familyName"
                          onchange={this.props.updateInput.bind(this,actionTpe.Update_Family)}
                    />
                    <Option name="selectCountry" 
                          items={[
                                  {value:'Spain',desc:'Spain'},
                                  {value:'Iran',desc:'Iran'},
                                  {value:'Japan',desc:'Japan'},
                                  {value:'Italy',desc:'Italy'},
                                  {value:'Sierra Leon',desc:'Sierra Leon'}
                                ]}
                            onchange={this.props.updateInput.bind(this,actionTpe.Update_Country)}
                    />
                    <Input  type="radio" 
                            desc="Male"
                            name="gender"
                            value="Male"
                            isinline="true"  
                            onchange={this.props.updateInput.bind(this,actionTpe.Update_Gender)}
                    />
                    <Input type="radio" 
                          desc="Female"
                          name="gender"
                          value="Female"
                          isinline="true"
                          onchange={this.props.updateInput.bind(this,actionTpe.Update_Gender)}
                    />
                    <Input type="radio" 
                          desc="Other"
                          name="gender"
                          value="Other"
                          isinline="true"
                          onchange={this.props.updateInput.bind(this,actionTpe.Update_Gender)}
                    />     
                    <Input type="date" 
                          desc="put your birth Date"
                          name="birthDate"
                          onchange={this.props.updateInput.bind(this,actionTpe.Update_BirthDay)}     
                    />
                  
                    <div className="inputs-perview">
                    </div>
              </div>
              <div className="publish">
              <p>{this.props.userName}</p>
              <p>{this.props.family}</p>
              <p>{this.props.gender}</p>
              <p>{this.props.country}</p>
              <p>{this.props.birthDay}</p>

              </div>
            </div>
          </body>
        
        </div>
      );
    
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    updateInput: (actionTpe, e) => {
      console.log(e.target.value);
      dispatch(action.GenericUpdater(actionTpe,e.target.value));        
     // dispatch(action.UpdateUsername(e.target.value));
    }

      
    }
  }

const mapStateToProps = (state) => {
  return {
    userName: state.userName,
    family : state.family,
    gender :state.gender,
    country : state.country,
    birthDay: state.birthday
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App)
