import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const TITLE = 'React GraphQL GitHub Client';
const axiosGithubGraphQL = axios.create({
  baseURL: 'https://api.github.com/graphql',
  headers: {
    Authorization: `bearer ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`,
  },
});

function App() {
  return (
    <div className="App">
      <h1>{TITLE}</h1>
    </div>
  );
}

export default App;
