import React from "react";
import {Button, StyleSheet, Text, View} from "react-native";

export const OneUser = ({ navigation, item}) => {
  const {id, name} = item;
    return (
        <View style={styles.userCard}>
            <Text>{id}--{name}</Text>
            <Button
                title={'Open all info'}
                onPress={() => navigation.navigate('UserDetails', {data: item})}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    userCard: {
        margin: 8,
        borderRadius: 5,
        padding: 15,
        backgroundColor: '#ffdbdb'
    }
})
