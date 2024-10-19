import { User } from './gql/graphql';
import { Text, Avatar, Group } from '@mantine/core'
type Props = {
    user: User
}

function UserAvatar(props: Props) {
    return (<Group>
        <div>
            <Avatar
                alt={props.user.name}
                color={getColorByName(props.user.name)}
                radius="xl"
            >
                {props.user.name.charAt(0).toUpperCase()}
            </Avatar>
        </div>
        <div>
            <Text fz="sm">{props.user.name}</Text>
        </div>
    </Group>
    );
}

function getColorByName(name: string): string {
    const colors = [
        'green',
        'blue',
        'red',
        'pink',
        'orange',
        'cyan',
    ];

    // Simple hash function to convert name to a number
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }

    // Use the hash to select a color
    const colorIndex = Math.abs(hash) % colors.length;
    return colors[colorIndex];
}

export default UserAvatar;