import React, { Component } from 'react';
import { Form } from './ContactForm.styled';
import PropTypes from 'prop-types';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  // componentDidMount  - local storage m3 l1 1:09
  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem();
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.length !== this.state.length) {
  //     return console.log('different');
  //   }
  //   return console.log('same');
  // }

  inputChangeValue = e => {
    const newUsername = e.target.value;
    const key = e.target.name;
    return this.setState({ [key]: newUsername });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('cntForm', this.state);
    // localStorage.setItem(key, JSON.stringify(e.target.number.value));
    if (this.props.onSubmitHandler(this.state)) {
      this.setState({ name: '', number: '' });
    }
  };

  render() {
    const { name, number } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <label htmlFor="inputName">Name</label>
        <input
          type="text"
          name="name"
          value={name}
          id="inputName"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.inputChangeValue}
        />
        <label htmlFor="inputNumber">Number</label>
        <input
          type="tel"
          name="number"
          value={number}
          id="inputNumber"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.inputChangeValue}
        />
        <button type="submit">Add contact</button>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  onAlert: PropTypes.func,
};
