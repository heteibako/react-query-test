import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: ${(props) => (props.md ? '2em' : '1em')};
  background: #ffffff;
  width: 80%;
  margin: 0 auto;
`;
