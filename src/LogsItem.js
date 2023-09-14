import React from 'react';
import MyDate from './myDate';
import Card from './UI/Card/card'
import './Logsitem.css';

const LogsItem = (props) => {

    //在函数组件中，属性就相当于式函数的参数，可以通过参数来访问
    //可以在函数组件的形参中，定义一个props，props指向的是一个对象
    //它包含了父组件中传递的所有参数

    /*
        props是只读的，不能修改
    */
    
    return (
        <Card className='item'>
            
                <div className='date'>

                    <MyDate date={props.date}/>
                
                </div>
                <div className='content'>
                <h2 className="desc">{props.desc}</h2>
                <div className="time">{props.time} mins</div>
                
                </div>
            

        </Card>
    );
};



export default LogsItem;