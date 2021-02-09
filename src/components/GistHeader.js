import React from "react";
import styled from "styled-components";
import Octicon from "react-octicon";

const default_avatar_url =
  "https://avatars.githubusercontent.com/u/42755256?s=60&v=4";

const GistHeader = ({ gist_owner, gist_meta }) => {
  const { avatar_url = default_avatar_url, login: user_name } = gist_owner;
  const files = Object.keys(gist_meta.files);
  const created_at = new Date(gist_meta.created_at).toLocaleDateString("en-US");
  const updated_at = new Date(gist_meta.updated_at).toLocaleDateString("en-US");
  return (
    <>
      <GistWrapper>
        <GistLeftMeta>
          <UserImage src={avatar_url} alt="avatar" />
          <UserName>{user_name}</UserName>
        </GistLeftMeta>
        <GistRightMeta>
          <Octicon name="code">
            {files.length} {files.length <= 1 ? "File " : "Files"}
          </Octicon>
          <Octicon name="repo-forked"> Forks</Octicon>
          <Octicon name="comment"> {gist_meta.comments} Comments</Octicon>
          <Octicon name="star"> Stars</Octicon>
        </GistRightMeta>
      </GistWrapper>
      <GistWrapper>
        <span>
          Created at: {created_at} &nbsp; Last updated: {updated_at}
        </span>
      </GistWrapper>
    </>
  );
};

const UserImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

const UserName = styled.div`
  margin-left: 10px;
  cursor: pointer;
`;

const GistMeta = styled.div`
  color: #0366d6;
  display: flex;
  padding: 10px;
  align-items: center;
`;
const GistLeftMeta = styled(GistMeta)`
  float: left;
  width: 50%;
  @media (max-width: 768px) {
    display: block;
    width: 100%;
  }
`;

const GistRightMeta = styled(GistMeta)`
  float: right;
  width: 50%;
  & > span {
    margin-right: 10px;
  }
  @media (max-width: 768px) {
    float: left;
    margin: 10px;
    width: 100%;
  }
`;
const GistWrapper = styled.div`
  display: flow-root;
  width: 100%;
  @media (max-width: 768px) {
    display: block;
  }
  & > span {
    padding-left: 15px;
    width: 100%;
    float: left;
  }
`;
export default GistHeader;
