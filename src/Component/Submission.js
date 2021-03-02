import React from 'react'
import { Table } from 'react-bootstrap';
import './design.css'
class Submission extends React.Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();

    }
    back = e => {
        e.preventDefault();
        this.props.preStep();

    }
    render() {
        const { value: { firstName, middleName, lastName, states, city, organisationname, experiance, salary } } = this.props;

        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-md-6 offset-3 bg-dark">
                    <h3 className="text-monospace text-light">Submission</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 offset-3 bg-light">
                        
                        <form>
                            <Table className="table table-sm text-left">
                                <tbody>
                                    <tr>
                                        <td>First Name:</td>
                                        <td >{firstName}</td>
                                    </tr>
                                    <tr>
                                        <td>Middle NAME:</td>
                                        <td>{middleName}</td>
                                    </tr>
                                    <tr>
                                        <td>Last Name:</td>
                                        <td>{lastName}</td>
                                    </tr>
                                    <tr>
                                        <td>State:</td>
                                        <td>{states}</td>
                                    </tr>
                                    <tr>
                                        <td>City:</td>
                                        <td>{city}</td>
                                    </tr>
                                    <tr>
                                        <td>Organisation Name:</td>
                                        <td>{organisationname}</td>
                                    </tr>
                                    <tr>
                                        <td>Experiance:</td>
                                        <td>{experiance}</td>
                                    </tr>
                                    <tr>
                                        <td>Salary:</td>
                                        <td>{salary}</td>
                                    </tr>
                                    
                                </tbody>
                            </Table>
                            
                            <button type="submit" className="btn btn-dark btnsize" onClick={this.back} >Go Back</button>

                            <button type="submit" className="btn btn-dark btnsize" onClick={this.continue} >Confirm</button>
                            
                        </form>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Submission;

