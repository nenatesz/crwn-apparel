import styled, { css } from 'styled-components';

const SigninItems = css`
    margin: auto;
    width: 380px;
    padding: 15px 15px;
`;

export const SigninContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: .1px solid grey;
    ${SigninItems}
`;

export const SigninButtons = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Register = styled.div`
    font-size: 18px;
    font-weight: bold;
    ${SigninItems}
`