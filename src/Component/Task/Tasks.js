import React, { Component } from 'react';
import AddTask from '../AddTask/AddTask';
class TaskInput extends Component {
    state = {
        taskList:[],
        showAddTask: false,
        result: []
    }
    handleShowAddtaskView =()=> {
        this.setState({showAddTask:!this.state.showAddTask})
    }
    createTask = (taskList) => {
        let y = []
        for(let i = 0; i < taskList.length; i++) {
            let z = y.indexOf(taskList[i].tsk)
             if(z === -1) {
                 y.push(taskList[i].tsk)
                 z = y.indexOf(taskList[i].tsk)
             }
    
             taskList[i].depc.map(t => {
                 let p = y.indexOf(t)
                 if(p !== -1 && p < z){}
                 else {
                     if(p === -1) {
                         y.splice(z,0,t)
                     } else {
                         y.splice(p,1)
                         y.splice(z,0,t)
                     }
                 }	
             })
        }
        this.setState({result: y, taskList})
    }
    addNewTask = (newTask) => {
        let taskList = this.state.taskList
        taskList.push(newTask)
        this.createTask(taskList)
    }
    render() {
        const {showAddTask,taskList,result} = this.state
        return (
            <div className="container-fluid">
                {!showAddTask && <div className="task-container">
                <div className="col-sm-12">
                    <table><tbody>
                        {taskList.map((t, index) => 
                                <tr key={index}>
                                    <td>{t.tsk}</td>
                                    <td>{t.depc.map((d,index) => <span className="d-block" key={index}>{d}</span>)}</td>
                                </tr>
                            )}
                            </tbody>
                    </table>
                        <button onClick={this.handleShowAddtaskView}>Add New Task</button>
                        <table>
                                <tbody> 
                                    <tr>
                                        {result.map((t, index) => 
                                            <td  key={index}><span>{t}</span></td>      
                                        )}
                                    </tr>
                            </tbody>
                        </table>
                </div>
        </div> }

        
                {showAddTask && <AddTask handleAddTask={this.handleShowAddtaskView} addNewTask={this.addNewTask}/>}
            </div>
        );
    }
}

export default TaskInput;