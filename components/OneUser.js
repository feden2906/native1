import React from "react";
import {Button, StyleSheet, Text, View} from "react-native";

export const OneUser = ({item: {id, name, email, phone, website,}}) => {
    return (
        <View style={styles.userCard}>
            <Text>{id}--{name}</Text>
            <Button
                title={'Open all info'}
                onPress={() => alert(
                    `name: ${name}\n
                    email: ${email}\n
                    phone: ${phone}\n
                    website: ${website}\n`
                )}
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
