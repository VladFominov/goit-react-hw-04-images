import React, { useState} from 'react';
import PropTypes from 'prop-types';

import { Searchbar } from './Searchbar.styled';
// state = {
//     imageName: '',
//   };
export const SearchbarForm = ({onSelectImage}) => {
  
  const [imageName, setImageName] = useState('');


  // onChange = e => {
  //   const { value } = e.target;
  //   this.setState({ imageName: value });
  // };

   
  const onChange = e => {
    const { value } = e.target;
    setImageName(value);
  };

  const onSubmit = e => {
    e.preventDefault();
    setImageName('');
    if (!imageName.length) return;
  onSelectImage(imageName);
    // setImageName(() => onSelectImage);
  };

    return (
      <Searchbar>
        <form className="form" onSubmit={onSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            value={imageName}
            type="text"
            name="imageName"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onInput={onChange}
          />
        </form>
      </Searchbar>
    );
  }


// export default SearchbarForm;

SearchbarForm.propTypes = {
  imageName: PropTypes.string,
};
