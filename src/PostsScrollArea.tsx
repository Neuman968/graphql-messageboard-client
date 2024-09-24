
import { graphql } from '../src/gql'
import { useQuery } from '@apollo/client'
import PostView from './PostView'


const getPostsQuery = graphql(`
query getPosts ($limit: Int!) {
  getPosts {
      ...PostFragment
  }
}
`)


function PostsScollArea() {
    const { data } = useQuery(getPostsQuery, { variables: { limit: 10 } })


    return <div>
        {data?.getPosts != null ?
            data?.getPosts.map((post) => <PostView post={post} />)
            : <></>}
    </div>
}

export default PostsScollArea;