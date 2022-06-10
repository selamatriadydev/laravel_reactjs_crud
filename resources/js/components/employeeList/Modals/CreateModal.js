import Axios from 'axios';
import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class CreateModal extends Component{

    constructor(props){
        super(props);
        this.state = {
            modal_title :'Employee Create',
            employeeName : null,
            employeeSalary: null,
        }
    }
    //create name state
    inputEmployeeName = (event) => {
        this.setState({
            employeeName: event.target.value,
        })
    }
    //create salary state
    inputEmployeeSalary = (event) => {
        this.setState({
            employeeSalary: event.target.value,
        })
    }


    //updating employee data
    storeEmployeeData = () => {
        Axios.post('/store/employee/data', {
            employeeName: this.state.employeeName,
            employeeSalary: this.state.employeeSalary,
        }).then( () => {
            // console.log(response);
            toast.success('Employee Create Successfully');
            setTimeout( ()=> {
                location.reload();
            }, 2500)
        })
    }

    render(){
        return(
            <>
                <div className='row text-right mb-3 pb-3 '>
                    <button 
                        type="button" 
                        className="btn btn-success text-right col-3 offset-md-9"
                        data-toggle="modal" 
                        data-target={'#createModal'}>create</button>
                </div>
                <div className="modal fade" id={'createModal'} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                        placeholder='Name Here'
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
                                        placeholder='Salary Here'
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
                                onClick={this.storeEmployeeData}
                                >Create</button>
                        </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default CreateModal;