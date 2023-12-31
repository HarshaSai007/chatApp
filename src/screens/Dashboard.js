import React, { useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import TextInput from '../components/TextInput'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const Dashboard = () => {
  const navigation = useNavigation()
  const [name, setName] = useState('')

  return (
    <View style={styles.container}>
      <View style={styles.circle} />
      <View style={{ marginTop: 64 }}>
        <Image
          source={require('../assets/chat.png')}
          style={{ width: 100, height: 100, alignSelf: 'center' }}
        />
      </View>
      <View style={{ marginHorizontal: 32 }}>
        <Text style={styles.header}>Username</Text>
        <TextInput
          placeholder="Enter Name"
          onChangeText={(name) => {
            setName(name)
          }}
          value={name}
        />
        <View style={{ alignItems: 'flex-end', marginTop: 64 }}>
          <TouchableOpacity
            style={styles.continue}
            onPress={() => navigation.navigate('ChatScreen')}
          >
            <AntDesign name="rightcircle" size={44} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F5F7',
  },
  circle: {
    width: 500,
    height: 500,
    borderRadius: 500 / 2,
    backgroundColor: '#FFF',
    position: 'absolute',
    left: -120,
    top: -20,
  },
  header: {
    fontWeight: '800',
    fontSize: 30,
    color: '514E5A',
    marginTop: 32,
    marginLeft: 32,
  },
  input: {
    marginTop: 32,
    height: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#BAB7C30',
    borderRadius: 30,
    paddingHorizontal: 16,
    color: '#514E5A',
    fontWeight: '600',
  },
  continue: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
