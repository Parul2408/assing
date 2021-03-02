import React from 'react'
import OfficialDetails from './OfficialDetails';
import PrimaryDetails from './PrimaryDetails';
import Submission from './Submission';


class UserForm extends React.Component{
    state={
        step:1,
        firstName:'',
        middleName:'',
        lastName:'',
        states:'',
        city:'',
        organisationname:'',
        experiance:'',
        salary:'',
    
         
    }
    //Proceed to next tab
    nextStep=()=>{
        const {step}=this.state;
        this.setState({
            step: step+1
        });
    }
    //Proceed to previous tab

    preStep=()=>{
        const {step}=this.state;
        this.setState({
            step: step-1
        });
    }
    //handle state feilds change
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }
   
    

    render(){
        const {step} = this.state;
        const {firstName,middleName,lastName,states,city,organisationname,experiance,salary} = this.state;
        const value= {firstName,middleName,lastName,states,city,organisationname,experiance,salary};
        
        switch(step){
            case 1: 
            return(
                <PrimaryDetails
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                value={value}
                
               />
                )
            case 2:
                return(
                    <OfficialDetails
                    nextStep={this.nextStep}
                    preStep={this.preStep}
                    handleChange={this.handleChange}
                    value={value}
                    />
                )
            case 3:
                return(
                    <Submission
                    nextStep={this.nextStep}
                    preStep={this.preStep}
                    value={value}
                    />
                )
            default:
                return(
                    <h4 className="text-success">Successfully submitted..!!</h4>
                )
        }
    }
}

export default UserForm;