export type TypedPostFromAnApi = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export type TypedCommentFromAnApi = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};
