import React, { Component } from 'react';
import { WithContext as ReactTags } from 'react-tag-input';

const KeyCodes = {
    comma: 188,
    enter: 13,
  };
  
const delimiters = [KeyCodes.comma, KeyCodes.enter];
class AddTask extends Component {
    state = {
        tsk: 0,
        tags:[]
    }

    handleDelete = (i) => {
        const { tags } = this.state;
        this.setState({
          tags: tags.filter((tag, index) => index !== i),
        });
      }
    
      handleAddition = (tag) => {
       this.setState(state => ({ tags: [...state.tags, tag] }));
      }
    
      handleDrag = (tag, currPos, newPos) => {
        const tags = [...this.state.tags];
        const newTags = tags.slice();
    
        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);
    
        // re-render
        this.setState({ tags: newTags });
      }
    
      handleTagClick = (index) => {
        console.log('The tag at index ' + index + ' was clicked');
      }
      handleAddNewTsk = () => {
        const {tags,tsk} = this.state
        let depc = []
        tags.map(tag => depc.push(tag.id))
        this.props.addNewTask({tsk,depc})
        this.props.handleAddTask()
      }
      handleTsk =(e)=> {
        this.setState({tsk: e.target.value})
      }
    render() {
        const {handleAddTask} =this.props
        const {tsk, depc, tags} = this.state
        return (
            <div className="col-md-offset-3 col-md-6  row">
                <div className="col-sm-12 tsk-sub-conatiner">
                    <div className="col-md-6 ">
                        <div className="form-group">
                            <label htmlFor="task">Task</label>
                            <input type="number" className="form-control" value={tsk} onChange={(e) => this.handleTsk(e)} placeholder="Enter Task"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="dependsOn">Depends On</label>
                            <ReactTags
                                tags={tags}
                                suggestions={[]}
                                delimiters={delimiters}
                                handleDelete={this.handleDelete}
                                handleAddition={this.handleAddition}
                                handleDrag={this.handleDrag}
                                handleTagClick={this.handleTagClick}
                                />
                            </div>
                    </div>
                </div>
                <div className="col-sm-12 action-buttons">
                    <div className="col-sm-6">
                        <button onClick={() => handleAddTask()}>Cancel</button>
                    </div>
                    <div className="col-sm-6">
                        <button onClick={this.handleAddNewTsk}>Add Task</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddTask;