import PropTypes from 'prop-types';

import './Field.scss';

function Field({
    value,
    type,
    name,
    placeholder,
    onChange,
  }) {
    const handleChange = (event) => {
        if (isNaN(event.target.value) === true) {
            return;
        };
        console.log(event.target.value);
      onChange(event.target.value, name);
    };
  
    const inputId = `Field-${name}`;
  
    return (
      <div className='Field'>         
          <label
          htmlFor={inputId}
          className="Field-label"
        >
          {placeholder}
        </label>
        <input
          required
          value={value}
          onChange={handleChange}
          id={inputId}
          type={type}
          className="Field-input"
          placeholder={placeholder}
          name={name}
        />
      </div>
    );
  }
  
  Field.propTypes = {
    value: PropTypes.number,
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };
  
  // Valeurs par défaut pour les props
  Field.defaultProps = {
    value: 0,
    type: 'text',
  };
  
  // == Export
  export default Field;