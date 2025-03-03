import { EmptyIcon } from '@/assets/icon/EmptyIcon';
import { Container } from '@/pages/FavoritesPage';

import { FlexWrapper, Title, Typography } from './index';

function FavoriteRecipes() {
    return (
        <Container>
            <Title>Favorites dishes</Title>
            <FlexWrapper>
                <Typography>Empty</Typography>
                <EmptyIcon />
            </FlexWrapper>
        </Container>
    );
}

export default FavoriteRecipes;
