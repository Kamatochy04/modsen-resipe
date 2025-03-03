type ThemeMedia = {
    mobileS: string;
    phone: string;
    tablet: string;
    smallLaptop: string;
};

type ThemeColors = {
    main_color: string;
    second_color: string;
    main_text_color: string;
    second_text_color: string;
};

type ThemeMargin = {
    XXL: string;
    XL: string;
    L: string;
    LM: string;
    M: string;
    MS: string;
    S: string;
    XS: string;
    auto: string;
    XXS: string;
    XXXS: string;
    SM: string;
    XSM: string;
    none: string;
};

type ThemePadding = {
    XL: string;
    L: string;
    M: string;
    S: string;
    XS: string;
    XXS: string;
    none: string;
};

export type ThemeType = {
    media: ThemeMedia;
    colors: ThemeColors;
    margin: ThemeMargin;
    padding: ThemePadding;
};
