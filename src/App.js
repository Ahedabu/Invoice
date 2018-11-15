import React, { Component } from 'react';
import './codingtest.css';




class App extends Component {

  constructor() {
    super();

    this.state = {
      
    invoices: [], 

    };

    

  }
 
  componentDidMount() {

    //the path to the json file 
    fetch("http://localhost:3000/invoice.json")
    .then(function(resp) {
      return resp.json();
    })
    .then ( data => {

      //fetch the date in the array 
      this.setState({invoices: data })
      //console.log(this.state.invoices)
    })
    .catch(function() {
      console.log("error");
    });

   
  }

  render() {
  // counting the items in the invoice. 
  let count = 0;

   return (
  <div className="container">
    <div className="card">
     {this.state.invoices.map(e => <div key={e.invoiceId}>
      <div className="card-header">
      
      <div><span><strong>Invoice: </strong> {e.invoiceId}  </span></div>
      <div><span><strong> Invoice Date:</strong> {e.invoiceDate}</span></div>
  
      </div>
      <div className="card-body">
    
      <div className="row mb-4">
      
        <div className="col-sm-6">
            <h6 className="mb-3">Sender:</h6>
            <div>Name: <strong> {e.sender.name}</strong></div>
            <div>Street: {e.sender.street}</div>
            <div>City: {e.sender.city}</div>
            <div>PostalCode: {e.sender.postalcode}</div>
            
        </div>
    
        <div className="col-sm-6">

        <h6 className="mb-3">Receiver:</h6>
        <div>Name: <strong>{e.receiver.name}</strong> </div>
        <div>Street: {e.receiver.street}</div>
        <div>City: {e.receiver.city}</div>
        <div>PostalCode: {e.receiver.postalcode}</div>
        
        </div>
    
      </div>
      <div className="row mb-4">
        <div className="col-sm-6">
         <h6 className="mb-3">Pay By:</h6> <strong> {e.payBy} </strong>
         </div>
         
       </div>
      <div className="table-responsive-sm">
          <table className="table table-striped">
          <thead>
              <tr>
              <th className="center">#</th>
              <th>Description</th>
              <th className="right">Vat</th>
              <th className="center">Qty</th>
              <th className="right">Price</th>
              </tr>
          </thead>
          <tbody>
          {e.lines.map(l=>
              <tr key={count}>
               
              <td className="center">{++count}</td>
              <td className="left"> {l.description}</td>
              <td className="right">{l.vat}</td>
              <td className="center">{l.qty}</td>
              <td className="right">{l.price}</td>
              </tr>
          
          
          )}
          </tbody>
          </table>
      </div>
      <div className="row">
      <div className="col-lg-4 col-sm-5">
      
      </div>
      
      <div className="col-lg-4 col-sm-5 ml-auto">
  <table className="table table-clear">
      <tbody>
          <tr>
            <td className="left">
            <strong>Total Price:</strong>
            </td>
            <td className="right">{e.totalPrice} SEK</td>
          </tr>
          
          <tr>
            <td className="left">
            <strong>Account:</strong>
            </td>
            <td className="right">
            <strong>{e.account}</strong>
            </td>
          </tr>
        </tbody>
  </table>
  
  </div>
  
      </div>

    </div>
      </div>
      )}
  </div>

  </div>
  
    );
  }
}

export default App;
