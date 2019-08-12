import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage';
import Login from 'containers/Login';
import InfomatonPage from '../InfomatonPage';
import TeacherInfomationPage from '../TeacherInfomationPage';
import StudentInfomationPage from '../StudentInfomationPage';
import Admin from '../Admin';
// import NotFound from '../404';
import Guests from '../Guests';
import NotFoundPage from '../NotFoundPage';

export default function App() {
  // const [value, setValue] = useState({
  //   token: JSON.parse(localStorage.getItem('token')),
  // });
  // useEffect(() => {
  //   setValue({ token: JSON.parse(localStorage.getItem('token')) });
  // }, []);
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={Login} />
        <Route path="/info" component={InfomatonPage} />
        <Route path="/teacher" component={TeacherInfomationPage} />
        <Route path="/student" component={StudentInfomationPage} />
        <Route path="/admin" component={Admin} />
        <Route path="/guests" component={Guests} />
        <Route path="" component={NotFoundPage} />
      </Switch>
    </div>
  );
}
