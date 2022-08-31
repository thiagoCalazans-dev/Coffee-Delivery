import styled from "styled-components";

export const UserInformationsContainer = styled.section``;

export const FormContainer = styled.form`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  input {
    padding: 0.75rem;
    background-color: ${(props) => props.theme["base-300"]};
    border: 1px solid ${(props) => props.theme["base-400"]};
    font-size: 0.875rem;
    line-height: 1.3;
    border-radius: 4px;
    color: ${(props) => props.theme["base-700"]};

    &:first-child {
      width: 12.5rem;
    }
  }
`;

export const Card = styled.div`
  background-color: ${(props) => props.theme["base-200"]};
  padding: 2.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const InformationCard = styled.div`
  display: flex;
  gap: 0.5rem;

  > span {
    line-height: 1.3;
    > strong {
      font-weight: 400;
      color: ${(props) => props.theme["base-800"]};
    }
    > p {
      font-size: 0.875rem;
      color: ${(props) => props.theme["base-700"]};
    }
  }
`;

export const Adress = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FormControl = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex: 1;

  input {
    flex: 1;
  }

  &::after {
    content: "Opcional";

    position: absolute;
    right: 0.75rem;
    top: calc(50% - 0.5rem);
    font-size: 0.75rem;
    font-style: italic;
    color: ${(props) => props.theme["base-600"]};
  }
`;

export const FormControlNeighborhood = styled(FormControl)`
  input {
    &:nth-child(2) {
      flex: 1;
    }
    &:last-child {
      width: 3.75rem;
    }
  }
`;

export const RadioGroupControl = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 0.75rem;

  input[type="radio"] {
    display: none;
  }

  label {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;

    flex: 1;
    padding: 1rem;
    border-radius: 6px;
    background-color: ${(props) => props.theme["base-400"]};
    color: ${(props) => props.theme["base-700"]};
    font-size: 0.75rem;
    line-height: 1.6;
    text-transform: uppercase;
    border: 1px solid transparent;
  }

  input[type="radio"] {
    &:checked {
      + label {
        background-color: ${(props) => props.theme["brand-purple-light"]};
        border: 1px solid ${(props) => props.theme["brand-purple"]};
      }
    }
  }
`;
