import React from 'react';
import { connect } from 'react-redux';
import { setSearchTerm } from '../reducers/filterReducer';

const FilterForm = ({ setSearchTerm }) => {
  const handleChange = (e) => {
    e.preventDefault();
    const search = e.target.value;
    setSearchTerm(search);
  };
  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  );
};

export default connect(null, { setSearchTerm })(FilterForm);
