import { Component } from 'react';
import css from './App.module.css';

import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  handleSubmit = (id, name, number) => {
    const normalizeName = name.toLowerCase();
    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === normalizeName
      )
    ) {
      alert('This name allready added');
      return;
    }
    this.setState(({ contacts }) => ({
      contacts: [{ id, name, number }, ...contacts],
    }));
  };

  handleDelete = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
  };

  componentDidMount() {
    // Добавляет массив контактов в localStorage для проверки работы приложения
    // const contacts = [
    //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    // ];

    // if (!localStorage.getItem('contacts')) {
    //   localStorage.setItem('contacts', JSON.stringify(contacts));
    // }
    //==============================================================

    if (localStorage.getItem('contacts')) {
      this.setState({ contacts: JSON.parse(localStorage.getItem('contacts')) });
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    return (
      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmit} />
        <h2 className={css.title}>Contacts</h2>
        <Filter onChange={this.handleChange} filter={this.state.filter} />
        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
          onDeleteContact={this.handleDelete}
        />
      </div>
    );
  }
}
