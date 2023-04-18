import React, {useState, useEffect} from 'react';
// import {uuid} from 'uuidv4';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Header';
import AddContact from './AddContact';
// import ContactCard from './ContactCard';
import ContactList from './ContactList';


function App() {
  const localStorage_key = 'contacts';
  const [contacts, setContacts] = useState([])
  const addContactHandler = (contact) =>{
    console.log(contact);
    setContacts([...contacts, contact]);
  }
useEffect(() =>{
const List = JSON.parse(sessionStorage.getItem(localStorage_key));
console.log(List);
if(List) setContacts(List);
}, []);  

useEffect(() =>{
sessionStorage.setItem(localStorage_key, JSON.stringify(contacts))
}, [contacts]);

  return (
    <div>
      <Header/>
      <AddContact addContactHandler={addContactHandler}/>
      {/* <ContactCard/> */}
      <ContactList contacts={contacts}/>
        
    </div>
  );
}

export default App;
