import type { comment } from './type';

const Comment = ({ email, body }: { email: string; body: string }) => {
  return (
    <div className="content2">
      <div style={{ fontWeight: 'bold', fontSize: '25px' }}>
        작성자: {email}
      </div>
      <div style={{ fontSize: '18px' }}>{body}</div>
    </div>
  );
};
const Comments = ({ comments }: { comments: comment[] }) => {
  return (
    <>
      {comments.map((comment, idx) => (
        <Comment key={200 + idx} email={comment.email} body={comment.body} />
      ))}
    </>
  );
};
export default Comments;
