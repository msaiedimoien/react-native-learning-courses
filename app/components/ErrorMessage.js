import React from 'react';
import { Text, StyleSheet } from 'react-native';

const ErrorMessage = ({ error, visible }) => {
    if (!error || !visible) return null;
    return (<Text style={styles.error}>{error}</Text>);
};

const styles = StyleSheet.create({
    error: {
        color: 'red',
        fontSize: 16,
        fontFamily: 'ih'
    }
});

export default ErrorMessage;
