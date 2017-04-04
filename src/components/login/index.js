import React from 'react';
import { browserHistory } from 'react-router';
import styles from './style.css';
import axios from 'axios';
import cookie from 'react-cookie';
import Header from '../header/index';



export default class LoginPage extends React.Component {

    constructor(props){
        super(props);
          this.state = {
              error : false
          };

        if(cookie.load('Authorization')){
              browserHistory.push('/');
        }
        this.handleSubmit = this.handleSubmit.bind(this)
  }

    handleSubmit(e) {
      e.preventDefault();
       var email = this.refs.email.value;
       var pass = this.refs.pass.value;
       var loginData = {
           email: email,
           password: pass
       }
      axios.post('https://i2x-challenge.herokuapp.com/core/login/',loginData).then(res => {
          cookie.save('Authorization',res.data.token);
          browserHistory.push('/');

      }).catch(() => {
          this.setState({error: true})
      });

  }
  
  render() {
    return (
        <div>
            <Header></Header>

            <div className={styles.content}>

              <div className={styles.card} >



                  <form  onSubmit={this.handleSubmit}>
                      <label> <span>Email:</span> <input type="text" ref="email" /></label><br/>
                      <label> <span>Password:</span> <input type="password" ref="pass" /></label><br/>
                      <button className={styles.login_button} type="submit">login</button>
                      {(this.state.error)?  (
                          <div className={styles.error}>Bad login information</div>
                      ):""}
                  </form>

              </div>
            </div>
        </div>
    );
  }
}
