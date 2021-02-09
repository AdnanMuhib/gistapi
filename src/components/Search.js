import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Octicon from "react-octicon";

const ENTER_BUTTON_CODE = 13;
const ENTER_BUTTON = "Enter";

const Search = ({ onSearchChange }) => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <Wrapper>
      <InputBox>
        <Octicon name="search" />
        <Input
          placeholder="Search Gists for the username"
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyUp={(e) => {
            // for fallback support of keycode
            const key = e.key || e.keyCode;
            if (key === ENTER_BUTTON_CODE || key === ENTER_BUTTON) {
              onSearchChange(e.target.value);
            }
            if (!e.target.value) {
              onSearchChange(e.target.value);
            }
          }}
          value={searchTerm}
        />
      </InputBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 8px;
  background-color: #ffffff;
  font-size: 14px;
  line-height: 1.5;
  border-radius: 6px;
  margin: 0 16px;
`;

const InputBox = styled.div`
  border-radius: 4px;
  display: flex;
  width: 400px;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  font-size: 16px;

  &:focus {
    outline: 0;
  }
`;
Search.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
};
export default Search;
