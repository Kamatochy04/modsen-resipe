import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { LogoIcon } from '@/assets/icon/LogoIcon';
import { paths } from '@/utils/navigates/paths';

import { BurgerMenu, Switch } from '..';
import { ThemeContext } from '../ThemeProvider/ThemeProvider';
import { FlexContainer, HeaderBlock, HeaderNav, LogoButtonContainer, MenuButton, PageLink, RecipeHost } from '.';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { toggleTheme, themeState } = useContext(ThemeContext);
    const navigate = useNavigate();

    const handleClick = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <HeaderBlock>
            <BurgerMenu isOpen={menuOpen} clouseMenu={() => setMenuOpen(false)} />
            <HeaderNav>
                <LogoButtonContainer>
                    <RecipeHost onClick={() => navigate('')}>
                        <LogoIcon colors={themeState.colors.second_color} />
                        Modsen recipe
                    </RecipeHost>
                    <MenuButton menuOpen={menuOpen} onClick={handleClick} />
                </LogoButtonContainer>
                <FlexContainer>
                    <PageLink onClick={() => navigate(paths.home_page)}>Home</PageLink>
                    <PageLink onClick={() => navigate(paths.coockedRecipe)}>Cooked</PageLink>
                    <Switch onClick={toggleTheme} />
                </FlexContainer>
            </HeaderNav>
        </HeaderBlock>
    );
}

export default Header;
