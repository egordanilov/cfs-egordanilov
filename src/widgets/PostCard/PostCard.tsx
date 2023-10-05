import { Link } from "react-router-dom";
import { PostCardWrapper } from "./PostCard.styled";

function PostCard({
  id,
  title,
  body,
}: {
  id: number;
  title: string;
  body: string;
}) {
  return (
    <PostCardWrapper key={id}>
      <h2>
        <Link to={`/${id}`}>{title}</Link>
      </h2>
      <p>{body}</p>
    </PostCardWrapper>
  );
}

export default PostCard;
