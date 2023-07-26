import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  inputChangeValue = e => {
    return this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitHandler = user => {
    return this.setState(prevValue => ({
      contacts: [...prevValue.contacts, { id: nanoid(), ...user }],
    }));
  };

  filteredContacts = () => {
    const { contacts } = this.state;
    const filterValue = this.state.filter.toLowerCase();
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filterValue, 0);
    });
  };

  searchHandler = user => {
    const searchUser = this.state.contacts.find(
      contact => contact.name === user.name
    );
    if (!searchUser) {
      this.submitHandler(user);
      return true;
    } else {
      alert(`${user.name} is already in contacts`);
      return false;
    }
  };

  deleteItem = contactId => {
    this.setState(prevValue => ({
      contacts: prevValue.contacts.filter(item => item.id !== contactId),
    }));
  };

  render() {
    const visibleUsers = this.filteredContacts();
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmitHandler={this.searchHandler} />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} onChange={this.inputChangeValue} />
        <ContactList list={visibleUsers} onDeleteItem={this.deleteItem} />
      </Container>
    );
  }
}
