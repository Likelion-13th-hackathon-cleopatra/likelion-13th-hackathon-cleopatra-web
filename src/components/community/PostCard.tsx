import React from 'react';
import ProfilePlaceholder from '../../assets/icons/profile-placeholder.svg?react';
import CommentIcon from '../../assets/community/comment.svg?react';
import HeartIcon from '../../assets/community/heart.svg?react';
import ScrabIcon from '../../assets/community/scrab.svg?react';


// Define a type for the post prop for better type safety
type Post = {
  id: number;
  title: string;
  author: string;
  badge: string;
  preview?: string; // Optional for feed posts
  body?: string;    // Optional for hot posts
  likes: number;
  comments: number;
  views: number;
  time?: string;    // Optional for hot posts
};

type PostCardProps = {
  post: Post;
  type: 'hot' | 'feed';
};

export default function PostCard({ post, type }: PostCardProps) {
  const articleClassName = type === 'hot'
    ? 'w-[200px] h-[130px] rounded-[10px] shadow-md p-[14px] bg-white flex flex-col shrink-0'
    : 'h-[130px] rounded-[10px] shadow-md p-[14px] bg-white flex flex-col';

  return (
    <article className={articleClassName}>
      <div className="flex items-center gap-2">
        <ProfilePlaceholder width={17.78} height={17.78} />
        <span className="Body_Regular_10 text-primary-green40">
          {post.author} • {post.badge}
        </span>
      </div>
      <h3 className="mt-[6px] Sub_Bold_12 text-grayscale-65 line-clamp-1">
        {post.title}
      </h3>
      <p className="mt-[4px] font-pretendard text-[11.8px] leading-[18px] tracking-[-0.03em] font-normal text-grayscale-45 line-clamp-2">
        {type === 'hot' ? post.preview : post.body}
      </p>
      <div className="mt-auto flex items-center gap-1.5 pt-[6px]">
        <div className="flex items-center gap-1.5">
          <div className="inline-flex items-center gap-1">
            <CommentIcon className="h-3 w-3" />
            <span className="text-grayscale-45 Sub_Bold_10">{post.comments}</span>
          </div>
          <div className="inline-flex items-center gap-1">
            <HeartIcon className="h-3 w-3" />
            <span className="text-primary-green Sub_Bold_10">{post.likes}</span>
          </div>
          <div className="inline-flex items-center gap-1">
            <ScrabIcon className="h-3 w-3" />
            <span className="text-sub-yellow Sub_Bold_10">{post.views}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
