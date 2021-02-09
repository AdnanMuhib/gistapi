import React from "react";

import GistHeader from "./GistHeader";

const Gist = ({ gist }) => {
  const { owner: gist_owner } = gist;
  const {
    created_at,
    updated_at,
    files = {},
    comments = 0,
    forks_url,
    comments_url,
  } = gist;
  return (
    <div className="gist-wrapper">
      <GistHeader
        gist_owner={gist_owner}
        gist_meta={{
          created_at,
          updated_at,
          files,
          comments,
          comments_url,
          forks_url,
        }}
      />
    </div>
  );
};

export default Gist;
