import type React from 'react';

import type { post } from './type';

const Content = ({
  id,
  contenttitle,
}: {
  id: number;
  contenttitle: string;
}) => {
  return (
    <div className="content">
      <span style={{ fontWeight: 'bold', fontSize: '25px' }}>{id}. </span>
      <span style={{ fontSize: '18px', marginLeft: '3px', marginTop: '5px' }}>
        {contenttitle}
      </span>
    </div>
  );
};
const Contents = ({
  posts,
  selectedID,
  setselectedID,
}: {
  posts: post[];
  selectedID: number;
  setselectedID: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const selectedPost = posts.find((p) => p.id === selectedID) ?? posts.at(0);
  const Id = !(selectedPost == null) ? selectedPost.id : null;

  return (
    <div className="container4">
      {selectedPost == null ? (
        <div className="loading">loading</div>
      ) : (
        posts.map((post) => {
          const select = post.id === Id ? 'button selected' : 'button';
          const buttonkey = 'button' + String(post.id);
          return (
            <button
              key={buttonkey}
              className={select}
              onClick={() => {
                setselectedID(post.id);
              }}
            >
              <Content id={post.id} contenttitle={post.title} />
            </button>
          );
        })
      )}
    </div>
  );
};
export default Contents;
