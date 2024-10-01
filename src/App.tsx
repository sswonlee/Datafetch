import './reset.css';
import './App.css';

import { useEffect, useState } from 'react';

import Body from './components/body';
import Comments from './components/comments';
import Contents from './components/contents';
import type { body, comment, post } from './components/type';

export function App() {
  const [selectedID, setselectedID] = useState<number>(1);
  const [selectedbody, setselectedbody] = useState<body>();
  const [posts, setposts] = useState<post[]>();
  const [comments, setcomments] = useState<comment[]>();

  const fetchposts = async () => {
    const baseurl = 'https://jsonplaceholder.typicode.com/posts';
    const response = await fetch(baseurl);
    const res_posts = (await response.json()) as post[];
    return res_posts;
  };

  useEffect(() => {
    let ignore = false;
    fetchposts()
      .then((posts_) => {
        if (!ignore) setposts(posts_);
      })
      .catch(() => {
        console.debug('fetching posts failed');
      });
    return () => {
      ignore = true;
    };
  });

  const fetchbody = async (id: number) => {
    const baseurl = 'https://jsonplaceholder.typicode.com/posts/' + String(id);
    const response = await fetch(baseurl);
    const res_body = (await response.json()) as body;
    return res_body;
  };

  useEffect(() => {
    let ignore = false;
    fetchbody(selectedID)
      .then((body) => {
        if (!ignore) setselectedbody(body);
      })
      .catch(() => {
        console.debug('fetching bodys failed');
      });
    return () => {
      ignore = true;
    };
  }, [selectedID]);

  const fetchcomments = async (id: number) => {
    const baseurl =
      'https://jsonplaceholder.typicode.com/posts/' + String(id) + '/comments';
    const response = await fetch(baseurl);
    const res_comments = (await response.json()) as comment[];
    return res_comments;
  };
  useEffect(() => {
    let ignore = false;
    fetchcomments(selectedID)
      .then((comments_) => {
        if (!ignore) setcomments(comments_);
      })
      .catch(() => {
        console.debug('fetching comments failed');
      });
    return () => {
      ignore = true;
    };
  }, [selectedID]);

  return (
    <>
      <div className="container">
        <div className="container2">
          <div className="title">포스트 목록</div>
          <div>
            {posts === undefined ? (
              <div className="loading">loading</div>
            ) : (
              <Contents
                posts={posts}
                selectedID={selectedID}
                setselectedID={setselectedID}
              />
            )}
          </div>
        </div>

        <div className="divideline"></div>
        <div className="container2">
          <div className="title">내용</div>
          <div className="container3">
            {selectedbody === undefined ? (
              <div className="loading">loading</div>
            ) : (
              <Body body={selectedbody} />
            )}
          </div>
          <div className="title">댓글</div>
          <div className="container3">
            {comments === undefined ? (
              <div className="loading">loading</div>
            ) : (
              <Comments comments={comments} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
