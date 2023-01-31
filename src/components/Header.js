import styled from 'styled-components';
import { BsSun as Sun, BsMoon as Moon } from 'react-icons/bs';

const StyledHeader = styled.header`
  margin-bottom: 30px;
  padding: 20px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 20px;
  border-bottom: 1px solid rgb(190, 190, 190);
`;

const StyledTitle = styled.h1`
  font-size: 2rem;
  letter-spacing: 1px;
  flex-grow: 1;
  text-align: right;
`;

const StyledThemeToggle = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const StyledThemeBtn = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 1.5rem;
  color: inherit;
  cursor: pointer;
`;

const Header = ({ theme, handleThemeToggle }) => {
  return (
    <div className="container">
      <StyledHeader>
        <StyledTitle>Bulletin Board</StyledTitle>
        <StyledThemeToggle>
          <StyledThemeBtn onClick={handleThemeToggle}>
            {theme === 'light' ? <Moon /> : <Sun />}
          </StyledThemeBtn>
        </StyledThemeToggle>
      </StyledHeader>
    </div>
  );
};

export default Header;
