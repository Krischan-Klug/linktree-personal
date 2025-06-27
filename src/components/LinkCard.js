import styled from "styled-components";

const StyledLinkCard = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  min-width: 200px;
  text-decoration: none;
  color: inherit;
`;

const StyledH3 = styled.h3`
  margin-left: 0.5rem;
`;

const StyledImg = styled.img`
  margin-right: 0.5rem;
`;

export default function LinkCard({ refLink, title, refIcon }) {
  return (
    <StyledLinkCard href={refLink} target="_blank" rel="noopener noreferrer">
      <StyledH3>{title}</StyledH3>
      <StyledImg src={refIcon} alt={title} />
    </StyledLinkCard>
  );
}
