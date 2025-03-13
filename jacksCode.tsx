import { StatusBar } from 'expo-status-bar'
import { useEffect, useRef } from 'react'
import {
 Animated,
 StyleSheet,
 Text,
 useWindowDimensions,
 View,
} from 'react-native'

function Bubble() {
 const { width, height } = useWindowDimensions()

 const translateY = useRef(new Animated.Value(height)).current
 const opacity = useRef(new Animated.Value(0)).current
 const scale = useRef(new Animated.Value(0.5)).current
 const drift = useRef(new Animated.Value(Math.random() * width)).current

 useEffect(() => {
  const startAnimation = () => {
   const length = Math.random() * 5000 + 2000

   Animated.timing(translateY, {
    toValue: -100,
    duration: length,
    useNativeDriver: true,
   }).start(() => {
    translateY.setValue(height)
    opacity.setValue(0)
    scale.setValue(0.5)
    startAnimation()
   })
   Animated.timing(opacity, {
    toValue: 1,
    duration: length / 2,
    useNativeDriver: true,
   }).start()
   Animated.timing(scale, {
    toValue: 1.5,
    duration: (length / 5) * 3,
    useNativeDriver: true,
   }).start()

   Animated.timing(drift, {
    toValue: Math.random() * width,
    duration: length - 1000,
    useNativeDriver: true,
   }).start()
  }

  startAnimation()
 }, [])

 return (
  <Animated.View
   style={[
    styles.bubble,
    { transform: [{ translateY }, { scale }, { translateX: drift }] },
    { opacity },
   ]}
  />
 )
}

export default function App() {
 const bubbleArray = new Array(10).fill(null)
 return (
  <View style={styles.container}>
   {bubbleArray.map((_, index) => (
    <Bubble key={index} />
   ))}
   <StatusBar style="auto" />
  </View>
 )
}

const styles = StyleSheet.create({
 bubble: {
  position: 'absolute',
  width: 50,
  height: 50,
  top: 0,
  left: 0,
  borderRadius: 25,
  backgroundColor: 'lightblue',
 },
 container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
 },
})
 