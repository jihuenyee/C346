import React from 'react';
import { View, Text, StatusBar, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

// Movie Component
const Movie = ({ title, year, icon_name, poster }) => {
    return (
        <View>
            <Image source={poster} style={{width:400, height:500}}/>
            <Icon name={icon_name} size={20}>
                <Text>{title} {year}</Text>
            </Icon>
        </View>
    );
};

const App = () => {
    return (
        <ScrollView>
            <StatusBar hidden={true}/>
            <Movie title="Doctor Sleep" year="2019" icon_name="skull" poster={require("./img/doctor-sleep.jpg")}/>
            <Movie title="Midway" year="2020" icon_name="baby" poster={require("./img/midway.jpg")}/>
        </ScrollView>
    );
};

export default App;
