import React from "react";
import styled from "styled-components";
import Octicon from "react-octicon";
import GistHeader, { Link } from "./GistHeader";
const Gist = ({ gist }) => {
  const { owner: gist_owner } = gist;
  const {
    description = "",
    created_at,
    updated_at,
    files = {},
    comments = 0,
    forks_url,
    comments_url,
    html_url = "#",
  } = gist;

  const fileNames = Object.keys(files);

  return (
    <>
      <GistHeader
        gist_owner={gist_owner}
        gist_meta={{
          created_at,
          updated_at,
          files,
          comments,
          comments_url,
          forks_url,
          html_url,
        }}
      />
      <GistDescription>{description}</GistDescription>
      <GistFiles>
        {fileNames.map((f) => {
          return (
            <Link href={files[f].raw_url} target="new" key={f}>
              <Octicon name="file">{f}</Octicon>
            </Link>
          );
        })}
      </GistFiles>
      <Separator />
    </>
  );
};

export default Gist;

const GistDescription = styled.p`
  padding-left: 15px;
  width: 100%;
  font-size: 17px;
`;

const GistFiles = styled.div`
  display: inline-block;
  color: #0366d6;
  width: 100%;
  margin-left: 20px;
  margin-bottom: 20px;
  & > a {
    margin-right: 15px;
    padding: 5px;
  }
`;
const Separator = styled.hr`
  border;0.5px solid lightgray;
`;
