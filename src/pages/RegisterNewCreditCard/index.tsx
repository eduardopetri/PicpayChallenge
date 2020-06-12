import React from 'react';
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { FontAwesome as Icon } from '@expo/vector-icons';
import {RectButton} from 'react-native-gesture-handler';
import BackPageButton from '../../components/BackPageButton';

const RegisterNewCreditCard = () => {
  function TextInputColorOnFocus(){
    const underlineColorAndroid='#11C76F'
    console.log(underlineColorAndroid)
  }
  function TextInputColorOnBlur(){
    const underlineColorAndroid='rgba(255, 255, 255, 0.4)'
    console.log(underlineColorAndroid)
  }
  return(
    <>
      <BackPageButton />
      <KeyboardAvoidingView style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}>
        <View style={styles.container}>
          <Text style={styles.title}>
            Cadastrar cartão
          </Text>
          <TextInput 
            placeholder="Número do cartão" 
            placeholderTextColor={'rgba(255, 255, 255, 0.4)'}
            maxLength={16} 
            keyboardType='number-pad' 
            style={styles.longInput}  
            onBlur={() => {TextInputColorOnBlur()}}
            onFocus={() => {TextInputColorOnFocus()}}
            
          /> 
          <TextInput 
            placeholder="Nome do titular" 
            placeholderTextColor={'rgba(255, 255, 255, 0.4)'}
            style={styles.longInput} 
            underlineColorAndroid={'rgba(255, 255, 255, 0.4)'}  
          />
          
          <View style={styles.halfInputContainer}>
            <TextInput 
              placeholder="Vencimento" 
              placeholderTextColor={'rgba(255, 255, 255, 0.4)'}
              maxLength={5} 
              keyboardType='number-pad' 
              underlineColorAndroid={'rgba(255, 255, 255, 0.4)'} 
              style={styles.halfInput} 
            />  
            <TextInput 
              placeholder="CVV"
              placeholderTextColor={'rgba(255, 255, 255, 0.4)'} 
              maxLength={3} 
              keyboardType='number-pad' 
              underlineColorAndroid={'rgba(255, 255, 255, 0.4)'} 
              style={styles.halfInput} 
            /> 
          </View> 
        
        </View>
        <View style={styles.buttonContainer}>
          <RectButton style={styles.button} onPress={() => {}}>
            <Text style={styles.textButton}>Salvar</Text>
          </RectButton>
        </View>
      </KeyboardAvoidingView>
      
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 80,
  },
  title:{
    width: 276,
    height: 32,
    fontFamily:'Roboto_700Bold',
    fontSize: 28,
    lineHeight: 32,
    color: '#FFFFFF',
    alignSelf:'flex-start',
    paddingLeft:20,
    
  },
  longInput:{
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
    lineHeight: 19,
    color: '#FFFFFF',
    width: '90%',
    paddingBottom: 10,
    paddingLeft: 5,
    marginTop: 60,
  },
  halfInputContainer:{
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  halfInput:{
    width: '45%',
    paddingBottom: 10,
    paddingLeft: 5,
    color: '#FFFFFF',
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
    marginTop: 60,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#11C76F',
    borderRadius : 100,
    width: 296,
    height: 48,
    alignItems: 'center', 
    justifyContent: 'center',
    marginBottom: 12,
  },
  textButton: {
    fontFamily: 'Roboto_500Medium',
    fontSize: 18,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  inputFocus:{
    
  }

});


export default RegisterNewCreditCard;