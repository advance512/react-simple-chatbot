import styled from 'styled-components';
import defaultTheme from '../../theme';

const OptionElement = styled.a`
  background: '#fff';
  border-radius: 22px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);
  color: "#293846";
  display: inline-block;
  padding: 9px;

  &:hover { opacity: .7; }
`;

OptionElement.defaultProps = {
  theme: defaultTheme,
};

export default OptionElement;
