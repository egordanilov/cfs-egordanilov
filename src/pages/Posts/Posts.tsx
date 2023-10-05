import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { fetchPosts } from "../../shared/api/fetchPosts";
import { TypedPostFromAnApi } from "../../shared/api/types";
import Header from "../../widgets/Header/Header";
import PostCard from "../../widgets/PostCard/PostCard";

import {
  PostsPageWrapper,
  PaginationWrapper,
  PaginationButton,
} from "./Posts.styled";

function Posts() {
  const [page, setPage] = useState(0);
  //Find out how many posts we have to know what page is the last one
  const [totalCountOfPosts, setTotalCounfOfPosts] = useState(10);

  //Fixing pagination buttons bug when going back to all posts from a post page
  useEffect(() => {
    if (sessionStorage.getItem("totalAmountOfPosts")) {
      setTotalCounfOfPosts(
        Number(sessionStorage.getItem("totalAmountOfPosts")),
      );
    }

    //keep the current page number in order we go back to all posts from a single post page
    if (sessionStorage.getItem("postsPageNumber")) {
      setPage(Number(sessionStorage.getItem("postsPageNumber")));
    }
  });

  const { isLoading, isError, data, isPreviousData } = useQuery({
    queryKey: ["posts", page],
    queryFn: () => fetchPosts(page, setTotalCounfOfPosts),
    keepPreviousData: true,
  });

  return (
    <PostsPageWrapper>
      <Header />
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error occured</div>
      ) : (
        <>
          {data.map((post: TypedPostFromAnApi) => {
            return (
              <PostCard
                key={post.id}
                id={post.id}
                title={post.title}
                body={post.body}
              />
            );
          })}
        </>
      )}

      <PaginationWrapper>
        <PaginationButton
          disabled={page === 0}
          onClick={() => {
            setPage(0);
            sessionStorage.setItem("postsPageNumber", "0");
          }}
        >
          First
        </PaginationButton>
        <PaginationButton
          onClick={() => {
            sessionStorage.setItem("postsPageNumber", (page - 1).toString());
            setPage((old) => Math.max(old - 1, 0));
          }}
          disabled={page === 0}
        >
          Prev
        </PaginationButton>{" "}
        <span>Current: {page + 1}</span>
        <PaginationButton
          onClick={() => {
            if (!isPreviousData) {
              sessionStorage.setItem("postsPageNumber", (page + 1).toString());
              setPage((old) => old + 1);
            }
          }}
          // Disable the Next Page button until we know a next page is available
          disabled={page * 10 >= totalCountOfPosts - 10}
        >
          Next
        </PaginationButton>
        <PaginationButton
          onClick={() => {
            sessionStorage.setItem(
              "postsPageNumber",
              (totalCountOfPosts / 10 - 1).toString(),
            );
            setPage(totalCountOfPosts / 10 - 1);
          }}
          // Disable the Next Page button until we know a next page is available
          disabled={page * 10 >= totalCountOfPosts - 10}
        >
          Last
        </PaginationButton>
      </PaginationWrapper>
    </PostsPageWrapper>
  );
}

export default Posts;
