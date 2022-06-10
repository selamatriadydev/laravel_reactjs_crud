import Axios from 'axios';
import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class DeleteModal extends Component{

    constructor(props){
        super(props);
        this.state = {
            modal_title :'Employee Delete'
        }
    }

    // delete employee 
    deleteEmployeeData =(employee) => {
         Axios.delete('/delete/employee/data/'+employee).then( ()=> {
             toast.error("Employee delete successfully");

             setTimeout( ()=> {
                location.reload();
            }, 2500)
         });
    }
    render(){
        return(
            <div className="modal fade" id={'deleteModal'+this.props.modalId} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{ this.state.modal_title }</h5>
                        <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Are you sure, you want to delete this employee data?
                    </div>
                    <div className="modal-footer">
                        <button 
                            type="button" 
                            className="btn btn-danger"
                            onClick={ () => {this.deleteEmployeeData(this.props.modalId) } }>Yes</button>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DeleteModal;