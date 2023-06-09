import styled from 'styled-components'

import { spaceMono } from '../Modal'

type PropsStye = {
  selectedstyle: string
  color: string
  font?: string
}

export const SelectSpan = styled.span<PropsStye>`
  padding: 18px 24px;
  background-color: ${(props) =>
    props.selectedstyle === 'true' ? props.color : 'transparent'};
  color: ${(props) => (props.selectedstyle === 'true' ? '#1E213F' : '#d7e0ff')};
  border-radius: 24px;
  font-size: 14px;
  cursor: pointer;

  @media (max-width: 767px) {
    font-size: ${(props) => (props.font === spaceMono ? '11px' : '12px')};
    padding: 12px 18px;
  }
`
