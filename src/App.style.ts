import styled from 'styled-components';

const widths = [300];

export const Container = styled.main`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #ecebf3;
`;

export const InputContainer = styled.section`
  display: flex;
  justify-content: center;
  align-content: center;
  width: ${widths[0]}px;
  max-width: 100%;
  min-height: 80px;
`;

export const Input = styled.input`
  display: block;
  align-self: center;
  padding: 0 8px;
  width: calc(100% - 32px);
  min-height: 40px;
  font-size: 2rem;
  background: white;
  border: 1px solid lightskyblue;
`;

export const MockTextContainer = styled.section`
  display: flex;
  justify-content: center;
  width: ${widths[0]}px;
  max-width: 100%;
  min-height: 5rem;
  text-align: center;
`;

export const MockText = styled.div`
  align-self: center;
  font-family: 'Impact';
  text-shadow: 0 0 2px solid black;
  font-size: 3rem;
  color: black;
  -webkit-text-fill-color: white;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: black;
  &:hover {
    cursor: pointer;
  }
`;

export const Message = styled.section`
  display: flex;
  justify-content: center;
  align-content: center;
  min-height: 2rem;
  font-size: 1.2rem;
`;
