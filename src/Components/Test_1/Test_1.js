import React, {Component} from 'react';
import './Test_1.css';
import { Carousel } from 'react-bootstrap';

class Test_1 extends Component {
    state = {
      value: '',
      login: false,
      nick: false,
      user: '',
    }
  
    render() { 

    console.log('login',this.state.login);

    const handleChange = ()  => {        
        this.state.login ? this.setState({login: false}) : this.setState({login: true})
      }

  const handleSave = e  => {
    e.preventDefault();
    const nickName = localStorage.setItem('nickName', this.state.user);
    this.setState({value: this.state.user}, () => {
        console.log('value', this.state.value);
    });
   
    }
    
    return (
        <div className = 'test_1'>
            <div className = 'login'>
                <p className={this.state.login && this.state.value? "loginOn" : "loginOff"}> Welcom {this.state.user} to this page</p>
                <p className={this.state.login && this.state.value? "loginOn" : "loginOff"}> Your nickname ='{this.state.user}' has been sent to localStorage.</p>
            <h1 className={!this.state.login && !this.state.value? "loginOn" : "loginOff"}> HEADER </h1>    
            <button type="button" 
            className="btn btn-secondary btn-sm" 
            style = {this.state.login ? {'visibility': 'hidden '} : {'visibility': 'visible'}}
            onClick = {handleChange}
            >
            LOGIN
            </button>

             <div className={this.state.login && !this.state.value? "loginOn" : "loginOff"}>
                 <div>
                     <form >
                         <div class="form-group">
                             <label for="exampleInputEmail1">
                                 To register, enter your nickname
                                 </label>
                                <input type="name" 
                                class="form-control" 
                                id="exampleInputEmail1" 
                                aria-describedby="emailHelp" 
                                placeholder="Enter your nick name" 
                                onChange = {(e) => {this.setState({user: e.target.value})}}
                                />
                         </div>
                     <button 
                        type="submit" 
                        class="btn btn-primary" 
                        onClick = {handleSave}
                        >Submit
                    </button>
                    </form>
                            </div>
                        </div>
                    </div>

            <div className = 'carousel'>
                <Carousel>
                    <Carousel.Item>
                        <img 
                        className = 'd-block w-100'
                        src = 'https://t4.ftcdn.net/jpg/02/93/57/69/240_F_293576918_IIBptKHliLVXTzKBScDlZIKpiRwvYIEh.jpg'
                        alt = '1 pictire'
                        />                    
                        <Carousel.Caption>
                            <h4>Best place for rest...</h4>
                            <p>My forest</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img 
                        className = 'd-block w-100'
                        src = 'https://t4.ftcdn.net/jpg/01/48/94/81/240_F_148948113_vOvU2ph7t5WOvhtvNRzcJCmFJabsAeFv.jpg'
                        alt = '2 pictire'
                        />                    
                        <Carousel.Caption>
                            <h4>Best place for family...</h4>
                            <p>My family</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img 
                        className = 'd-block w-100'
                        src = 'https://t4.ftcdn.net/jpg/03/38/17/15/240_F_338171501_mBgIqdGW2a2PPCjFyOJMlFp0oFxPOLV1.jpg'
                        alt = '3 pictire'
                        />                    
                        <Carousel.Caption>
                            <h4>Best place for dream...</h4>
                            <p>My dream</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
            </div>
        </div>
    )
}
}
export default Test_1;