import React,{Component}from'react';
import axios from 'axios';

export default class Createcustomer extends Component{
    constructor(props){
        super(props);
        this.state={
                customerobj:{},
                name:"",
                shopname:"",
                status:"",
             
                flightList:[],
          newitems:[]
        }
        this.postData=this.postData.bind(this);
        
    }
    nextPage=()=>{
        this.props.history.push('/Customerlist');
    }
   async  postData(){
    await axios.post("http://localhost:3001/customers",this.state.customerobj).then(response => {
        
        console.log(response);
        
      })
    }
    handleSubmit=(event)=>{
        event.preventDefault();


      this.state.customerobj={
        name:this.state.name,
        shopname:this.state.shopname,
        status:this.state.status
       
      };

      this.setState({customerobj:this.state.customerobj});
      this.state.name="";
      this.state.shopname="";
      this.state.status="";
      
    
  this.postData();
           

      console.log(this.state.customerobj);
      
    }
    render(){
        return(
            <div>
                <div  style={{textAlign:"center",fontWeight:"bold",fontSize:18}}>
                <label >Create Customer</label>
                </div>
                  <form onSubmit={(e)=>this.handleSubmit(e)}  style={{ marginLeft:"30%", 
   }} >
                  <div className="form-group" >

        <label>
          NAME:    </label>
          <input type="text" style={{width:"50%"}} value={this.state.name} className="form-control" required onChange={(evt)=>this.setState({name:evt.target.value})} />
        
        </div>
        <div className="form-group">

        <label>
        SHOP NAME:     </label>
          <input type="text"style={{width:"50%"}} value={this.state.shopname} className="form-control"  required onChange={(evt)=>this.setState({shopname:evt.target.value})} />
   
        </div>
        <div className="form-group">
        <label>
        STATUS: </label>
          <input type="text"style={{width:"50%"}} value={this.state.status} className="form-control"  required onChange={(evt)=>this.setState({status:evt.target.value})} />
       </div>
     
        <div style={{flexDirection:"row"}}>
       
        <input type="submit" className="btn btn-success" value="Submit"  />
       
       
        <input type="button" style={{marginLeft:"35%"}} className="btn btn-success" value="View"  onClick={()=>this.nextPage()} />
        
        </div>
      </form>
            </div>
        )
    }
}