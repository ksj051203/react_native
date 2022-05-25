import React from 'react'
import { Button, Text, View } from 'react-native';
import MyButton from './MyButton';

const App = () => {
  return (
    <View 
    style  = {{flex : 1,
                backgroundColor : '#fff',
                alignItems : 'center',
                justifyContent : 'center',
    }}
    >
    <Text style = {{fontSize : 30, marginBottom : 10}}>props</Text>
    <MyButton title = "Button" onPress={() => alert('props')}/>
    <MyButton title = "Button" onPress={() => alert('children')}>Children Props</MyButton>
    <MyButton />
    <Counter />
    </View>
  )

}

export default App;