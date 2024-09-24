
import { graphql } from './gql'
import { useQuery } from '@apollo/client'
import PostView from './PostView'


const getPostsQuery = graphql(`
query getPosts ($limit: Int!) {
  getPosts {
      ...PostFragment
  }
}
`)


function PostsList() {
    const { data } = useQuery(getPostsQuery, { variables: { limit: 10 } })


    return <div>
        {data?.getPosts != null ?
            data?.getPosts.map((post) => <PostView post={post} />)
            : <></>}
    </div>
}

export default PostsList;