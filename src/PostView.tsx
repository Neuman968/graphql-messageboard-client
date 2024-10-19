import { FragmentType, useFragment } from './gql'
import { graphql } from '../src/gql'
import { Card, Paper, Center, Title, Box } from '@mantine/core'
import { Comment } from './Comment';
import UserAvatar from './UserAvatar';
import AddComment from './AddComment';


export const PostFragment = graphql(/* GraphQL */ `
    fragment PostFragment on Post {
      id
      text
      authorUser {
        id
        name
      }
      comments(limit: $limit) {
        id
        text
        authorUser {
          id
          name
        }
      }
    }
  `)

export const UserFragment = graphql(`
  fragment UserFragment on User {
    id
    name
  }  
  `)

type Props = {
  post: FragmentType<typeof PostFragment>
}

function PostView(props: Props) {
  const post = useFragment(PostFragment, props.post)
  return <Card shadow="sm" padding="lg" radius="md" withBorder>
    <Card.Section pl={10} pt={10} pb={10}>
      <UserAvatar user={post.authorUser} />
      <Title order={3}>{post.text}</Title>
    </Card.Section>
    <Card.Section>
      <Center>
        <Paper w="80%">
          {post.comments.map((comment) => <Comment author={comment.authorUser} text={comment.text} />)}
        </Paper>
      </Center>
    </Card.Section>
    <Card.Section>
      <Center>
        <Box w="75%" pt="10" pb="10">
          <AddComment />
        </Box>
      </Center>
    </Card.Section>
  </Card>
}

export default PostView