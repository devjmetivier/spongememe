import * as React from 'react';

import './reboot.css';
import * as Styled from './App.style';

const App: React.FC = () => {
  const [inputText, setInputText] = React.useState('');
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState(false);

  const mock = (s: string) =>
    s
      .split('')
      .map((c: string, i: number) => (i % 2 ? c.toUpperCase() : c.toLowerCase()))
      .join('');

  const clipIt = () => {
    navigator.clipboard
      .writeText(mock(inputText))
      .then(() => setSuccess(true))
      .catch(() => setError(true));
  };

  React.useEffect(() => {
    setTimeout(() => {
      if (success || error) {
        setSuccess(false);
        setError(false);
      }
    }, 1500);
  });

  return (
    <Styled.Container className='container'>
      <Styled.InputContainer>
        <Styled.Input
          autoFocus
          id='mock'
          name='mock'
          onChange={({ target: { value } }) => setInputText(value)}
          type='text'
          value={inputText}
        />
      </Styled.InputContainer>

      <Styled.MockTextContainer>
        <Styled.MockText onClick={() => clipIt()}>{mock(inputText)}</Styled.MockText>
      </Styled.MockTextContainer>

      <Styled.Message>
        {success && '✅ Copied ✅'}
        {error && '🚫 Error 🚫'}
      </Styled.Message>
    </Styled.Container>
  );
};

export default App;
