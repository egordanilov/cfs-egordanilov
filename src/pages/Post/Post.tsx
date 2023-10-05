import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { fetchComments } from "../../shared/api/fetchComments";
import { fetchPost } from "../../shared/api/fetchPost";
import { TypedCommentFromAnApi } from "../../shared/api/types";
import { Comment } from "../../widgets/Comment/Comment";
import Header from "../../widgets/Header/Header";

import { PostGoBackLink, PostWrapper } from "./Post.styled";

function Post() {
  const { postId } = useParams();

  //Post Query
  const postQuery = useQuery({
    queryKey: ["posts", postId],
    queryFn: () => fetchPost(Number(postId)),
  });

  //
  const commentsQuery = useQuery({
    queryKey: ["comments", { postId: postId }],
    enabled: postQuery?.data?.title != null,
    queryFn: () => fetchComments(Number(postId)),
  });

  if (postQuery.isLoading) return "Loading...";
  if (postQuery.isError) return "Error occured while loading a post";

  let comments = [];
  if (commentsQuery.data) {
    comments = commentsQuery.data.map((comment: TypedCommentFromAnApi) => {
      return (
        <Comment
          key={`${comment.name} ${comment.email} ${comment.body}`}
          name={comment.name}
          email={comment.email}
          body={comment.body}
        />
      );
    });
  }

  return (
    <>
      <Header />

      <PostWrapper>
        <PostGoBackLink>
          <Link to={"/"}>Go back to all posts</Link>
        </PostGoBackLink>
        <h1>{postQuery.data.title}</h1>
        <p>{postQuery.data.body}</p>
        <br />
        <br />
        <hr />
        {commentsQuery.isLoading ? "Comments are loading" : <h2>Comments</h2>}
        {comments.length > 0 && !commentsQuery.isLoading
          ? comments
          : "No comments to display"}
      </PostWrapper>
    </>
  );
}

export default Post;
