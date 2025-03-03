import { css, DefaultTheme } from 'styled-components';

type TypographyMixinType = {
    size?: number | string;
    weight?: number | string;
    family?: string;
    height?: number | string;
    color?: string | ((theme: DefaultTheme) => string);
    align?: 'left' | 'right' | 'center' | 'justify';
    transform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
    spacing?: number | string;
    decoration?: 'none' | 'underline' | 'line-through' | 'overline';
    style?: 'normal' | 'italic' | 'oblique';
    wrap?: 'normal' | 'nowrap' | 'pre' | 'pre-wrap' | 'pre-line';
    break?: 'normal' | 'break-all' | 'keep-all' | 'break-word';
};

export const typography = ({
    size,
    weight,
    family,
    height,
    color,
    align,
    transform,
    spacing,
    decoration,
    style,
    wrap,
}: TypographyMixinType) => css`
    ${size && `font-size: ${typeof size === 'number' ? `${size}px` : size};`}
    ${weight && `font-weight: ${weight};`}
    ${family && `font-family: ${family};`}
    ${height && `line-height: ${typeof height === 'number' ? `${height}px` : height};`}
    ${color &&
    `color: ${typeof color === 'function' ? ({ theme }: { theme: DefaultTheme }) => color({ theme }) : color};`}
    ${align && `text-align: ${align};`}
    ${transform && `text-transform: ${transform};`}
    ${spacing && `letter-spacing: ${typeof spacing === 'number' ? `${spacing}px` : spacing};`}
    ${decoration && `text-decoration: ${decoration};`}
    ${style && `font-style: ${style};`}
    ${wrap && `white-space: ${wrap};`}
`;
