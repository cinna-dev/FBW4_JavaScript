import React from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import ImageResults from '../image-results/ImageResults';

const Search = ({
  searchText,
  amount,
  images,
  onTextChange,
  onAmountChange
}) => {
  return (
    <div>
      <TextField
        name='searchText'
        value={searchText}
        onChange={onTextChange}
        floatingLabelText='Search For Image'
        fullWidth='true'
      />
      <br />
      <SelectField
        name='amount'
        floatingLabelText='Amount'
        value={amount}
        onChange={onAmountChange}
      >
        <MenuItem value={5} primaryText='5' />
        <MenuItem value={10} primaryText='10' />
        <MenuItem value={15} primaryText='15' />
        <MenuItem value={30} primaryText='30' />
        <MenuItem value={50} primaryText='50' />
      </SelectField>
      <br />
      {images.length > 0 ? <ImageResults images={images} /> : null}
    </div>
  );
};

export default Search;
