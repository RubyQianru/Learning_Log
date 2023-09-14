import logo from './logo.svg';
import { useState } from 'react';
import Logs from './components/logs'
import LogsForm from './components/Logsform/LogsForm';
import './App.css';

function App() {
  //表单数据
  
  const [logsData, setLogsData] = useState(/*[{   
    id:'001',
    date: new Date(2023,4,12),
    desc: 'React',
    time: 50
},
{   
    id:'002',
    date: new Date(2023,5,10),
    desc: 'Vue',
    time: 20
},
{   
    id:'003',
    date: new Date(2023,6,22),
    desc: 'CSS',
    time: 60
}]*/[]);

  const saveLogHandler = (newLog) =>{
  //向新的日志里添加id
  newLog.id = Date.now() + '';
  setLogsData([newLog, ...logsData]);
  };
    

  return (
    <div className="App">
      <LogsForm onSaveLog = {saveLogHandler}/>
      <Logs logsData = {logsData}/>
    </div>
  );
};

export default App;
