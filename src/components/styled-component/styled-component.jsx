import styled from 'styled-components'
import './styled-component.scss';

// in official doc we have { $primary?: boolean; }>` but its I think for Typescript
// variant below for just JS
const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.$primary ? "#BF4F74" : "white"};
  color: ${props => props.$primary ? "white" : "#BF4F74"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #BF4F74;
  border-radius: 3px;
  cursor: pointer;


  &:hover {
    opacity: 0.7;
  }
`;

export function StyledButton({onClickFn, buttonName}) {
  return <Button type='button' $primary onClick={onClickFn}>{buttonName}</Button>
}

export default function StyledComponent() {
    return (
        <>
        <div><b>styled</b>-component</div>
        <Button className="capitalize">button</Button>
        <Button $primary>Primary Button</Button>
        </>
    )
}