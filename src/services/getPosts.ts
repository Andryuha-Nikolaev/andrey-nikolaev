const GET_POSTS_REVALIDATE = 5

export const getAllPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    // const response = await fetch("http://localhost:3300/posts", {
    // next: {
    //   revalidate: 0,
    // },
    cache: "no-cache",
  })

  if (!response.ok) throw new Error("Unable to fetch posts.")
  return response.json()
}

export const getPostById = async (id: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: {
        revalidate: GET_POSTS_REVALIDATE,
      },
    }
  )
  if (!response.ok) throw new Error("Unable to fetch posts.")
  return response.json()
}

// Range
// start
// end
// limit
// GET /posts?_start=10&_end=20
// GET /posts?_start=10&_limit=10
// Paginate
// page
// per_page (default = 10)
// GET /posts?_page=1&_per_page=25
// Sort
// _sort=f1,f2
// GET /posts?_sort=id,-views

export const getPostsBySearch = async (search: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?q=${search}`,
    {
      next: {
        revalidate: GET_POSTS_REVALIDATE,
      },
    }
  )

  if (!response.ok) throw new Error("Unable to fetch posts.")

  return response.json()
}
