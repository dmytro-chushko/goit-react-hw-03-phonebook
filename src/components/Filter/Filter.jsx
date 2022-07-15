import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

import { IoIosSearch } from 'react-icons/io';

const Filter = ({ onChange, filter }) => {
  const inputFilterId = nanoid();

  return (
    <>
      <label className={css.labelTitle} htmlFor={inputFilterId}>
        <p className={css.labelTitle}>Find contacts by name</p>
        <input
          id={inputFilterId}
          className={css.input}
          type="text"
          value={filter}
          name="filter"
          onChange={onChange}
        />
        <IoIosSearch className={css.searchIcon} />
      </label>
    </>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default Filter;
