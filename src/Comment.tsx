import { Paper, Text, TypographyStylesProvider } from '@mantine/core'

import classes from './Comment.module.css';
import { User } from './gql/graphql';
import UserAvatar from './UserAvatar';

type Props = {
    author: User,
    text: string,
}

export function Comment(props: Props) {
    return (
      <Paper h={100} withBorder radius="md" className={classes.comment}>
        <UserAvatar user={props.author} />
        <TypographyStylesProvider className={classes.body}>
          <Text>
            {props.text}
          </Text>
        </TypographyStylesProvider>
      </Paper>
    );
  }
  