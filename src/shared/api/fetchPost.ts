export function fetchPost(id: number) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) =>
    res.json(),
  );
}
