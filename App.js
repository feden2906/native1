import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Users} from "./components";
import {getUsers} from "./src/api";

export default function App() {
    const [users, setUsers] = useState([]);

    const fetchData = async () => {
        const users = await getUsers();
        console.log(users)
        setUsers(users);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <View style={styles.container}>
            {
                users.length > 0
                    ? <Users users={users}/>
                    : <Text>Loading...</Text>
            }
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
