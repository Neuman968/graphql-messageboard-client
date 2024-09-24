import { Avatar, Group, Paper, Text, TypographyStylesProvider } from '@mantine/core'

import classes from './Comment.module.css';

type Props = {
    author: string,
    text: string,
}

export function Comment(props: Props) {
    return (
      <Paper withBorder radius="md" className={classes.comment}>
        <Group>
          <Avatar
            alt={props.author}
            radius="xl"
          >
              {props.author.charAt(0).toUpperCase()}
          </Avatar>
          <div>
            <Text fz="sm">{props.author}</Text>
            <Text fz="xs" c="dimmed">
              10 minutes ago
            </Text>
          </div>
        </Group>
        <TypographyStylesProvider className={classes.body}>
          <div
            className={classes.content}
            dangerouslySetInnerHTML={{
              __html:
                props.text,
            }}
          />
        </TypographyStylesProvider>
      </Paper>
    );
  }
  