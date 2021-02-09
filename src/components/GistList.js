import React, { useEffect, useState } from "react";
import { getPublicGists } from "../services/gistService";
import Gist from "./Gist";
import styled from "styled-components";

const GistList = () => {
  const [gists, setGists] = useState([]);

  useEffect(() => {
    getPublicGists()
      .then((response) => {
        setGists(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);

  return (
    <GistListWrapper>
      {gists.map((gist) => {
        return <Gist key={gist.id} gist={gist} />;
      })}
    </GistListWrapper>
  );
};

const GistListWrapper = styled.div`
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 768px) {
    width: 100%;
    padding: 20px;
  }
`;
export default GistList;
