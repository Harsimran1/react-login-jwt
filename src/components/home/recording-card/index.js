import React from "react";
import styles from "./style.css";


export default class Recording extends React.Component {

    render() {
        return (
            <div className={styles.card}>
                <div>
                    <audio controls>
                        <source src={this.props.recording.url} type="audio/mp3"/>
                    </audio>
                    <div>
                        <span style={{color:this.props.recording.rating>=1?'gold':'lightgray'}}>★</span>
                        <span style={{color:this.props.recording.rating>=2?'gold':'lightgray'}}>★</span>
                        <span style={{color:this.props.recording.rating>=3?'gold':'lightgray'}}>★</span>
                        <span style={{color:this.props.recording.rating>=4?'gold':'lightgray'}}>★</span>
                        <span style={{color:this.props.recording.rating>=5?'gold':'lightgray'}}>★</span>
                    </div>

                    <div>{Math.round(this.props.recording.duration/60)} mins</div>

                </div>
                <div>{this.props.recording.final_script}</div>
                <p>Created On: {new Date(this.props.recording.created).toLocaleString()}</p>
            </div>
        );
    }
}
