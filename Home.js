
import { Alert, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = () => {
    const cakelink = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpr5rbcMcH0JupWbG-29eyr0gTvPm37DFDuP-ey6tqsTp3NEp9yblbxO4_Jv3uEo0OwU8&usqp=CAU'
  return (
    <View style={styles.container}>
        <Text style={{color:'pink',fontSize:20,fontWeight:'bold'}}>Happy birthday</Text>
      <Image style={{width:'100%',height:'80%'}} source={{uri:cakelink}}/>
      <Pressable style={styles.send} onPress={()=>{
        Alert.alert('birthday wish sent...')
      }}>
        <Text style={{color:'pink',fontSize:20,fontWeight:'bold'}}>send</Text>
      </Pressable>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center'
    },
    send:{
        width:'98%',
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:3,
        borderColor:'pink',
        marginTop:5,
        borderRadius:5
    }
})