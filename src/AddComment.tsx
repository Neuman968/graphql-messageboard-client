import { Box, Button, Grid, Textarea } from "@mantine/core";


// type Props = {
//     postId: string;
// }

function AddComment() {

    return (
        <Grid>
            <Grid.Col span={9}>
                <Textarea
                    minRows={2}
                    description="Add your reply"
                />
            </Grid.Col>
            <Grid.Col span={3}>
                <Box pt={20}>
                    <Button>Submit</Button>
                </Box>
            </Grid.Col>
        </Grid>
    )
}

export default AddComment;