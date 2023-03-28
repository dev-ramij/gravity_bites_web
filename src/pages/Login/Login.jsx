import React, { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap';
import { ROUTES } from '../../routes/RouterConfig';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { loginRequest } from '../../apis/user.request';
import Snackbar from '../../components/Snackbar';

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [snackbarVariant, setSnackbarVariant] = useState("");
  const [snackBarMessage, setSnackbarMessage] = useState("");
  const [submittingText, setSubmittingText] = useState("");

  const navigate = useNavigate();

  const changeDir = (dir) => {
    navigate(dir)
  }

  const doLogin = async () => {
    setSubmittingText("Logging In ...")
    try {
      const res = await loginRequest({ email, password });
      setSnackbarVariant(res.success ? "success" : "danger")
      setSnackbarMessage(res.message);
      // setTimeout(() => {
      //   navigate(ROUTES.Home)
      // }, 1000)
    } catch (error) {
      setSnackbarVariant("danger")
      setSnackbarMessage("Something went wrong")
    }
    setSubmittingText("")
  }

  const onSnackbarClose = () => {
    setSnackbarVariant('');
    setSnackbarMessage('')
  }

  const disabled = useMemo(() =>
    [email.trim().length, password.trim().length].includes(0),
    [email, password])

  return (
    <div className='Login'>
      {snackbarVariant !== "" && <Snackbar
        message={snackBarMessage}
        variant={snackbarVariant}
        onClose={onSnackbarClose}
      />}
      <Header />
      <div className='py-16'>
        <div className='lg:w-4/12 md:w-4/12 sm:w-6/12 w-full m-auto mt-12'>
          <h2 className='font-semibold text-3xl my-8 text-center pb-12'>Login In To Your Account</h2>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                value={email}
                onChange={e => setEmail(e.target.value)}
                className='rounded-full h-12 mb-8' type="email" placeholder="Email or Phone or Username" />
            </Form.Group>
            <Form.Group
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control className='rounded-full h-12 mb-0' type="password" placeholder="Password" />
            </Form.Group>
            <div className='mb-16 text-center flex justify-content-between'>
              <p className='text-black-600 font-medium text-xs'> <Form.Check
                inline
                label="Keep me login for 30 days"
                type='checkbox'
              /></p>
              <a href='#' className='text-sky-600 font-medium text-xs'>Forgot Password?</a>
            </div>
            <Button
              disabled={disabled || submittingText}
              onClick={doLogin} className='bg-black w-full rounded-full border-none mb-4 font-bold h-12 text-lg'>
              {submittingText.length > 0 ? submittingText : "Log In"}
            </Button>
          </Form>
          <div className='mb-16 text-center'>
            <p className='text-gray-400 font-medium'>Need an account? <a href='#' onClick={() => { changeDir(ROUTES.StoreDetails) }} className='text-sky-600 font-medium'>Sign Up</a></p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Login