import React from 'react'
import { Box, Button, Grid, Textarea } from "@mantine/core";
import { graphql } from "./gql";
import { useMutation } from "@apollo/client";
import { getPostsQuery } from './PostsList';

const addPostComment = graphql(`
    mutation addPostComment($add: AddNewCommentInput!) { 
        addComment(add: $add) {
            id
            text
            authorUser {
                id
                name
            }
        }
    }`)

type Props = {
    postId: string
}

function AddComment(props: Props) {

    const [text, setTextState] = React.useState<string>('')

    const [addComment, { loading, error }] = useMutation(addPostComment, {
        variables: {
            add: {
                text: text,
                postId: props.postId,
            }
        },
        refetchQueries: [
            getPostsQuery, // DocumentNode object parsed with gql
            'getPosts' // Query name
        ],
    })

    if (loading) {
        return <Box>Loading...</Box>
    }
    if (error) {
        return <Box>Error: {error.message}</Box>
    }

    return (
        <Grid>
            <Grid.Col span={9}>
                <Textarea
                    onChange={(event) => setTextState(event.currentTarget.value)}
                    minRows={2}
                    description="Add your reply"
                />
            </Grid.Col>
            <Grid.Col span={3}>
                <Box pt={20}>
                    <Button onClick={() => {
                        addComment()
                        setTextState('')
                    }}>Submit</Button>
                </Box>
            </Grid.Col>
        </Grid>
    )
}

export default AddComment;