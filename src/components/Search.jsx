import React from 'react';
import { useState, useEffect } from 'react';
import {
  apiTest2,
  getLocations,
  getMetaData,
  getPropertiesDetails,
  getPropertiesList,
  getPropertiesPhotos,
} from '../lib/api';
import SearchResult from './SearchResult';
// import { apiTest } from '../lib/api';
var unirest = require('unirest');

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [cities, setCities] = useState('');
  const [hotels, setHotels] = useState('');
  const [landmarks, setLandmarks] = useState('');
  const [transport, setTransport] = useState('');

  useEffect(() => {
    // getLocations();
    // getMetaData();
    // getPropertiesList();
    // getPropertiesDetails();
    getPropertiesPhotos();
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    unirest
      .get('https://hotels4.p.rapidapi.com/locations/search')
      .query({
        query: searchQuery,
        locale: 'en_US',
      })
      .headers({
        'x-rapidapi-key': '58ae950b1bmsh14bcee45d107fe4p1b83e7jsne1cab43a1126',
        'x-rapidapi-host': 'hotels4.p.rapidapi.com',
        useQueryString: true,
      })
      .end(function (result) {
        console.log(result);
        console.log({ city: result.body.suggestions[0].entities });
        console.log({ hotel: result.body.suggestions[1].entities });
        console.log({
          landmark: result.body.suggestions[2].entities,
        });
        console.log({
          transport: result.body.suggestions[3].entities,
        });
        setCities(
          JSON.stringify({ city: result.body.suggestions[0].entities })
        );
        setHotels(
          JSON.stringify({ hotel: result.body.suggestions[1].entities })
        );
        setLandmarks(
          JSON.stringify({
            landmark: result.body.suggestions[2].entities,
          })
        );
        setTransport(
          JSON.stringify({
            transport: result.body.suggestions[3].entities,
          })
        );
      });
  };
  //   try {

  //     const data = await apiTest(searchQuery);
  //     console.log(data);
  //     console.log(data.request.response);
  //     console.log(data.response.body);
  //     console.log(data.response.body.suggestions);
  //     setSearchPerformed(true);
  //     setSearchResult(data.response.body.suggestions);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <form onSubmit={(event) => onSubmit(event)}>
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Place:
          </label>
          <div className="col-sm-10">
            <input
              type="name"
              className="form-control"
              id="name"
              onChange={(event) => handleChange(event)}
            />
          </div>
        </div>

        {/* <fieldset className="row mb-3">
          <legend className="col-form-label col-sm-2 pt-0">Type</legend>
          <div className="col-sm-10">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gridradios"
                id="option1"
                value="option1"
                onChange={(event) => handleChange(event)}
              />
              <label className="form-check-label" htmlFor="gridRadios1">
                Option1
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gridradios"
                id="option2"
                value="option2"
                onChange={(event) => handleChange(event)}
              />
              <label className="form-check-label" htmlFor="gridRadios2">
                Dog
              </label>
            </div>
          </div>
        </fieldset> */}

        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
      <br></br>
      {cities && <SearchResult searchResult={cities} heading={'Cities'} />}
      {hotels && <SearchResult searchResult={hotels} heading={'Hotels'} />}
      {landmarks && (
        <SearchResult searchResult={landmarks} heading={'Landmarks'} />
      )}
      {transport && (
        <SearchResult searchResult={transport} heading={'Transport'} />
      )}
    </>
  );
};

export default Search;
