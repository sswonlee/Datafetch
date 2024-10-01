import type { body } from './type';

const Body = ({ body }: { body: body }) => {
  return (
    <div className="content2">
      <div style={{ fontSize: '18px' }}>{body.body}</div>
    </div>
  );
};
export default Body;
