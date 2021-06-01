import React from 'react';
import './Test_3.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class Test_3 extends React.Component {
    constructor() {
    super();
    this.state = {
      input: {},
      errors: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  } 

  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;  

    this.setState({
      input
    });
  }     

  handleSubmit(event) {
    event.preventDefault();  
    if(this.validate()){
        console.log(this.state); 
        let input = {};
        input["name"] = "";
        input["lastName"] = "";
        input["phone"] = "";
        this.setState({input:input});  
        alert('Your data has been sent');
    }
  }

  validate(){
      let input = this.state.input;
      let errors = {};
      let isValid = true;  

      if (!input["name"]) {
        isValid = false;
        errors["name"] = "Please enter your name";
      }  
      if (!input["lastName"]) {
        isValid = false;
        errors["lastName"] = "Please enter your last name";
      }  

      if (!input["phone"]) {
        isValid = false;
        errors["phone"] = "Phone";
      }

      if (typeof input["phone"] !== "undefined") {       

        let pattern = new RegExp(/^[0-9\b]+$/);
        if (!pattern.test(input["phone"])) {
          isValid = false;
          errors["phone"] = "Please enter only number";
        }else if(input["phone"].length !== 10){
          isValid = false;
          errors["phone"] = "Please enter a valid 10-digit phone number";
        }
      }  

      this.setState({
        errors: errors
      });  
      return isValid;
  }     

  render() {
    return (
        <div className = 'test_3'>
        <div className = 'submit'>
            <h1> HEADER </h1> 
        
        <form onSubmit={this.handleSubmit}>
          <div class="form-group">
          <TextField
                        variant="outlined"
                        margin="normal"
                        className="login-first-input"
                        required
                        id="name"
                        label={('Name')}
                        name="name"
                        autoComplete="name"
                        autoFocus
                        style={{ width: '300px'}}
                        value={this.state.input.name}
                        onChange={this.handleChange}
                    />

              <div className="text-danger">{this.state.errors.name}</div>
          </div>

          <div class="form-group">
          <TextField
                        variant="outlined"
                        margin="normal"
                        className="login-first-input"
                        required
                        id="lastName"
                        label={('Last Name')}
                        name="lastName"
                        autoComplete="Last Name"
                        style={{ width: '300px'}}
                        value={this.state.input.lastName}
                        onChange={this.handleChange}
                    />

        <div className="text-danger">{this.state.errors.lastName}</div>
          </div>
            <div class="form-group">
            <TextField
                        variant="outlined"
                        margin="normal"
                        className="login-first-input"
                        required
                        id="phone"
                        label={('Phone')}
                        name="phone"
                        autoComplete="Phone"
                        style={{ width: '300px'}}
                        value={this.state.input.phone}
                        onChange={this.handleChange}
                    />

              <div className="text-danger">{this.state.errors.phone}</div>
          </div>  
          <Button
                        type="submit"     
                        value="Submit"                   
                        style={{ background: '#b9b7b7e0' , width: '300px', height: '50px'}}
                        className='bbt'>
                        Submit
                    </Button>
        </form>
        </div>

        <div className = 'img'>
            <div class="image-container"></div>
            </div>

      </div>
    );

  }

} 

export default Test_3;