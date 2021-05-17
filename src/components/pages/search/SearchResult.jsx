import React from 'react';

const SearchResult = (props) => {
  const { searchResult, heading } = props;
// console.log(searchResult); 
  return (
    <div>
      {/* <h5 style={{ textAlign: 'left' }}>{heading}</h5> */}
      <p style={{ textAlign: 'left' }}>{searchResult}</p>
    </div>
  );
};

export default SearchResult;
