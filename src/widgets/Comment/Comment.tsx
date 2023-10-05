import { CommentBody, CommentHeader, CommentWrapper } from "./Comment.styled";

type CommentProps = {
  name: string;
  email: string;
  body: string;
};

export function Comment({ name, email, body }: CommentProps) {
  return (
    <CommentWrapper>
      <CommentHeader>
        <h4>{name}</h4>
        <h6>{email}</h6>
      </CommentHeader>

      <CommentBody>{body}</CommentBody>
    </CommentWrapper>
  );
}
