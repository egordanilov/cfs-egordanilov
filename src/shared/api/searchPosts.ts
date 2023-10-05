export function searchPosts(query: string) {
  return fetch(`https://jsonplaceholder.typicode.com/posts?q=${query}`).then(
    (res) => res.json(),
  );
}
