import React from 'react';
import LogsItem from './LogsItem';
import Card from './UI/Card/card'
import './logs.css';

const Logs = (props) =>{
    //模拟一组从服务器中加载的数据

    /*
        logsData 用来存储学习的日志
            这个数据除了当前组件Logs需要使用外，logsForm也需要使用
            当遇到一个数据需要被多个组件使用时，我们可以将数据放入到这些组件共同的祖先元素

        state 的提升

    */

    //将数据放入JSX中
    const logsItemData = props.logsData.map(item => <LogsItem key={item.id} date={item.date} desc={item.desc}
        time={item.time}/>);

    return <Card className='logs'>
        {/* {logsData.map(item => <LogsItem date={item.date} desc={item.desc} time={item.time}/>)} */}
        {logsItemData}
    </Card>
};

export default Logs;