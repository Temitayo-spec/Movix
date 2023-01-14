import styled from 'styled-components';
// interface to check if it's a login or sign-up form
interface RegisterFormProps {
  isLogin: boolean;
  onSubmit: () => void;
}

const Forms = ({ isLogin, onSubmit }: RegisterFormProps) => {
  return (
    <Container>
      <Form onSubmit={onSubmit}>
        {
          // if it's a sign-up form, display the name input
          !isLogin && (
            <FormGroup>
              <Input type="text" placeholder="Full Name" />
            </FormGroup>
          )
        }
        <FormGroup>
          <Input type="email" placeholder="Email" />
        </FormGroup>
        <FormGroup>
          <Input type="password" placeholder="Password" />
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
  height: 100vh;
  background-color: #fff;
  color: #000;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const FormGroup = styled.div``;

const Input = styled.input`
  padding: 0 12px;
  width: 394px;
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
    font-feature-settings: 'liga' off, 'calt' off, 'kern' off;
    color: rgba(76, 78, 100, 0.38);
  }
`;

const Button = styled.button`
  width: 394px;
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
`;
