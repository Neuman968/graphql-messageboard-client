import './App.css'
import { AppShell, createTheme, MantineProvider } from '@mantine/core'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import PostsList from './PostsList';

const theme = createTheme({})
const client = new ApolloClient({
  uri: 'http://localhost:8811/graphql',
  cache: new InMemoryCache(),
});

function App() {

  // Data is of type GetPostData | undefined

  return (
    <MantineProvider theme={theme}>
      <ApolloProvider client={client}>
      <AppShell>
        <PostsList/>
      </AppShell>
      </ApolloProvider>
    </MantineProvider>
  )
}

export default App
