import React from 'react';
import { useState } from 'react';
import 'react-times/css/material/default.css';
import TimePicker from 'react-times'

const Timing = () => {
    return (
        <div>
            <p>Opening Hour</p>
            <div>
                <p>Monday</p>
                <TimePicker
                    onFocusChange={this.onFocusChange.bind(this)}
                    onTimeChange={this.onTimeChange.bind(this)}
                />
            </div>
        </div>
    );
};

export default Timing;