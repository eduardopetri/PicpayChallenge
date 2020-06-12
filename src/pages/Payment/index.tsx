import React from 'react';
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, Platform, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import BackPageButton from '../../components/BackPageButton';
import {RectButton} from 'react-native-gesture-handler';
interface Params {
  id: number;
  name: string;
  img: string;
  username: string;
}

const Payment = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const routeParams = route.params as Params;
  console.log(routeParams);
  return(
    <>
      <BackPageButton />
      <View style={styles.container}>

          <Image source={{uri: routeParams.img}} style={styles.contactImage} />
          <Text style={styles.userNameText}>{routeParams.username}</Text>        
          <TextInput 
            style={styles.input}
            placeholder='R$ 0,00' 
            placeholderTextColor='#E5E5E5'
            keyboardType='number-pad'
            autoFocus
          />
          <View style={{flexDirection:'row', paddingTop: 32}}>
            <Text style={styles.cardNameText}>Mastercard 1234 • </Text>
            <TouchableOpacity><Text style={styles.editCardText}>EDITAR</Text></TouchableOpacity>
          </View>

      </View>
            <RectButton style={styles.button}><Text style={styles.textButton}>Pagar</Text></RectButton>
    </>  
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

  },
    contactImage: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#2B2C2F',
    borderRadius: 100,
  }, 
  userNameText:{
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
    color: '#FFFFFF',
  },
  input:{
    fontFamily: 'Roboto_400Regular',
    fontSize: 54,
    color: '#11C76F', 
    paddingTop: 32,
  },
  cardNameText:{
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
    color: '#FFFFFF', 
    
  },
  editCardText:{
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
    color: '#11C76F',   
  },
  button: { 
    alignSelf: 'center',
    backgroundColor: '#11C76F',
    borderRadius : 100,
    width: 296,
    height: 48,
    alignItems: 'center', 
    justifyContent: 'center',
    marginBottom: 13,
  },
  textButton: {
    fontFamily: 'Roboto_500Medium',
    fontSize: 18,
    textAlign: 'center',
    color: '#FFFFFF',
  },
});

export default Payment;
