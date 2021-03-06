import React from "react";
import { browserHistory } from 'react-router';
import styles from "./style.css";
import {removeAuthentication,isAuthenticated} from '../../services/authentication'


export default class Header extends React.Component {

    logout(){
        removeAuthentication();
        browserHistory.push('/login');
    }


    render() {
        return (
            <div className={styles.header}>
                <div className={styles.content}>
                    <div> i2X </div>
                    {(isAuthenticated())?(
                            <div><span onClick={this.logout}>Logout</span></div>):(<div>Login to Continue</div>)
                    }
                </div>
            </div>
        );
    }
}
