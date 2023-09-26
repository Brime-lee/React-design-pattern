import { ResourceLoader } from './components/resource-loader';
import { UserInfo } from './components/user-info';

function App() {
  return (
    <ResourceLoader resourceUrl={'/users/2'} resourceName={'user'}>
      <UserInfo />
    </ResourceLoader>
  );
}

export default App;
