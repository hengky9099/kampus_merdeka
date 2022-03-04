import React from 'react'
import {Text, View, Button} from 'react-native';

const App = () => {
  return (
  <View>
    <Navbar />
    <Kotak />
  </View>
  )
}

const Navbar = () => {

  const myName = () => {
    return 'Hengky'
  }

  return(
     <View style={{width: 360, height: 176, backgroundColor: '#D3D9FD'}}>
       <Text style={{width: 70, height: 18, top: 46, left: 16}}>Hi, {myName()}</Text>
       <Text style={{width: 94, height: 20, top: 68, left: 16, fontSize: 14, lineHeight: 20, fontFamily: 'Helvetica', fontWeight: 'bold', color: '#000000'}}>Batam City</Text>
     </View> 
  )
}

const Kotak = () => {
  return(
     <View style={{width: 328, height: 140, top: 104, left: 16, borderRadius: 8, backgroundColor: '#091B6F'}}>
       <Text style={{width: 170, height: 48, top: 128, left: 40, position: 'absolute', fontFamily: 'Helvetica', fontWeight: 'normal', fontSize: 16, lineHeight: 24, color: '#FFFFFF'}}>Sewa Mobil Berkualitas di Kawasanmu</Text>
       <Button style={{position: 'absolute', width: 109, height: 28, left: 40, top: 192, backgroundColor: '#5CB85F', borderRadius: 2, }} title="Sewa Mobil"></Button>
     </View> 
  )
}

export default App;