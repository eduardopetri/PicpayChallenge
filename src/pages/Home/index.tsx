import React, {useEffect, useState, ChangeEvent} from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput,Image, FlatList, } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome as Icon } from '@expo/vector-icons';
import {RectButton} from 'react-native-gesture-handler';

interface PicpayResponse {
  id: number;
  name: string;
  img: string;
  username: string;
}
 
const Home = () => {
  const navigation = useNavigation();
  const [allContacts, setAllcontacts] = useState<PicpayResponse[]>([]);
  const [contacts, setContacts] = useState<PicpayResponse[]>([]);
  const [contactName, setContactname] = useState('');
  function handleNavigationToRegisterCreditCard(contact: object){
    navigation.navigate('RegisterCreditCard',contact );

  }
  useEffect(() => {
    if (contactName !== ''){
      const filteredContact = contacts.filter(contact => contact.name.includes(contactName));
      setContacts(filteredContact);
    }
    else{
      setContacts(allContacts);
    }
  },[contactName]);

  useEffect(() => {
    axios.get<PicpayResponse[]>('http://careers.picpay.com/tests/mobdev/users')
    .then(response => {
      const contacts = response.data.sort(function (a, b) {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      })
      setAllcontacts(contacts);
      setContacts(contacts);
    });
  }, []);  


  return(
    <>
      <ScrollView style={styles.container} onScrollToTop={() => {}} >       
      <View style={styles.titleContainer} >
        <Text style={styles.title}>Contatos</Text>
      </View>
      
      <View style={styles.main} >
        <View style={styles.searchSection}>
          <Icon style={styles.searchIcon} name="search" size={16 } color="#ACB1BD"/>
          <TextInput
            style={styles.input}
            placeholder="A quem você deseja pagar?"
            onChangeText={setContactname}
            autoCorrect={false}            
          />  
        </View>
        <ScrollView>
          {contacts.sort().map(contact => (
              <View key={String(contact.id)} style={styles.contactsContainer}>
                <RectButton style={styles.contactButton} 
                  onPress={() => {
                    handleNavigationToRegisterCreditCard(contact);
                  }}
                >
                  <Image source={{uri: contact.img}} style={styles.contactImage} />
                  <View style={{flexDirection: 'column'}}>
                    <Text style={styles.userNameText}>{contact.username}</Text>
                    <Text style={styles.nameText}>{contact.name}</Text>
                  </View>
                </RectButton>
              </View>
          ))}
        </ScrollView> 
      </View>        
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  titleContainer: {
    overflow: 'hidden',
  },
  title: {
    paddingTop: 60,
    paddingLeft: 30,
    paddingBottom: 0,
    color: "#FFFFFF",
    fontSize: 28,
    fontFamily: 'Roboto_700Bold',
  },
  main:{
    flex: 1,
    alignItems: 'center',
  },
  searchIcon: {
    paddingLeft: 48,
  },
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 40,
    backgroundColor: '#2B2C2F',
    borderRadius: 100,
    width: 288,
    height: 40,
  },
  searchSectionSelected: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
    backgroundColor: '#2B2C2F',
    borderRadius: 100,
    width: 288,
    height: 40,
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 3,
    fontSize: 14,
    color: '#ACB1BD',
    fontFamily: 'Roboto_400Regular',
  },
  contactsContainer: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 24,
  },
  contactImage: {
    width: 52,
    height: 52,
    borderWidth: 1,
    borderColor: '#2B2C2F',
    borderRadius: 100,
    marginLeft: 20,
  },
  userNameText:{
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
    color: '#FFFFFF',
    marginLeft: 16,
  },
  nameText: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
    marginLeft: 16,
    color: 'rgba(255, 255, 255, 0.5)',
  },
  contactButton: {
    flexDirection: "row",
    width: '100%',
  },
});

export default Home;