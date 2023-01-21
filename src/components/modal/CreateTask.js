import { useFormik } from 'formik'; 
import 'bootstrap/dist/css/bootstrap.min.css';
const CreateTask = ({ handleCloseCreate },props) => {
   
 {   
    const { handleSubmit, handleChange, values} = useFormik({
        initialValues: {
          id: '',
          project_name: '',
          task_name: '', 
          status: '',  
        },
        onSubmit: (values) => {
          console.log(values); 
        },
      });

    return (
        <div className="modal-container">
            <h4 className="modal-title">Create Task</h4> 
            <form className="modal-form" onSubmit={handleSubmit}> 
                <label htmlFor="id"> Id: </label>
                    <input
                    id="id" 
                    name="id"
                    type="number" 
                    maxLength={11}
                    value={values.id} 
                    placeholder="Id" 
                    onChange={handleChange}  
                    className="modal-input" /> 
                <label htmlFor="project_name"> Project Name: </label>
                    <input 
                        id="project_name" 
                        name="project_name"
                        type="text" 
                        maxLength={32}
                        value={values.project_name} 
                        placeholder="Project Name" 
                        onChange={handleChange} 
                        className="modal-input"/> 
                <label htmlFor="task_name">Task Name </label>
                    <input
                            id="task_name" 
                            name="task_name"
                            type="text" 
                            maxLength={32}
                            value={values.task_name} 
                            placeholder="Project Name" 
                            onChange={handleChange} 
                            className="modal-input" /> 
                <label htmlFor="status">Status: </label>
                    <select className="modal-input" onChange={handleChange} name="status" value={values.status} >
                        <option value="notstarted">Not Started</option>
                        <option value="inprogress">In Progress</option>
                        <option value="completed">Completed</option>
                    </select>
                <button className="modal-close-button" onClick={handleCloseCreate}>close</button> 
                <button className="btn btn-primary" type="submit">Create</button>  
            </form>
        </div>
      );
    }; }

    export default CreateTask;