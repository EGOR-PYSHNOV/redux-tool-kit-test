import React from 'react'
import { postApi } from '../services/PostService'
import { PostItem } from './PostItem'

export const PostContainer = () => {
    const { data: posts } = postApi.useFetchAllPostsQuery(5)
    return (
        <div>
            <div className='posts__list'>
                {posts?.map((post) => (
                    <PostItem post={post} key={post.id} />
                ))}
            </div>
        </div>
    )
}
