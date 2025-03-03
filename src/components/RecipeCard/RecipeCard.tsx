import { HeartIcon } from '@/assets/icon/HeartIcon';
import { MarkIcon } from '@/assets/icon/MarkIcon';

import { ItemFooter, ItemImage, ItemLabel, ListItem } from '.';

function RecipeCard() {
    return (
        <ListItem>
            <ItemImage src={''} />
            <ItemLabel>Label</ItemLabel>
            <ItemFooter>
                <div>
                    <HeartIcon />
                </div>

                <div>
                    <MarkIcon />
                </div>
            </ItemFooter>
        </ListItem>
    );
}

export default RecipeCard;
