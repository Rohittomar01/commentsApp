import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
// for Responsive
import { Dimensions } from "react-native"
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
// for api fetch
import axios from "axios";
// for Icons
import { ArrowDownSvgComponent} from '../../assets/Icon/Icons';




export default function DropDown(props) {



    const [selectedAge, setSelectedAge] = useState(10)
    const [isSelected, setIsSelected] = useState(false)
    const [data, setData] = useState([]);
    const [comments, setComments] = useState([]);
    const [listStatus, setListStatus] = useState(false)
    const [name, setName] = useState(name);
    const [filter, setFilter] = useState([])




    //   for fetch post id or username 
    const fetchData = async () => {

        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/comments', { params: { _limit: 100 } });
            setData(response.data)
            // console.log(response.data)

        } catch (error) {
            console.error('Error fetching comments:', error);
            throw error;
        }

    };

    // for show post id and username
    const handleData = () => {
        // console.log('data', data)
        return data.map((item) => {
            return (
                <TouchableOpacity onPress={() => [setIsSelected(!isSelected), setName(item.name), fetchComments(item.postId), handleListStatus()]} style={{ padding: '2%', marginBottom: '4%' }}>
                    <Text style={{ marginTop: '2%',color:'white'}}>({item.postId})  {item.name}</Text>
                </TouchableOpacity>
            )
        })
    }
    /////////////////////////


    // for fetch comments of post 
    const fetchComments = async (postId) => {

        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
            const commentData = response.data;
            return setComments(commentData);
        } catch (error) {
            console.error(`Error fetching comments with postId ${postId}:`, error);
            throw error;
        }

    };
    // for show comments
    const handleComments = () => {

        return comments.map((item) => {
            return (
                <View style={{ padding: '2%', marginBottom: '4%' }}>
                    <Text style={{ marginTop: '2%',color:'white' }}>({item.body})</Text>
                </View>
            )
        })
    }
    //////////////////

    // for show comments list
    const handleListStatus = () => {

        setListStatus(true);
        if (!isSelected) {
            setListStatus(false);
        }
    }

    /////////////////


    useEffect(() => {

        fetchData();
        fetchComments();

    }, [])

    return (

        <View style={styles.view}>
            <TouchableOpacity style={styles.dropdownSelector} onPress={() => [setIsSelected(!isSelected), handleListStatus()]}>
                {isSelected ? <>
                </> : <>
                    <View style={styles.forarrow}>
                        <Text style={{ fontSize: 15, fontWeight: 500 }}>{name ? name : 'Select postId or Post name'}</Text>
                        <View style={{ marginLeft: windowWidth * 0.01 }} ><ArrowDownSvgComponent /></View>
                    </View>
                </>}
            </TouchableOpacity>
            {isSelected ? <>
                <View style={styles.view_02}>
                    <ScrollView style={styles.dropdownArea}>
                        <TouchableOpacity onPress={() => [setIsSelected(!isSelected), setName('Select postId or Post name')]} style={{ padding: '2%' }}>
                            <Text style={{color:'white'}}>Select postId or Post name</Text>
                        </TouchableOpacity>
                        {handleData()}
                    </ScrollView>
                </View>
            </> : <></>}
            <View style={styles.view_03}>
                {listStatus ? <>
                    <ScrollView style={styles.dropdownArea}>
                        <View style={{ padding: '2%' }}>
                            <Text style={{ fontSize: 15, fontWeight: 500, textAlign: 'center' ,color:'white'}}>Comments</Text>
                        </View>
                        <View style={{ padding: '2%' }}>
                            <Text style={{ fontSize: 15, fontWeight: 500, textAlign: 'center',color:'white' }}>{name}</Text>
                        </View>
                        {handleComments()}
                    </ScrollView>

                </> : <></>}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    forarrow: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: windowWidth * 0.65

    },
    view_02: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: windowHeight * 0.32,
        paddingRight: windowWidth * 0.85
    },
    view_03: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: windowHeight * 0.37,
        paddingRight: windowWidth * 0.85
    },
    view: {
        marginTop: '20%',
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center'
    },
    dropdownSelector: {
        width: windowWidth * 0.85,
        height: 'auto',
        padding: '1.5%',
        borderWidth: 1,
        borderRadius: 25,
        borderColor: '#022349',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 30,
        paddingRight: 20,
        zIndex: 1,
        // marginTop: '50%'

    },
    dropdownArea: {
        // marginTop:windowHeight*0.40,
        width: windowWidth * 0.85,
        height: windowHeight * 0.70,
        padding: '4%',
        backgroundColor: '#113946',
        zIndex: 1,
        borderRadius: 20,
        elevation: 2,
        position: 'absolute'
    },



})