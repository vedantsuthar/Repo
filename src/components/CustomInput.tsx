import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

type CustomInputProps = {
    value: string;
    setValue: (value: string) => void;
    placeholder: string;
    secureTextEntry?: boolean;
    multiline?: boolean;
    numberOfLines?: number;
};

const CustomInput = (props: CustomInputProps) => {
    return (
        <View style={styles.container}>
            <TextInput
                value={props.value}
                onChangeText={props.setValue}
                placeholder={props.placeholder}
                style={styles.input}
                secureTextEntry={props.secureTextEntry}
                multiline={props.multiline}
                numberOfLines={props.numberOfLines}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        borderColor: '#E8E8E8',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 5,
    },
    input: {},
});

export default CustomInput;
