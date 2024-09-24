import React from 'react'
import { FragmentType, useFragment } from './gql'
import { graphql } from '../src/gql'
import { Card, Paper, Title } from '@mantine/core'

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
            <Title order={1}>{post.text}</Title>
            <Title order={2}>Posted by: {post.authorUser.name}</Title>
        </Card.Section>
        <Card.Section>
            <Paper>
                {post.comments.map((comment) => <Paper>
                    <Title order={3}>{comment.text}</Title>
                    <Title order={4}>Posted by: {comment.authorUser.name}</Title>
                </Paper>)}
            </Paper>
        </Card.Section>
    </Card>
}

export default PostView