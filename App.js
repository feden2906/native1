import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Users} from "./components";

export default function App() {
    return (
        <View style={styles.container}>
            <Users/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#d08080',
        paddingTop: '6%'
    },
});
