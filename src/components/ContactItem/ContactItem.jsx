import PropTypes from 'prop-types';
import css from './ContactItem.module.css';

import { IoMdPerson } from 'react-icons/io';
import { FaPhone, FaTrashAlt } from 'react-icons/fa';

const ContactItem = ({ id, name, number, onDeleteContact }) => (
  <>
    <li className={css.item}>
      <IoMdPerson /> {name}: <FaPhone /> {number}
      <button type="button" onClick={() => onDeleteContact(id)}>
        <FaTrashAlt />
      </button>
    </li>
  </>
);

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
