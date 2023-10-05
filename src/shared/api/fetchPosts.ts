export const fetchPosts = (page = 0, setTotalCounfOfPosts: Function) =>
  fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${page + 1}&_limit=10`,
  ).then((res) => {
    if (res.headers.get("X-Total-Count")) {
      setTotalCounfOfPosts(Number(res.headers.get("X-Total-Count")));
      sessionStorage.setItem(
        "totalAmountOfPosts",
        res.headers.get("X-Total-Count")!.toString(),
      );
    }
    return res.json();
  });
