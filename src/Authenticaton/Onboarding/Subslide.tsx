import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from '../../components';

interface SubslideProps {
    subtitle: string;
    description: string;
    last?: boolean;
    onPress: () => void;
}

const Subslide = ({ subtitle, description, last, onPress }: SubslideProps) => {
    return (
        <View style={styles.container}>
            <Text variant="title2" style={styles.subtitle}>{subtitle}</Text>
            <Text variant="body" style={styles.description}>{description}</Text>
            <Button
                label={last ? "Let's get started" : "Next"}
                variant={last ? "primary" : "default"}
                {...{ onPress }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        padding: 44,
        flex: 1
    },
    subtitle: {
        marginBottom: 12,
        textAlign: "center"
    },
    description: {
        color: "#0C0D34",
        textAlign: "center",
        marginBottom: 40
    }
})

export default Subslide;
