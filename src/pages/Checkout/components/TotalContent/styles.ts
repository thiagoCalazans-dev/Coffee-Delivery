import styled from "styled-components";

export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding-top: 1.5rem;
  color: ${(props) => props.theme["base-700"]};
`;

interface SubTotalContentProps {
  big?: boolean;
}

export const SubTotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 1.3;
`;

export const SubTotalContent = styled.span<SubTotalContentProps>`
  color: ${(props) => props.big && props.theme["base-800"]};
  font-weight: ${(props) => props.big && 700};
`;

export const SubTotalDescription = styled(SubTotalContent)`
  font-size: ${(props) => (props.big ? "1.25rem" : "0.875rem")};
`;
export const SubTotalValue = styled(SubTotalContent)`
  font-size: ${(props) => (props.big ? "1.25rem" : "1rem")};
`;
