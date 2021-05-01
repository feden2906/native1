import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { OneUser } from "./OneUser";
import { getUsers } from "../src/api";

export const Users = ({navigation}) => {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    const users = await getUsers();
    setUsers(users);
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
      <View style={[styles.usersList, styles.center]}>
        {
          users.length > 0
              ? <FlatList
                  data={users}
                  keyExtractor={item => item.id.toString()}
                  navigation={navigation}
                  renderItem={({ item }) => <OneUser item={item}/>}
              />
              : <Text>Loading...</Text>
        }
      </View>
  );
}

const styles = StyleSheet.create({
  usersList: {
    minHeight: '90%'
  },
  center: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
