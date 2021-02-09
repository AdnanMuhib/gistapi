import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// custom imports
import { getPublicGists, getGistForUser } from "../services/gistService";
import Gist from "./Gist";

const GistList = ({ searchUserName }) => {
  const [gists, setGists] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    // Clear Error Before the API Call
    setErrorMsg("");
    // when trying to search the gists by User Name
    if (searchUserName) {
      getGistForUser(searchUserName)
        .then((response) => {
          setGists(response.data);
          // if there are no gists then throw Error
          if (response.data.length < 1) {
            throw new Error(`No Gists Found for ${searchUserName}`);
          }
        })
        .catch((err) => {
          // Set the Error Message in case of API call fails
          // or there are no gists
          setErrorMsg(err.message);
        });

      // when not searching by username
    } else {
      getPublicGists()
        .then((response) => {
          setGists(response.data);
        })
        .catch((err) => {
          setErrorMsg(err.message);
        });
    }
  }, [searchUserName]);

  return (
    <Wrapper>
      {!errorMsg ? (
        gists.map((gist) => {
          return <Gist key={gist.id} gist={gist} />;
        })
      ) : (
        <ErrorMessage>{errorMsg}</ErrorMessage>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 768px) {
    width: 100%;
    padding: 20px;
  }
`;
const ErrorMessage = styled.div`
  text-align: center;
  color: red;
  font-size: xx-large;
  margin: auto;
`;
// Prop Param Type Checking
GistList.propTypes = {
  searchUserName: PropTypes.string,
};

export default GistList;
