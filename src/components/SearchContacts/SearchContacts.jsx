import PropTypes from 'prop-types';
// import styles from './SearchContacts.module.css';

const SearchContacts = ({ value, onChange }) => {
  return (
    <label>
      Find contacts by name
      <input className="input" name="filter" type="text" value={value} onChange={onChange} />
    </label>
  );
};

SearchContacts.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchContacts;
