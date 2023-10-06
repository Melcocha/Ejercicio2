import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const AddContactScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');

  const handleAddContact = () => {
    // Validar y guardar el contacto en AsyncStorage
    // Luego, regresar a la pantalla de ContactsListScreen
    // Puedes usar AsyncStorage o tu método de almacenamiento preferido aquí
    const newContact = {
      name,
      lastName,
      phone,
    };

    navigation.navigate('ContactsListScreen', {
        name,
        lastName,
        phone,
      });

    // Guardar el nuevo contacto en tu almacenamiento (por ejemplo, AsyncStorage)

    // Navegar de regreso a ContactsListScreen
    navigation.navigate('ContactsListScreen');
  };

  return (
    <View>
      <Text>Ingresa los datos del contacto:</Text>
      <TextInput
        placeholder="Nombre"
        onChangeText={text => setName(text)}
        value={name}
      />
      <TextInput
        placeholder="Apellido"
        onChangeText={text => setLastName(text)}
        value={lastName}
      />
      <TextInput
        placeholder="Número de teléfono"
        onChangeText={text => setPhone(text)}
        value={phone}
      />
      <Button title="Agregar Contacto" onPress={handleAddContact} />
    </View>
  );
};

export default AddContactScreen;

