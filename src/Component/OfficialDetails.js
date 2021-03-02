import React from 'react'
import './design.css'

class OfficialDetails extends React.Component{
    continue = e =>{
        e.preventDefault();
        if(this.props.value.organisationname===""){
            alert("* feilds are requried to fill")
        }
        else if(this.props.value.experiance===""){
            alert("* feilds are requried to fill")
        }
        else if(this.props.value.salary===""){
            alert("* feilds are requried to fill")
        }
        else{
        this.props.nextStep();
        }

    }
    back = e =>{
        e.preventDefault();
        this.props.preStep();

    }
    render(){
        const {value, handleChange} = this.props;
        return(
         <React.Fragment>
             <div className="row">
                    <div className="col-md-6 offset-3 bg-dark">
                    <h3 className="text-monospace text-light">Official Details</h3>
                    </div>
                </div>
             <div className="row">
            <div className="col-md-6 offset-3 bg-light">
             <form>
                <div className="form-group text-left">
                    <label className="important font-weight-bold">Organisation Name</label>
                    <input type="text" className="form-control" value={value.organisationname} id="organisationname" placeholder="Eg; Infosys" name="organisationname" onChange={handleChange('organisationname')} />
                </div>
                <div className="form-group text-left">
                    <label className="important font-weight-bold">Experiance</label><small>(in years)</small>
                    <input type="number" className="form-control" value={value.experiance}  id="experiance" placeholder="Eg; 2 " name="experiance" onChange={handleChange('experiance')} />
                </div>
                <div className="form-group text-left">
                    <label className="important font-weight-bold">Salary</label>
                    <input type="number" className="form-control" value={value.salary}  id="salary" placeholder="Eg;22,000 " name="salary" onChange={handleChange('salary')} />
                </div>
               
               
                <button type="submit" className="btn btn-dark btnsize" onClick={this.back}>Go Back</button> 
               <button type="submit" className="btn btn-dark btnsize" onClick={this.continue}>Continue</button>
               
           </form>
           </div>
           </div>
         </React.Fragment>
        )
    }
}

export default OfficialDetails;
