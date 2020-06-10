import React, {useEffect, useState, ChangeEvent} from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput,Image, TouchableOpacity, } from 'react-native';
import axios from 'axios';
import { useNavigation, useRoute } from '@react-navigation/native';
import { FontAwesome as Icon } from '@expo/vector-icons';
import {RectButton} from 'react-native-gesture-handler';

const RegisterCreditCard = () => {
  const navigation = useNavigation();
  function handleNavigateBack() {
    navigation.goBack();
  }
  return(
    <>
      <View>
        <TouchableOpacity>
          <Icon name="angle-left" style={styles.iconBack} size={30} onPress={handleNavigateBack}/>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Image source={require('../../assets/creditcard.png')} width={100} height={70}/>
        <Text style={styles.titleText}>Cadastre um cartão de crédito</Text>
        <Text style={styles.subtitleText}>Para fazer pagamestos para outras 
          pessoas você precisa cadastrar um 
          cartão de crédito pessoal.
        </Text>
        
      </View>
      <View style={styles.buttonContainer}>
        <RectButton style={styles.button}>
          <Text style={styles.textButton}>Cadastrar Cartão</Text>
        </RectButton>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 158,
  },
  iconBack:{
    color: '#11C76F',
    paddingTop: 18,
    paddingLeft: 12,
  },
  titleText: {
    fontFamily: 'Roboto_700Bold',
    color: '#FFFFFF',
    fontSize: 28,
    textAlign: 'center',
    width: 280,
    height: 64,
  },
  subtitleText:{
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    width: 248,
    height: 60,
    textAlign: 'center',
    letterSpacing: -0.3,
    lineHeight: 20,
    paddingTop: 16,
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
});
export default RegisterCreditCard;