export type post = { userid: number; id: number; title: string; body: string };
export type body = { userid: number; id: number; title: string; body: string };
export type comment = {
  postid: number;
  id: number;
  name: string;
  email: string;
  body: string;
};
