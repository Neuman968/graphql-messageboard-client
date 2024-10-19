import { Button, Grid, Textarea } from "@mantine/core";


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
                <Button>Submit</Button>
            </Grid.Col>
        </Grid>
    )
}

export default AddComment;