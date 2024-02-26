"use client"

import React, { useState } from "react"
import BlogBlockItem from "./components/BlogBlockItem/BlogBlockItem"
import { decrement, increment, reset } from "@/redux/features/counterSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"

const BlogBlock = ({ posts }: { posts: any }) => {
  const [blogPosts] = useState(posts)

  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <>
      <div style={{ marginBottom: "4rem", textAlign: "center" }}>
        <h4 style={{ marginBottom: 16 }}>{count}</h4>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button
          onClick={() => dispatch(decrement())}
          style={{ marginInline: 16 }}
        >
          decrement
        </button>
        <button onClick={() => dispatch(reset())}>reset</button>
      </div>
      <ul>
        {blogPosts.map((post: any) => (
          <BlogBlockItem
            post={post}
            key={`posts-list-${post.id}`}
          ></BlogBlockItem>
        ))}
      </ul>
    </>
  )
}

export default BlogBlock
