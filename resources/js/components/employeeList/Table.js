import Axios from 'axios';
import React , {Component} from 'react';
// import ReactDOM from 'react-dom';
import TableRow from './TableRow';
import CreateModal from './Modals/CreateModal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class Table extends Component{


    constructor(props){
        super(props);

        this.state = {
            employees : []
        }
    }

    // life cycle method 
    componentDidMount(){
        this.getEmployeeList();
    }



    // get employee list  
    getEmployeeList = () => {
        let self = this;
        Axios.get('/get/employee/list').then( function(response){
            // console.log(response.data);
            self.setState({
                employees:response.data
            });
        });
    }

    render() {
        return (
            <div className="container">
                <ToastContainer />
                <CreateModal />
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Employee </div>
                            
                            <div className="card-body">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Salary</th>
                                        <th scope="col">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.employees.map(function(x, i){
                                            return  <TableRow key={i} data={x} />
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Table;
