import React from "react";
import {FlatList, View, StyleSheet} from "react-native";
import {OneUser} from "./OneUser";

export const Users = ({users}) => {

    return (
        <View style={styles.usersList}>
            <FlatList
                data={users}
                renderItem={({ item }) => {
                  return <OneUser item={item}/>
                }}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    usersList: {
        backgroundColor: '#d99a9a',
        height: '100%'
    },
});
