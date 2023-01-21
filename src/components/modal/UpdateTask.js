import { useFormik } from 'formik'; 
import 'bootstrap/dist/css/bootstrap.min.css';
const UpdateTask = ({ handleCloseUpdate },props) => {
   
 { 
    const { handleSubmit, handleChange, values} = useFormik({
        initialValues: {
          id: '',
          project_name: '',
          task_name: '', 
          status: ''
        },
        onSubmit: (values) => {
          console.log(values); 
        },
      });

    return (
        <div className="modal-container">
        <h4 className='modal-title'>Update Task</h4>
          <form className='modal-form'> 
            <label>Id:</label>
            <input className='modal-input'  value={values.id} name='id' type='number' maxLength={11}/> 
            <label>Project Name:</label>
            <input className='modal-input' value={values.project_name} name='projectName' type='text'  maxLength={32}/> 
            <label>Task Name</label>
            <input className='modal-input' value={values.task_name} name='taskName' type='text' maxLength={32}/> 
            <label>Status:</label>
            <select onChange={handleChange} className="modal-input" name='status'>
                <option value="notstarted">Not Started</option>
                <option value="inprogress">In Progress</option>
                <option value="completed">Completed</option>
            </select>
              <button className="modal-close-button" onClick={handleCloseUpdate}>close</button> 
              <button type='submit' className='btn btn-primary'>Update</button>
          </form> 
    </div>
      );
    }; }

    export default UpdateTask;