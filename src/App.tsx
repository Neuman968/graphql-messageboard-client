import './App.css'
import { AppShell, MantineProvider } from '@mantine/core'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import PostsList from './PostsList';

const client = new ApolloClient({
  uri: 'http://localhost:8080/query',
  cache: new InMemoryCache(),
});

function App() {

  return (
    <MantineProvider defaultColorScheme="dark">
      <ApolloProvider client={client}>
      <AppShell>
        <PostsList/>
      </AppShell>
      </ApolloProvider>
    </MantineProvider>
  )
}

export default App
