import Axios from 'axios';
import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class UpdateModal extends Component{

    constructor(props){
        super(props);
        this.state = {
            modal_title :'Employee Update',
            employeeName : null,
            employeeSalary: null,
        }
    }
    //update name state
    inputEmployeeName = (event) => {
        this.setState({
            employeeName: event.target.value,
        })
    }
    //update salary state
    inputEmployeeSalary = (event) => {
        this.setState({
            employeeSalary: event.target.value,
        })
    }

    static getDerivedStateFromProps(props, current_state){
        let employeeUpdate = {
            employeeName: null,
            employeeSalary: null,
        }
        //upadte data from input
        if( current_state.employeeName && (current_state.employeeName !== props.employeeData.currentEmployeeName)){
            return null;
        }
        if( current_state.employeeSalary && (current_state.employeeSalary !== props.employeeData.currentEmployeeSalary)){
            return null;
        }
        
        //update data from props
        if(current_state.employeeName !== props.employeeData.currentEmployeeName ||
            current_state.employeeName === props.employeeData.currentEmployeeName){
            employeeUpdate.employeeName = props.employeeData.currentEmployeeName;
        }
        if(current_state.employeeSalary !== props.employeeData.currentEmployeeSalary ||
            current_state.employeeSalary === props.employeeData.currentEmployeeSalary){
            employeeUpdate.employeeSalary = props.employeeData.currentEmployeeSalary;
        }
        return employeeUpdate;
    }

    //updating employee data
    updateEmployee = () => {
        Axios.post('/update/employee/data', {
            employeeId: this.props.modalId,
            employeeName: this.state.employeeName,
            employeeSalary: this.state.employeeSalary,
        }).then( () => {
            // console.log(response);
            // location.reload();
            // toast.success('Employee Update Successfully');
            toast.success('Employee Update Successfully');
            setTimeout( ()=> {
                location.reload();
            }, 2500)
        })
    }

    render(){
        return(
            <div className="modal fade" id={'updateModal'+this.props.modalId} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{ this.state.modal_title }</h5>
                        <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3 row">
                                <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Name</label>
                                <div className="col-sm-10">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="staticEmail"
                                    value={ this.state.employeeName ?? "" }
                                    onChange={this.inputEmployeeName} />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Salary</label>
                                <div className="col-sm-10">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="inputPassword"
                                    value={ this.state.employeeSalary ?? "" }
                                    onChange={this.inputEmployeeSalary}/>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button 
                            type="submit" 
                            className="btn btn-primary"
                            onClick={this.updateEmployee}
                             >Update</button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UpdateModal;