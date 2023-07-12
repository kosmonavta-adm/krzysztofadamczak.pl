import styled, { css } from 'styled-components';

const inputStyles = css<{ error: boolean }>`
    border-radius: 5px;
    border: 1px solid
        ${({ theme, error }) => (error ? theme.colors.error[0] : theme.colors.accent.light[1])};
    font-size: 1rem;
    padding: 8px 16px;
    font-family: ${({ theme }) => theme.font.primary};
    color: ${({ theme }) => theme.colors.black};
    transition: border ${({ theme }) => theme.animation};

    &:focus {
        outline: none;
        border: 1px solid
            ${({ theme, error }) => (error ? theme.colors.error[1] : theme.colors.accent.light[0])};
    }
`;

export const Wrapper = styled.form`
    display: grid;
    gap: 24px;
`;

export const InputWrapper = styled.div`
    display: grid;
    gap: 6px;
`;

export const Input = styled.input`
    ${inputStyles}
`;

export const Textarea = styled.textarea`
    ${inputStyles}
    resize: none;
`;

export const Label = styled.label`
    font-weight: 500;
    font-family: ${({ theme }) => theme.font.primary};
    color: ${({ theme }) => theme.colors.black};
`;
