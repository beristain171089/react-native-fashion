import React, { ReactNode } from 'react';
import { Image, Dimensions, StyleSheet, StatusBar } from 'react-native';
import theme, { Box } from './Theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const assets = [require("./assets/patterns/1.png")]

const { width } = Dimensions.get("window");
const aspectRatio = 750 / 1145;
const height = width * aspectRatio;

interface ContainerProps {
    children: ReactNode;
    footer: ReactNode;
}

const Container = ({ children, footer }: ContainerProps) => {

    const insets = useSafeAreaInsets();

    return (
        <Box
            flex={1}
            backgroundColor="secondary"
        >
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />
            <Box backgroundColor="white">
                <Box
                    borderBottomLeftRadius="xl"
                    overflow="hidden"
                    height={height * 0.61}
                >
                    <Image
                        source={assets[0]}
                        style={{
                            width,
                            height,
                            borderBottomLeftRadius: theme.borderRadii.xl
                        }}
                    />
                </Box>
            </Box>
            <Box
                flex={1}
                overflow="hidden"
            >
                <Image
                    source={assets[0]}
                    style={{
                        ...StyleSheet.absoluteFillObject,
                        width,
                        height,
                        top: -height * 0.61
                    }}
                />
                <Box
                    borderRadius="xl"
                    borderTopLeftRadius={0}
                    backgroundColor="white"
                    flex={1}
                >
                    {children}
                </Box>
            </Box>
            <Box backgroundColor="secondary" paddingTop="m">
                {footer}
                <Box height={insets.bottom} />
            </Box>
        </Box>
    )
}

export default Container;