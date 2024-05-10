import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

interface LoginFormProps {
  setUser: ({ identifier, password }: { identifier: string; password: string }) => void;
  queryKey: string[];
}
const LoginForm = ({ setUser, queryKey }: LoginFormProps) => {
  const [userField, setUserField] = useState('');
  const [passwordField, setPasswordField] = useState('');

  const queryClient = useQueryClient();

  return (
    <form onSubmit={() => false}>
      <label htmlFor="user">user</label>
      <input
        type="text"
        name="user"
        value={userField}
        onChange={(e) => setUserField(e.target.value)}
      />
      <label htmlFor="password">password</label>
      <input
        type="password"
        name="password"
        value={passwordField}
        onChange={(e) => setPasswordField(e.target.value)}
      />
      <input
        type="button"
        value="go"
        onClick={() => {
          setUser({ identifier: userField, password: passwordField });
          queryClient.invalidateQueries({ queryKey: queryKey });
        }}
      />
    </form>
  );
};

export default LoginForm;
