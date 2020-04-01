import React,{Component}from'react';
import axios from 'axios';
function searchingfor(term) {
    console.log("term"+term)
    return function (x) {
        console.log("here x",x)
     
     return  x.name.toLowerCase().includes(term.toLowerCase())||x.shopname.toLowerCase().includes(term.toLowerCase())||x.createdAt.toLowerCase().includes(term.toLowerCase())||x.status.toLowerCase().includes(term.toLowerCase()) ||!term;
      
    
        // return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
    }
  }
export default class FlighterList extends Component{
    constructor(props){
        super(props);
        this.state={
            listData1:[],        
            newitems:[],
            searchkey:"",
            sortbyrating:"sortbyrating",
            asc:true
        }
       
        
          
    }
    componentDidMount(){
        this.getData();
    }
  async  getData(){
    await axios.get("http://localhost:3001/customers").then(response => {
        this.setState({ listData1: response.data });
        console.log(this.state.listData1);
        
      })
  }
   formatDate=(date)=> {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}
    render(){
        return(
            <div>
         
                <div>
                    <div style={{display: 'flex', justifyContent: 'flex-end',paddingTop:20,paddingBottom:20}}>
                <input type="text" style={{width:"50%"}} value={this.state.searchkey} className="form-control" placeholder="search for customer" onChange={(evt)=>this.setState({searchkey:evt.target.value})} />
                </div>
                    <table class="table">
  <thead>
    <tr>
      <th scope="col">sno</th>
      <th scope="col">NAME</th>
      <th scope="col">SHOPNAME</th>
      <th scope="col">STATUS</th>
      <th scope="col">CREATEDAT</th>
      
    </tr>
  </thead>
  <tbody>   {this.state.listData1.filter(searchingfor(this.state.searchkey)).map((item,i)=>

    
    <tr>
      <th scope="row">{i+1}</th>
      
      <td>{item.name}</td>
      <td>{item.shopname}</td>
      <td>{item.status}</td>
      <td>{this.formatDate(item.createdAt)}</td>
      
    </tr>
    )}
  </tbody>
</table>
                </div>
           
           
   
            </div>
        )
    }
}