import { CurrectUserLoader } from './components/current-user-loader';
import { UserInfo } from './components/user-info';

function App() {
  return (
    <CurrectUserLoader>
      <UserInfo />
    </CurrectUserLoader>
  );
}

export default App;
