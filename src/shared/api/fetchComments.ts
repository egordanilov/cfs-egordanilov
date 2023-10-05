export function fetchComments(id: number) {
  const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
  return fetch(url).then((res) => res.json());
}
