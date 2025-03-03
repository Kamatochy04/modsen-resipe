import { css } from 'styled-components';

type FlexMixinType = {
    gap?: number;
    flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    display?: 'flex' | 'inline-flex' | 'none';
    flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    alignItems?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
    alignContent?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
    flexGrow?: number;
    flexShrink?: number;
    flexBasis?: string | number;
    order?: number;
};

export const flexContainer = ({
    gap,
    flexDirection = 'row',
    display = 'flex',
    flexWrap = 'nowrap',
    justifyContent = 'center',
    alignItems = 'center',
    alignContent,
    flexGrow,
    flexShrink,
    flexBasis,
    order,
}: FlexMixinType) => css`
    display: ${display};
    flex-direction: ${flexDirection};
    flex-wrap: ${flexWrap};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
    ${alignContent && `align-content: ${alignContent};`}
    ${gap !== undefined && `gap: ${gap}px;`}
    ${flexGrow !== undefined && `flex-grow: ${flexGrow};`}
    ${flexShrink !== undefined && `flex-shrink: ${flexShrink};`}
    ${flexBasis !== undefined && `flex-basis: ${flexBasis};`}
    ${order !== undefined && `order: ${order};`}
`;
