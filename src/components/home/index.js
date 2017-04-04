import React from "react";
import styles from "./style.css";
import axios from 'axios';
import Recording from './recording-card/index'
import { browserHistory } from 'react-router';
import Header from '../header/index';
import {getJwtToken} from '../../services/authentication'



export default class HomePage extends React.Component {

  state={
      recordings : []
  }

   componentWillMount(){
       axios.get('https://i2x-challenge.herokuapp.com/ai/recording/list/',{headers:{
           'Authorization':getJwtToken()
       }}).then(res => {
           this.setState({recordings:res.data.results})
       }).catch(err => {
           browserHistory.push('/')
       })
       ;
   }

  render() {
    return (
        <div>
            <Header></Header>
            <div className={styles.content}>
                  { this.state.recordings.map(function(item) {
                      return <Recording key={item.url} recording={item}></Recording>
                  })
                  }
              </div>
        </div>
    );
  }
}
