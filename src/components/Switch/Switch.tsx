import { useState } from 'react';

import { Slider, SwitchContainer, SwitchInput } from '.';

interface SwitchProps {
    checked?: boolean;
    onClick?: () => void;
}

function Switch({ checked = false, onClick }: SwitchProps) {
    const [isChecked, setIsChecked] = useState(checked);

    const handleToggle = () => {
        setIsChecked(!isChecked);
        if (onClick) {
            onClick();
        }
    };

    return (
        <SwitchContainer>
            <SwitchInput type="checkbox" checked={isChecked} onChange={handleToggle} />
            <Slider checked={isChecked} onClick={handleToggle} />
        </SwitchContainer>
    );
}

export default Switch;
