import React from 'react'
import { IPost } from '../models/IPost'

interface IPostItem {
    post: IPost
}

export const PostItem: React.FC<IPostItem> = ({ post }) => {
    return (
        <div className='post'>
            {post.id}. {post.title}
            <div>
                <button>Delete</button>
            </div>
        </div>
    )
}
