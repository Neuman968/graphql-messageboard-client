
import { graphql } from '../src/gql'
import { useQuery } from '@apollo/client'
import PostView from './PostView'
import { ScrollArea } from '@mantine/core'


const getPostsQuery = graphql(`
query getPosts ($limit: Int!) {
  getPosts {
      ...PostFragment
  }
}
`)


function PostsScollArea() {
    const { data } = useQuery(getPostsQuery, { variables: { limit: 10 } })


    return <ScrollArea>
        {data?.getPosts != null ?
            data?.getPosts.map((post) => <PostView post={post} />)
            : <></>}
    </ScrollArea>
}

export default PostsScollArea;