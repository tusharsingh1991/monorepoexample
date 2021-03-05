import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export function AppHeader() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Stand Alone React Native Header</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 200,
        backgroundColor: '#c3c3c3',
    },
    text: {
        fontSize: 36,
        fontWeight: '600',
    },
})