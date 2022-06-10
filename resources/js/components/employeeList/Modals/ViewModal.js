import Axios from 'axios';
import React , {Component} from 'react';
import ReactDOM from 'react-dom';

class ViewModal extends Component{

    constructor(props){
        super(props);
        this.state = {
            modal_title :'Employee Details'
        }
    }

    render(){
        return(
            <div className="modal fade" id={'viewModal'+this.props.modalId} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{ this.state.modal_title }</h5>
                        <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Name : <strong>{ this.props.employeeData.currentEmployeeName }</strong>
                        <hr/>
                        Salary : <strong>{ this.props.employeeData.currentEmployeeSalary }</strong>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewModal;