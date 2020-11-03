import * as React from 'react';

import './reboot.css';
import * as Styled from './App.style';
import useSarcasm from '@hookit/sarcasm';

const App: React.FC = () => {
  const [inputText, setInputText] = React.useState('');
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState(false);
  const sarcasm = useSarcasm();

  const clipIt = () => {
    navigator.clipboard
      .writeText(sarcasm(inputText))
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
          onChange={({ target: { value } }) => setInputText(value)}
          type='text'
          value={inputText}
        />
      </Styled.InputContainer>

      <Styled.MockTextContainer>
        <Styled.MockText onClick={() => clipIt()}>{sarcasm(inputText)}</Styled.MockText>
      </Styled.MockTextContainer>

      <Styled.Message>
        {success && '✅ Copied ✅'}
        {error && '🚫 Error 🚫'}
      </Styled.Message>
    </Styled.Container>
  );
};

export default App;
