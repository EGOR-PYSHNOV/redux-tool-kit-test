import React from 'react'
import { IPost } from '../models/IPost'

interface IPostItem {
    post: IPost
    remove: (post: IPost) => void
    update: (post: IPost) => void
}

export const PostItem: React.FC<IPostItem> = ({ post, remove, update }) => {
    const handleRemove = (event: React.MouseEvent) => {
        event.stopPropagation()
        remove(post)
    }

    const handleUpdate = (event: React.MouseEvent) => {
        const title = prompt() || ''
        update({ ...post, title })
    }
    return (
        <div className='post' onClick={handleUpdate}>
            {post.id}. {post.title}
            <div>
                <button onClick={handleRemove}>Delete</button>
            </div>
        </div>
    )
}
