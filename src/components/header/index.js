import React from "react";
import { browserHistory } from 'react-router';
import cookie from 'react-cookie';
import styles from "./style.css";

export default class Header extends React.Component {

    logout(){
        cookie.remove('Authorization');
        browserHistory.push('/login');
    }
    isLoggedIn(){
        return cookie.load('Authorization');
    }

    render() {
        return (
            <div className={styles.header}>
                <div className={styles.content}>
                    <div> i2X </div>
                    {(this.isLoggedIn())?(
                            <div onClick={this.logout}>Logout</div>):<div>Login to Continue</div>
                    }
                </div>
            </div>
        );
    }
}
