import {useState} from 'react';  
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateTask from'./modal/CreateTask';
import UpdateTask from'./modal/UpdateTask';
import Tasks from './data/Tasks';
//import data from '../data';
 

function Container() {   
 // For Show Tasks
  const [showResult, setShowTasks] = useState(false);
  const onClick = () => setShowTasks(true)

  //For Create Task Modal
    const [showCreate, setShowCreate] = useState(false);
    
    const hanldeClickCreate = (selectedRec) => {
      setSelectedDataCreate(selectedRec);
      setShowCreate(true);
    };

    const hideModalCreate = () => {
      setShowCreate(false);
    }; 

    const [selectedDataCreate, setSelectedDataCreate] = useState({});

  //For Update Task Modal
    const [showDelete, setShowDelete] = useState(false);

    const [selectedDataDelete, setSelectedDataDelete] = useState({});

    const hanldeClickDelete = (selectedRec) => {
      setSelectedDataDelete(selectedRec);
      setShowDelete(true);
    }; 

    const hideModalDelete = () => {
      setShowDelete(false);
    }; 

    // Delete Task
    const handleDelete = (id) => {
      var index = Tasks.map(function(e){
        return e.id
      }).indexOf(id);
      Tasks.splice(index,1);
    }

  return (
    <div >   
        <div className="container m-4 p-4">
          <button className='btn btn-primary task-button' onClick={onClick}>Show Task</button> 
          <button className='btn btn-primary task-button' onClick={() => hanldeClickCreate()} >Create Task</button>
          <button className='btn btn-danger task-button' onClick={() => handleDelete()}>Delete Task</button>
        </div> 
      {showCreate && <CreateTask details={selectedDataCreate} handleCloseCreate={hideModalCreate} />} 
      {showDelete && <UpdateTask details={selectedDataDelete} handleCloseDelete={hideModalDelete} />} 
        <div className='row m-5'>
          <div className='col md-6'>{ showResult ? <TasksTable /> : null }</div>
        </div>
    </div>
  );
} 
 
const TasksTable = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const handleRowClick = data => {
    setModalOpen(true);
    setModalData(data);
  }

  return (
    <>
     <div id="results" className="search-results">
    <table className='table'>
      <thead>
        <tr>
          <th>Task Id</th>
          <th>Project Name</th>
          <th>Task Name</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>   
          {
            Tasks && Tasks.length > 0 // If data length > 0 return data
            ?
            Tasks.map((data) => {
                return(
                    <tr key={data.id} onClick={() => handleRowClick(data)}>
                        <td><input  type="checkbox"/>{data.id}</td>
                        <td>{data.project_name}</td>
                        <td>{data.task_name}</td>
                        <td>{data.status}</td>
                    </tr>
                )})
            :  // Else retun message
            "No Data Available"
          } 
      </tbody> 
    </table>
    </div>
    {modalOpen ? <UpdateTask data={modalData} closeModal={() => setModalOpen(false)} /> : null}
    </> 
   );
}

export default Container;