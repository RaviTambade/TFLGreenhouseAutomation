//data
var customers = [
    { id: 1, email: 'ravi.tambade@transflower.in',  firstname:"Ravi", lastname:"Tambade",contactnumber:"9881735801" },
    { id: 2, email: 'shubhangi.tambade@transflower.in', firstname:"Shubhangi", lastname:"Tambade",contactnumber:"9881735801" },
    { id: 3, email: 'sanika.bhor@gmail.com', firstname:"Sankia", lastname:"Bhor",contactnumber:"9881735801" },
    { id: 4, email: 'nikhil.navale@gmail.com',  firstname:"Nikhil", lastname:"Navale",contactnumber:"9881735801" },
    { id: 5, email: 'shreedhar.patil@gmail.com', firstname:"Shreedha", lastname:"Patil",contactnumber:"9881735801" },
    { id: 6, email: 'Sharan.kulkarni@gmail.com', password:'seed', firstname:"Sharan", lastname:"Kulkarni",contactnumber:"9881735801" },
    { id: 7, email: 'kartik.g@gmail.com', password:'seed', firstname:"Kartik", lastname:"Kambale",contactnumber:"9881735801" },    
    { id: 8, email: 'seema.patil@gmail.com', password:'seed', firstname:"Seema", lastname:"Nene",contactnumber:"9881735801" },
];

//Service
const CustomerService = {
    //service methods 
     getAll() {     
         return customers;
     },
 
     geCustomerById(id){
        let customer= customers.find( (theCustomers)=>(theCustomers.id ===id));
        return customer;
     },
 
     register(theCustomer){
         customers.push(theCustomer);
     },
 
     Update(theCustomer){
         customers=customers.filter(customer=>customers.id !==theCustomer.id);
         customers.push(theCustomer);
     },
 
     remove(id){
         customers=customer.filter(theCustomer=>theCustomer.id !==id);
     } 
 }
  
 export default CustomerService;