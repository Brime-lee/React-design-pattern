import { UserInfo } from './components/user-info';
import axios from 'axios';
import { DataSourceWIthRender } from './components/data-source-with-render';
import { DataSource } from './components/data-source';

function App() {
  const getDataFromServer = async (url) => {
    const response = await axios.get(url);
    return response.data;
  };

  const getDataFromLocalStorage = (key) => () => {
    return localStorage.getItem(key);
  };

  const Message = ({ msg }) => {
    return <h1>{msg}</h1>;
  };

  return (
    <>
      <DataSource
        getData={() => getDataFromServer('/users/2')}
        resourceName={'user'}
      >
        <UserInfo />
      </DataSource>
      {/* <DataSourceWIthRender
        getData={() => getDataFromServer('/users/2')}
        render={(resource) => <UserInfo user={resource} />}
      ></DataSourceWIthRender>*/}

      <DataSource
        getData={() => getDataFromLocalStorage('test')}
        resourceName={'msg'}
      >
        <Message />
      </DataSource>
    </>
  );
}

export default App;
