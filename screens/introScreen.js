import { View,Text ,Image} from "react-native"
import {useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
// for Responsive
import { Dimensions } from "react-native"
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
// for text responsive
import {scale} from'react-native-size-matters'



export default function Intro_Screen(){

    const navigation=useNavigation();
    const handleNavigate=()=>{
        setTimeout(()=>{
            navigation.navigate("Home");
        },2000)
    }

    useEffect(()=>{
        handleNavigate();
    },[])

    return(
        <View style={{ display:'flex',height:windowHeight*0.90,justifyContent:'center',alignContent:'center',alignItems:'center'}}>
          
            <Text style={{color:'#113946',fontSize:scale(500),textAlign:'center', position:'relative',zIndex:0}}>c</Text>
            <Text style={{ paddingLeft:windowWidth*0.32,paddingTop:windowHeight*0.22,color:'#113946',fontSize:scale(14),zIndex:1,position:'absolute'}}>welcome To comments</Text>

        </View>
    )
}