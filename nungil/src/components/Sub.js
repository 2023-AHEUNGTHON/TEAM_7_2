import styled from 'styled-components';

const Box = styled.p`
  font-size: 0.875rem;
  font-weight: 600;
  color: #909090;
  margin-bottom: 0.6rem;
`

function Sub(props) {
    return <Box>{props.explan}</Box>
}

export default Sub;