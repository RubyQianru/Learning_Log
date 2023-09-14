import React from 'react';
import './myDate.css';

const MyDate = (props) => {
    const date = props.date.getDate();
    const month = props.date.toLocaleString('en-US',{month:'short'});
    return (
        <div>
            <div className='date'>
                <div className='month'>
                    {month}
                </div>
                <div className='day'>
                    {date}
                </div>
            </div>
        </div>
    );
};

export default MyDate;