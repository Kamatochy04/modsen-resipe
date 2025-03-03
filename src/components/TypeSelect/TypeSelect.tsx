import { useState } from 'react';

import { useFilterContext } from '@/hooks/useFilterContext';
import { DietTypes } from '@/types/dietTypes';
import { DishTypes } from '@/types/dishTypes';

import { Input, Option, OptionsBlock, TypeSelectBox } from '.';

type Props = {
    type: typeof DishTypes | typeof DietTypes;
    setFieldValue: (field: string, value: string) => void;
    value: string;
};

function TypeSelect({ type, setFieldValue, value }: Props) {
    const { setDiet, setDish } = useFilterContext();
    const [dropped, setDropped] = useState(false);

    const placeholder = type === DishTypes ? 'Select by dish type' : 'Select by diet';
    const name = type === DishTypes ? 'dish' : 'diet';

    const selectOption = (value: string) => {
        const enumValue = value as keyof typeof type;
        setFieldValue(name, enumValue === DishTypes.Any || enumValue === DietTypes.Any ? '' : type[enumValue]);
        setDropped(false);

        if (type === DishTypes) {
            setDish(DishTypes[enumValue]);
        } else {
            setDiet(DietTypes[enumValue]);
        }
    };

    const handleInputDropdown = () => {
        setDropped(!dropped);
    };

    return (
        <TypeSelectBox>
            <Input
                name={name}
                type="text"
                readOnly
                placeholder={placeholder}
                value={value}
                onClick={handleInputDropdown}
                dropped={dropped}
            />
            {dropped && (
                <OptionsBlock>
                    {Object.keys(type)
                        .filter((e) => isNaN(Number(e)))
                        .map((e: string, index: number) => (
                            <Option onClick={() => selectOption(e)} key={index} value={e}>
                                {type[e as keyof typeof type]}
                            </Option>
                        ))}
                </OptionsBlock>
            )}
        </TypeSelectBox>
    );
}

export default TypeSelect;
