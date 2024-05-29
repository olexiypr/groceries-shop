import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux'; // Import Provider
import { useNavigate } from 'react-router-dom';
import Login from '../pages/login/login';
import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from '../redux/userSlice';

const store = configureStore(userSlice); // Create a Redux store with your root reducer

const mockLogin = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

jest.mock('../services/AuthService.js', () => {
  return {
    login: () => mockLogin(),
  };
});

describe('Login component', () => {
  beforeEach(() => {
    useNavigate.mockClear();
  });

  test('calls login function on form submission', async () => {
    const mockNavigate = jest.fn();
    useNavigate.mockReturnValue(mockNavigate);

    render(
      <Provider store={store}>
        {' '}
        {/* Provide the Redux store */}
        <Login />
      </Provider>,
    );
    const emailInput = screen.getByLabelText('Email address*');
    const passwordInput = screen.getByLabelText(
      'Password(at least 8 characters)*',
    );
    const loginButton = screen.getAllByRole('button')[0];

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(loginButton);

    // Now, assert that the mockLogin function was called
    await waitFor(() => expect(mockLogin).toHaveBeenCalledTimes(1));
    expect(mockNavigate).toHaveBeenCalledWith('/');
  });

  test('does not call login function if email is invalid', async () => {
    const mockNavigate = jest.fn();
    useNavigate.mockReturnValue(mockNavigate);

    render(
      <Provider store={store}>
        {' '}
        {/* Provide the Redux store */}
        <Login />
      </Provider>,
    );
    const emailInput = screen.getByLabelText('Email address*');
    const passwordInput = screen.getByLabelText(
      'Password(at least 8 characters)*',
    );
    const loginButton = screen.getAllByRole('button')[0];

    fireEvent.change(emailInput, { target: { value: 'test' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(loginButton);

    // Now, assert that the mockLogin function was not called
    expect(mockLogin).not.toHaveBeenCalled();
    expect(mockNavigate).not.toHaveBeenCalled();
  });

  test('does not call login function if password is invalid', async () => {
    const mockNavigate = jest.fn();
    useNavigate.mockReturnValue(mockNavigate);

    render(
      <Provider store={store}>
        {' '}
        {/* Provide the Redux store */}
        <Login />
      </Provider>,
    );
    const emailInput = screen.getByLabelText('Email address*');
    const passwordInput = screen.getByLabelText(
      'Password(at least 8 characters)*',
    );
    const loginButton = screen.getAllByRole('button')[0];

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'pass' } });
    fireEvent.click(loginButton);

    // Now, assert that the mockLogin function was not called
    expect(mockLogin).not.toHaveBeenCalled();
    expect(mockNavigate).not.toHaveBeenCalled();
  });
});
