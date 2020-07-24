import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../reducers/filterReducer';

const FilterForm = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    const search = e.target.value;
    console.log(search);
    dispatch(setSearchTerm(search));
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

export default FilterForm;
