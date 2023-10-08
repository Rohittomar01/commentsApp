import { View, StyleSheet } from "react-native"
import React from 'react';
import { Dimensions } from "react-native"
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
// for api fetch
import axios from "axios";

import DropDown from "./Common_Screens/Drop_Down";
import { Text } from "react-native";

export default function Home() {




    return (
        <View style={styles.view}>
            <View>
                {<DropDown />}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        height: windowHeight * 1.05,
        backgroundColor: 'white'
    },
    container: {
        backgroundColor: 'white',
        padding: 16,
        marginTop: "10%"
    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});