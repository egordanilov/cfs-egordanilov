import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { searchPosts } from "../../shared/api/searchPosts";
import { TypedPostFromAnApi } from "../../shared/api/types";
import Header from "../../widgets/Header/Header";
import PostCard from "../../widgets/PostCard/PostCard";
import { SearchInput, SearchPageWrapper, SearchButton } from "./Search.styled";

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [enabled, setEnabled] = useState(false);

  //There is currently a bug when you have searched already, but when you change the input value, it start fetching on every tap
  const { isLoading, isError, data } = useQuery({
    queryKey: ["search", searchValue],
    enabled: enabled && searchValue !== "",
    queryFn: () => searchPosts(searchValue),
  });

  return (
    <SearchPageWrapper>
      <Header />

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setEnabled(true);
        }}
      >
        <SearchInput
          value={searchValue}
          placeholder="dolor"
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
        <SearchButton
          type="submit"
          onClick={() => {
            setEnabled(true);
          }}
        >
          Search
        </SearchButton>
      </form>

      {isLoading ? (
        <></>
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
    </SearchPageWrapper>
  );
}

export default Search;
