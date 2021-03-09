import React, { useState, useContext, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AuthContext from '../../context/authentication/authContext';
import AlertContext from '../../context/alerts/alertContext';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      {new Date().getFullYear()}{' '}{' '}
      <Link color="inherit" href="https://github.com/NicooRomero">
        github.com/NicooRomero
      </Link>     
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
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
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

 const Login = (props) => {

    const alertContext = useContext(AlertContext);
    const { alert, showAlert } = alertContext;

    const authContext = useContext(AuthContext);
    const { msg, authenticated ,userLogIn } = authContext;

    useEffect(() => {
      if(authenticated) {
        props.history.push('/home')
      }

      if(msg) {
        showAlert(msg.msg, msg.category)
      }

    }, [ msg, authenticated, props.history ])
     
    const [ user, setUser ] = useState({
        email: '',
        password: ''
    });
    const classes = useStyles();

    const { email, password } = user;

    const onChange = e => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();
      if(email.trim() === '' || password.trim() === '') {
        showAlert('Todos los campos son obligatorios', 'error');
        return;
      }

      userLogIn({email, password});
    }

    return (
        <Container component="main" maxWidth="xs">
        <CssBaseline />
          <div className={classes.paper}>
              <Avatar className={classes.avatar}>
              </Avatar>
              <Typography component="h1" variant="h5">
              Iniciar Sesión
              </Typography>
              <Card>
                  <CardContent>
                    { alert ? (<Alert severity={alert.category}>{alert.msg}</Alert>) : null}
                    <form className={classes.form} onSubmit={onSubmit} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Tu Email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={email}
                        onChange={onChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Tu Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={onChange}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Iniciar Sesión
                    </Button>
                    <Grid container>
                        <Grid item xs>
                        <Link href="/new-account" variant="body2">
                            Crear Cuenta
                        </Link>
                        </Grid>
                    </Grid>
                    </form>
                  </CardContent>
              </Card>
          </div>
          <Box mt={8}>
              <Copyright />
          </Box>
        </Container>
    );
}

export default Login;