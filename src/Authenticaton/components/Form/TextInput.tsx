import React, { useState } from 'react';
import { TextInput as RNTextInput } from 'react-native';
import { Box } from '../../../components';
import { Feather as Icon } from '@expo/vector-icons';

interface TextInputProps {
    placeholder: string;
    icon: string;
    validator: (input: string) => boolean;
}

const Valid = true;
const Invalid = false;
const Pristine = null;
type InputState = typeof Valid | typeof Invalid | typeof Pristine;

const TextInput = ({ icon }: TextInputProps) => {

    const [state, setState] = useState<InputState>(Pristine);

    return (
        <Box flexDirection="row" alignItems="center">
            <Icon name={icon} />
            <RNTextInput underlineColorAndroid="transparent" />
            {
                (state === Valid || state === Invalid) && (
                    <Box>
                        <Icon name={state === Valid ? "check" : "X"} color="white" />
                    </Box>
                )
            }
        </Box>
    );
};

export default TextInput;