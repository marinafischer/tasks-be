import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

const TEST_USERNAME= 'Marina Fischer';
const TEST_PASSWORD = 'SenhaSuperSecreta';

describe('Na tela de login', () => {
  it('Deve haver um input para inserir o "username"', () => {
    render(<App />);
    const userNameInput = screen.getByPlaceholderText('usuário');
    expect(userNameInput).toBeInTheDocument();
  });

  it('A pessoa deve ser capaz de escrever seu nome no input', () => {
    render(<App />);
    const userNameInput = screen.getByPlaceholderText('usuário');
    userEvent.type(userNameInput, TEST_USERNAME);
    expect(userNameInput).toHaveValue(TEST_USERNAME);
  });

  it('Deve haver um input para inserir a senha', () => {
    render(<App />);
    const passwordInput = screen.getByPlaceholderText('senha');
    expect(passwordInput).toBeInTheDocument();
  });

  it('A pessoa deve ser capaz de escrever seua senha input', () => {
    render(<App />);
    const passwordInput = screen.getByPlaceholderText('senha');
    userEvent.type(passwordInput, TEST_PASSWORD);
    expect(passwordInput).toHaveValue(TEST_PASSWORD);
  });

  it('Deve haver um botão com o texto "Entrar"', () => {
    render(<App />);
    const btnSubmit = screen.getByRole("button");
    expect(btnSubmit).toBeInTheDocument();
  });

  it('O botão só deve ser habilitado após difitar usuário e senha válidos', ()=>{
    render(<App />);
    const userNameInput = screen.getByPlaceholderText('usuário');
    const passwordInput = screen.getByPlaceholderText('senha');
    const btnSubmit = screen.getByRole("button");
    expect(btnSubmit).toHaveAttribute('disabled');

    userEvent.type(userNameInput, TEST_USERNAME);
    userEvent.type(passwordInput, TEST_PASSWORD);
    expect(btnSubmit).not.toHaveAttribute('disabled');

  }); 
});
