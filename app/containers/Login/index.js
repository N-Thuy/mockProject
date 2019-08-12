import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { makeSelectLoading } from 'containers/App/selectors';
// import { loadRepos } from '../App/actions';
import { loginLoad } from './actions';
import { makeSelectErr } from './selectors';
import reducer from './reducer';
import saga from './saga';

const key = 'login';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
export function Login(props) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const [values, setValues] = useState({
    email: '',
    password: '',
    submit: false,
    isLogIn: false,
  });

  const classes = useStyles();

  const handleSubmit = event => {
    event.preventDefault();
    props.onLoginLoad(values.email, values.password, values.submit);

    if (values.email === 'admin@gmail.com' && values.password === 'admin') {
      props.history.push('/info');
    }
    if (values.email === 'teacher@gmail.com' && values.password === 'teacher') {
      props.history.push('/info');
    }
    if (values.email === 'student@gmail.com' && values.password === 'student') {
      props.history.push('/student');
    }
  };

  const handleChange = event => {
    event.persist();
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const renderRedirect = () =>
    localStorage.getItem('token') ? <Redirect to="/" /> : null;
  return (
    <div>
      {renderRedirect()}
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <h1>{props.err}</h1>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={values.email}
              onChange={handleChange}
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={values.password}
              onChange={handleChange}
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/df" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>{/* <MadeWithLove /> */}</Box>
      </Container>
    </div>
  );
}
const mapStateToProps = createStructuredSelector({
  err: makeSelectErr(),
  isLogIn: makeSelectLoading(),
});

const mapDispatchToProps = dispatch => ({
  onLoginLoad: (email, password, submit) => {
    dispatch(loginLoad(email, password, submit));
  },
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
Login.propTypes = {
  onLoginLoad: PropTypes.func,
  err: PropTypes.string,
  history: PropTypes.object,
  push: PropTypes.object,
};
export default compose(
  withConnect,
  memo,
)(Login);
