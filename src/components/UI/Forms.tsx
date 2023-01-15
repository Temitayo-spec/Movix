import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../reduxStore/hooks';
import {
  selectUserEmail,
  selectUserName,
  selectUserPassword,
  setUser,
} from '../../reduxStore/userSlice';
// interface to check if it's a login or sign-up form
interface RegisterFormProps {
  isLogin: boolean;
  onSubmit: (e: any) => Promise<void>;
}

const Forms = ({ isLogin, onSubmit }: RegisterFormProps) => {
  const name = useAppSelector(selectUserName);
  const email = useAppSelector(selectUserEmail);
  const password = useAppSelector(selectUserPassword);

  // initialize the useDispatch hook
  const dispatch = useAppDispatch();

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        {
          // if it's a sign-up form, display the name input
          !isLogin && (
            <FormGroup>
              <Input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e: { target: { value: any } }) => {
                  dispatch(setUser({ name: e.target.value, email, password }));
                }}
              />
            </FormGroup>
          )
        }
        <FormGroup>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e: { target: { value: any } }) => {
              dispatch(setUser({ name, email: e.target.value, password }));
            }}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e: { target: { value: any } }) => {
              dispatch(setUser({ name, email, password: e.target.value }));
            }}
          />
        </FormGroup>
        {
          // if it's a sign-up form, display the Register button
          !isLogin ? (
            <Button type="submit">Register</Button>
          ) : (
            // if it's a login form, display the Login button
            <Button type="submit">Login</Button>
          )
        }

        <LinkCtn>
          <P>
            {isLogin ? 'Don’t have an account?' : 'Already have an account?'}
          </P>
          <Link to={isLogin ? '/register' : '/login'}>
            {isLogin ? 'Sign Up' : 'Login'}
          </Link>
        </LinkCtn>
      </Form>
    </Container>
  );
};

export default Forms;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  color: #000;
  width: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  & > * {
    margin-bottom: 16px;
  }

  & > *:last-child {
    margin-bottom: 0;
  }
`;

const FormGroup = styled.div`
  width: 100%;
`;

const Input = styled.input`
  padding: 0 12px;
  width: 100%;
  height: 51px;
  border: 1px solid rgba(76, 78, 100, 0.22);
  border-radius: 8px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-family: 'Work Sans', sans-serif;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 19px;
    color: rgba(76, 78, 100, 0.38);
  }
`;

const Button = styled.button`
  width: 100%;
  height: 51px;
  /* robert-black */
  background: #000000;
  /* Light/Elevation/3 */
  box-shadow: 0px 4px 8px -4px rgba(76, 78, 100, 0.42);
  border-radius: 8px;
  color: #fff;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 15px;
  line-height: 26px;
  /* identical to box height, or 173% */
  letter-spacing: 0.46px;
  text-transform: uppercase;
  /* Light/Primary/Contrast */
  color: #ffffff;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

const LinkCtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 16px;

  & > a {
    font-family: 'Work Sans', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 18px;
    text-align: center;
    color: #b91c1c;
    margin-left: 8px;
  }
`;

const P = styled.p`
  font-family: 'Work Sans', sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 18px;
  text-align: center;
  color: #747474;
`;
