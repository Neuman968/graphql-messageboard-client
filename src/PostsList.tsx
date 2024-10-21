
import { graphql } from './gql'
import { useQuery } from '@apollo/client'
import PostView from './PostView'
import { Box, Paper } from '@mantine/core'


export const postsQuery = graphql(`
    query Posts ($limit: Int!) {
        posts {
            ...PostFragment
        }
    }
`)


function PostsList() {
    const { data } = useQuery(postsQuery, { variables: { limit: 10 } })

    return <Paper>
        {data?.posts!= null ?
            data?.posts.map((post) =>
                <Box pt={30}>
                    <PostView post={post} />
                </Box>
            )
            : <></>}
    </Paper>
}

export default PostsList;