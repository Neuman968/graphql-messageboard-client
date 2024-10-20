
import { graphql } from './gql'
import { useQuery } from '@apollo/client'
import PostView from './PostView'
import { Box, Paper } from '@mantine/core'


export const getPostsQuery = graphql(`
query getPosts ($limit: Int!) {
  getPosts {
      ...PostFragment
  }
}
`)


function PostsList() {
    const { data } = useQuery(getPostsQuery, { variables: { limit: 10 } })

    return <Paper>
        {data?.getPosts != null ?
            data?.getPosts.map((post) =>
                <Box pt={30}>
                    <PostView post={post} />
                </Box>
            )
            : <></>}
    </Paper>
}

export default PostsList;