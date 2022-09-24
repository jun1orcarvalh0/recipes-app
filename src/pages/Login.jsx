import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function Login({ history }) {
  const [profile, setProfile] = useState({
    loginemail: '',
    password: '',
  });
  const [disabled, setDisabled] = useState(true);
  const MIN_CHARACTERS = 6;

  useEffect(() => {
    const { loginemail, password } = profile;
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(loginemail);
    const passIsValid = password.length > MIN_CHARACTERS;
    setDisabled(!(emailRegex && passIsValid));
  }, [profile]);

  const handleChange = ({ target }) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      [target.name]: target.value,
    }));
  };

  const onLogin = () => {
    const { loginemail: email } = profile;
    const storeEmail = {
      email,
    };

    localStorage.setItem('user', JSON.stringify(storeEmail));
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('drinksToken', 1);

    history.push('/meals');
  };

  return (
    <div>
      <form onSubmit={ onLogin }>
        <input
          type="email"
          name="loginemail"
          data-testid="email-input"
          value={ profile.email }
          onChange={ handleChange }
          placeholder="E-mail"
        />
        <input
          type="password"
          name="password"
          data-testid="password-input"
          value={ profile.password }
          onChange={ handleChange }
          placeholder="E-mail"
        />
        <button
          type="submit"
          data-testid="login-submit-btn"
          disabled={ disabled }
        >
          Enter
        </button>
      </form>
    </div>
  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
