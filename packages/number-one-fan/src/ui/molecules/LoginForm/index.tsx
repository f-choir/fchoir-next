import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

interface LoginFormProps {
  setUser: ({ identifier, password }: { identifier: string; password: string }) => void;
  queryKey: string[];
}
const LoginForm = ({ setUser, queryKey }: LoginFormProps) => {
  const [userField, setUserField] = useState('default');
  const [passwordField, setPasswordField] = useState('');

  const queryClient = useQueryClient();

  return (
    <form onSubmit={() => false} className="py-4 text-white">
      <div className="flex flex-col">
        <div className="p-2">
          <label htmlFor="user" className="pr-2">
            user
          </label>
          <input
            type="text"
            name="user"
            autoComplete="username"
            value={userField}
            onChange={(e) => setUserField(e.target.value)}
            className="p-2 text-black"
          />
        </div>
        <div className="p-2">
          <label htmlFor="password" className="pr-2">
            password
          </label>
          <input
            type="password"
            name="password"
            autoComplete="current-password"
            value={passwordField}
            onChange={(e) => setPasswordField(e.target.value)}
            className="p-2 text-black"
          />
          <input
            type="button"
            value="go"
            onClick={() => {
              setUser({ identifier: userField, password: passwordField });
              queryClient.invalidateQueries({ queryKey: queryKey });
            }}
            className="px-2 font-bold text-white hover:underline"
          />
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
