import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Güvenli Mod 🛡️</Text>
            <Text style={styles.subtext}>Uygulama sade haliyle çalışıyor mu?</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2196F3', // Mavi
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    subtext: {
        marginTop: 10,
        color: 'white',
    }
});

export default HomeScreen;
