import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Octicon from "react-octicon";
// Custom imports
import Search from "./Search";

function Header({ setSearchTerm }) {
  return (
    <Wrapper>
      <Octicon name="mark-github" mega />
      <Search onSearchChange={setSearchTerm} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #24292e;
  color: #ffffff;
  z-index: 32;
  padding: 16px;
  font-size: 14px;
  line-height: 1.5;
  display: flex;
  align-items: center;
`;

// param type checking
Header.propTypes = {
  setSearchTerm: PropTypes.func.isRequired,
};
export default Header;
