import React, { useState } from "react";
import styled from "styled-components";

// custom imports
import Header from "./components/Header";
import GlobalStyles from "./GlobalStyle";
import GistList from "./components/GistList";

const App = () => {
  const [searchUserName, setSearchUserName] = useState("");

  return (
    <Wrapper className="App" data-testid="app">
      <Header setSearchTerm={setSearchUserName} />
      <GlobalStyles />
      <GistList searchUserName={searchUserName} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;

export default App;
