import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View } from 'react-native';

import Bubble1 from './Bubble1';

export default function App() {

  const randNumber = 3
  
  const randNumber2 = 5

  return (
    <View style={styles.container}>
 
    <Bubble1 loopTime={5200}/>
    <Bubble1 loopTime={6000}/>
    <Bubble1 loopTime={5000}/>
    <Bubble1 loopTime={5500}/>
    <Bubble1 loopTime={5100}/>
    <Bubble1 loopTime={6100}/>
    <Bubble1 loopTime={4800}/>
    <Bubble1 loopTime={4900}/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    flex:1,
    flexDirection:'row',
    backgroundColor: '#fff',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },

});
