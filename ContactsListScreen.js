import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const ContactsListScreen = () => {
  const [contacts, setContacts] = useState([]);
  const navigation = useNavigation();
  

  useEffect(() => {
    // Cargar los contactos desde AsyncStorage al cargar la pantalla
    loadContacts();
  }, []);

  const loadContacts = async () => {
    try {
      const contactsJSON = await AsyncStorage.getItem('contacts');
      if (contactsJSON !== null) {
        const storedContacts = JSON.parse(contactsJSON);
        setContacts(storedContacts);
      }
    } catch (error) {
      console.error('Error al cargar contactos:', error);
    }
  };

  const handleAddContact = async () => {
    try {
      // Obtener los contactos existentes de AsyncStorage
      const existingContacts = await AsyncStorage.getItem('contacts');
      let contactsArray = [];

      if (existingContacts) {
        contactsArray = JSON.parse(existingContacts);
      }

      // Definir el nuevo contacto con los datos ingresados en AddContactScreen.js
      const newContact = {
        id: Date.now().toString(), // Utiliza un identificador único
        name,
        lastName,
        phone,
      };
      
      // Agregar el nuevo contacto al arreglo existente
      contactsArray.push(newContact);

      // Guardar el arreglo actualizado en AsyncStorage
      await AsyncStorage.setItem('contacts', JSON.stringify(contactsArray));

      // Actualizar el estado para reflejar el nuevo contacto
      setContacts(contactsArray);

      // Navegar de regreso a la pantalla de ContactsListScreen
      navigation.navigate('ContactsListScreen');
    } catch (error) {
      console.error('Error al agregar un contacto:', error);
    }
  };

  const handleRemoveContact = async (contactId) => {
    try {
      // Obtener los contactos existentes de AsyncStorage
      const existingContacts = await AsyncStorage.getItem('contacts');
      let contactsArray = [];

      if (existingContacts) {
        contactsArray = JSON.parse(existingContacts);
      }

      // Filtrar el contacto que deseas eliminar por su ID
      const updatedContacts = contactsArray.filter((contact) => contact.id !== contactId);

      // Guardar el arreglo actualizado en AsyncStorage
      await AsyncStorage.setItem('contacts', JSON.stringify(updatedContacts));

      // Actualizar el estado para reflejar la lista actualizada de contactos
      setContacts(updatedContacts);
    } catch (error) {
      console.error('Error al eliminar un contacto:', error);
    }
  };

  return (
    <View>
      <Text>Contactos</Text>
      <Button 
        title="Agregar Contacto" 
        onPress={() => navigation.navigate('AddContact')} 
      />
      <FlatList
        data={contacts}
        keyExtractor={(item, index) => index.toString()}// Usar el índice como clave
        renderItem={({ item }) => (
            <View>
            <Text>{item.name}</Text>
            <Text>{item.phone}</Text>
            <Button
                title="Eliminar"
                onPress={() => handleRemoveContact(item.id)}
            />
            </View>
        )}
     />
    </View>
  );
};

export default ContactsListScreen;
