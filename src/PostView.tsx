import { FragmentType, useFragment } from './gql'
import { graphql } from '../src/gql'
import { Card, Paper, Text, Avatar } from '@mantine/core'
import { Comment } from './Comment';


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

type Props = {
    post: FragmentType<typeof PostFragment>
}

function PostView(props: Props) {
    const post = useFragment(PostFragment, props.post)
    return <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section>
        <Avatar
            alt={post.authorUser.name}
            radius="xl"
          >
              {post.authorUser.name.charAt(0).toUpperCase()}
          </Avatar>
            <Text fz="xs" c="dimmed">{post.authorUser.name}</Text>
            <Text fz="xs">{post.text}</Text>
            {/* <Title order={1}>{post.text}</Title> */}
            {/* <Title order={2}>Posted by: {post.authorUser.name}</Title> */}
        </Card.Section>
        <Card.Section>
            <Paper>
                {post.comments.map((comment) => <Comment author={comment.authorUser.name} text={comment.text}/>)}
            </Paper>
        </Card.Section>
    </Card>
}

export default PostView