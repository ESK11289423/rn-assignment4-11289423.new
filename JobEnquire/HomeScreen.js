import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const HomeScreen = ({ route }) => {
return(
    <View style={styles.container}>
        <Text>
            HomeScreen
        </Text>
    </View>    
)
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingHorizontal:20,
        paddingVertical:100
    }
})

export default HomeScreen;
