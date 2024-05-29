import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from '../redux/userSlice';
import Registration from '../pages/registration/registration';

const store = configureStore(userSlice);

const mockRegistration = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
  NavLink: jest.fn(),
}));

jest.mock('../services/AuthService.js', () => {
  return {
    registration: () => mockRegistration(),
  };
});

describe('Form component', () => {
  beforeEach(() => {
    useNavigate.mockClear();
    mockRegistration.mockClear();
  });

  test('submits the form with valid inputs', async () => {
    const mockNavigate = jest.fn();
    useNavigate.mockReturnValue(mockNavigate);

    render(
      <Provider store={store}>
        <Registration />
      </Provider>,
    );

    const nameInput = screen.getByLabelText('Full name*');
    const emailInput = screen.getByLabelText('Email address*');
    const addressInput = screen.getByLabelText('Address*');
    const phoneInput = screen.getByLabelText('Phone number*');
    const passwordInput = screen.getByLabelText(
      'Password(at least 8 characters)*',
    );
    const retypePasswordInput = screen.getByLabelText('Retype password*');
    const registerButton = screen.getByText('Register');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(addressInput, { target: { value: '123 Main St' } });
    fireEvent.change(phoneInput, { target: { value: '1234567890' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.change(retypePasswordInput, { target: { value: 'password123' } });
    fireEvent.click(registerButton);

    await waitFor(() => {
      expect(mockRegistration).toHaveBeenCalledTimes(1);
    });
    expect(mockNavigate).not.toHaveBeenCalled();
  });

  test('does not submit the form with invalid inputs', async () => {
    const mockNavigate = jest.fn();
    useNavigate.mockReturnValue(mockNavigate);

    render(
      <Provider store={store}>
        <Registration />
      </Provider>,
    );

    const nameInput = screen.getByLabelText('Full name*');
    const emailInput = screen.getByLabelText('Email address*');
    const addressInput = screen.getByLabelText('Address*');
    const phoneInput = screen.getByLabelText('Phone number*');
    const passwordInput = screen.getByLabelText(
      'Password(at least 8 characters)*',
    );
    const retypePasswordInput = screen.getByLabelText('Retype password*');
    const registerButton = screen.getByText('Register');

    fireEvent.change(nameInput, { target: { value: '' } });
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.change(addressInput, { target: { value: '' } });
    fireEvent.change(phoneInput, { target: { value: '123' } });
    fireEvent.change(passwordInput, { target: { value: 'pass' } });
    fireEvent.change(retypePasswordInput, { target: { value: 'password123' } });
    fireEvent.click(registerButton);

    expect(mockRegistration).not.toHaveBeenCalled();
    expect(mockNavigate).not.toHaveBeenCalled();
  });
});
