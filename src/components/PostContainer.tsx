import React from 'react'
import { IPost } from '../models/IPost'
import { postApi } from '../services/PostService'
import { PostItem } from './PostItem'

export const PostContainer = () => {
    const { data: posts } = postApi.useFetchAllPostsQuery(15)
    const [createPost, {}] = postApi.useCreatePostMutation()
    const [updatePost, {}] = postApi.useUpdatePostMutation()
    const [deletePost, {}] = postApi.useDeletePostMutation()

    const handleCreatePost = async () => {
        const title = prompt()
        await createPost({ title, body: title } as IPost)
    }

    const handleRemove = (post: IPost) => {
        deletePost(post)
    }

    const handleUpdate = (post: IPost) => {
        updatePost(post)
    }
    return (
        <div>
            <div className='posts__list'>
                {posts?.map((post) => (
                    <PostItem
                        remove={handleRemove}
                        update={handleUpdate}
                        post={post}
                        key={post.id}
                    />
                ))}
            </div>
            <div>
                <button onClick={handleCreatePost}>Add new post</button>
            </div>
        </div>
    )
}
