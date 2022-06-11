import { Provider } from 'react-redux';
import { unstable_HistoryRouter as Router } from 'react-router-dom';

const Root = ({ children, store, history }) => {
  return (
    <Provider store={store}>
      <Router history={history}>{children}</Router>
    </Provider>
  );
};

export default Root;
