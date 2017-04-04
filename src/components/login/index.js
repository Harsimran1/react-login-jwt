import React from 'react';
import { browserHistory } from 'react-router';
import styles from './style.css';
import Header from '../header/index';
import {isAuthenticated,loginAndAuthenticate} from '../../services/authentication'



export default class LoginPage extends React.Component {

    constructor(props){
        super(props);
          this.state = {
              error : false
          };

        this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentWillMount(){
      if(isAuthenticated()){
          browserHistory.push('/');
      }
  }

    handleSubmit(e) {
      e.preventDefault();
        loginAndAuthenticate(this.refs.email.value,this.refs.pass.value)
          .then(() => {
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
