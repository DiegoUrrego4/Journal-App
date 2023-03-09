import { fireEvent, render, screen } from '@testing-library/react';
import { LoginPage } from '../../../src/auth/pages/LoginPage';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from '../../../src/store/auth';
import { startGoogleSignIn } from '../../../src/store/auth/thunks';
import { MemoryRouter } from 'react-router-dom';
import { notAuthenticatedState } from '../../fixtures/authFixtures';

const mockStartGoogleSignIn = jest.fn();
const mockStartLoginWithEmailAndPassword = jest.fn();

jest.mock('../../../src/store/auth/thunks.js', () => ({
  startGoogleSignIn: () => mockStartGoogleSignIn,
  startLoginWithEmailAndPassword: ({ email, password }) => {
    return () => mockStartLoginWithEmailAndPassword({ email, password });
  },
}));

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => (fn) => fn(),
}));

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
  preloadedState: {
    auth: notAuthenticatedState,
  },
});

describe('Pruebas en LoginPage', () => {
  beforeEach(() => jest.clearAllMocks());
  test('debe de mostrar el componente correctamente', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getAllByText('Login').length).toBeGreaterThanOrEqual(1);
  });

  test('botón de google debe de llamar el startGoogleSignIn', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );
    const googleBtn = screen.getByLabelText('google-btn');
    fireEvent.click(googleBtn);

    expect(mockStartGoogleSignIn).toHaveBeenCalled();
  });

  test('submit debe de llamar startLoginWithEmailAndPassword', () => {
    const email = 'diego@mail.com';
    const password = '123456';

    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );
    const emailField = screen.getByRole('textbox', { name: 'Correo' });
    fireEvent.change(emailField, { target: { name: 'email', value: email } });

    const passwordField = screen.getByTestId('password');
    fireEvent.change(passwordField, {
      target: { name: 'password', value: password },
    });

    const loginForm = screen.getByLabelText('submit-form');
    fireEvent.submit(loginForm);

    expect(mockStartLoginWithEmailAndPassword).toHaveBeenCalledWith({
      email,
      password,
    });
  });
});
