import { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

import { IoMdPerson, IoMdPersonAdd } from 'react-icons/io';
import { FaPhone } from 'react-icons/fa';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  inputNameId = nanoid();
  inputNumberId = nanoid();

  reset() {
    this.setState({
      name: '',
      number: '',
    });
  }

  handleChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const id = nanoid();
    const name = this.state.name;
    const number = this.state.number;

    this.props.onSubmit(id, name, number);
    this.reset();
  };

  render() {
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <label className={css.label} htmlFor={this.inputId}>
          <p className={css.labelTitle}>Name</p>
          <IoMdPerson className={css.icon} />
          <input
            id={this.inputId}
            className={css.input}
            type="text"
            value={this.state.name}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
          />
        </label>
        <label className={css.label} htmlFor={this.inputNumberId}>
          <p className={css.labelTitle}>Number</p>
          <FaPhone className={css.icon} />
          <input
            id={this.inputNumberId}
            className={css.input}
            type="tel"
            value={this.state.number}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
          />
        </label>

        <button className={css.button} type="submit">
          <IoMdPersonAdd className={css.buttonIcon} size={16} />
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
