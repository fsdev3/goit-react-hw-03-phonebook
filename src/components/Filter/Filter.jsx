import React, { Component } from 'react';
import { FilterDiv } from './Filter.styled';
import PropTypes from 'prop-types';

export class Filter extends Component {
  render() {
    const { filter, onChange } = this.props;
    return (
      <FilterDiv>
        <label>Find contact by Name: </label>
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={onChange}
        ></input>
      </FilterDiv>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
};
