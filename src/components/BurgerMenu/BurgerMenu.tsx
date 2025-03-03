import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { paths } from '@/utils/navigates/paths';

import { PageLink } from '../Header';
import Switch from '../Switch/Switch';
import { ThemeContext } from '../ThemeProvider/ThemeProvider';
import { Menu } from '.';

type BurgerMenuProps = {
    isOpen: boolean;
    clouseMenu: () => void;
};

function BurgerMenu({ isOpen, clouseMenu }: BurgerMenuProps) {
    const { toggleTheme } = useContext(ThemeContext);
    const navigate = useNavigate();

    const handelClick = (path: string) => {
        navigate(path);
        clouseMenu();
    };

    return isOpen ? (
        <Menu>
            <PageLink onClick={() => handelClick(paths.home_page)}>Home</PageLink>
            <PageLink onClick={() => handelClick(paths.coockedRecipe)}>Cooked</PageLink>
            <Switch onClick={toggleTheme} />
        </Menu>
    ) : null;
}

export default BurgerMenu;
