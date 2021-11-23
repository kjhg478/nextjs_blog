import PostPreview from '../types/PostPreview';
import ListingItem from './Listing/ListingItem';


interface PostListingProps {
    posts: PostPreview[];
}

const PostListing: React.FC<PostListingProps> = ({ posts }) => {
    return (
        <div>
            {posts.map(post => (
                <ListingItem key={post.slug} post={post} />
            ))}
        </div>
    )
}

export default PostListing;