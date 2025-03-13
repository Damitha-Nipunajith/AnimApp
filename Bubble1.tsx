import { StatusBar } from 'expo-status-bar';
import { Animated,  StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { useEffect,useState,useRef } from 'react';

type loopProps = {
  loopTime: number;
};

export default function Bubble1({loopTime}:loopProps) {
  
  const{width,height}=useWindowDimensions()
  const [isGone,setIsGone] = useState(true)


  const opacityAnim = useRef(new Animated.Value(0))
  const scaleAnim = useRef(new Animated.Value(0))
  const floatAnim = useRef(new Animated.Value(0))
  const slideAnim = useRef(new Animated.Value(0))

  useEffect(()=>{

    opacityAnim.current.setValue(0);
    scaleAnim.current.setValue(0);
    floatAnim.current.setValue(0);
    slideAnim.current.setValue(0);

    onStart()

    const timer = setTimeout(() => {
      setIsGone(prev => !prev);
    }, loopTime);
    return () => clearTimeout(timer);

  },[isGone])

const onStart = () => {

  const animationSequence = [30, -30, 30, -30].map((num) =>
    Animated.timing(slideAnim.current, {
     toValue: num,
     duration: 1000,
     useNativeDriver: true,
    })
   )
  
   Animated.sequence(animationSequence).start()

// Animated.sequence([

//   Animated.timing(slideAnim.current,{
//     toValue:30,
//     duration: 1000,
//     useNativeDriver:true
//   }),
//   Animated.timing(slideAnim.current,{
//     toValue:-30,
//     duration: 1000,
//     useNativeDriver:true
//   }),
//   Animated.timing(slideAnim.current,{
//     toValue:30,
//     duration: 1000,
//     useNativeDriver:true
//   }),
//   Animated.timing(slideAnim.current,{
//     toValue:-30,
//     duration: 1000,
//     useNativeDriver:true
//   }),
//   Animated.timing(slideAnim.current,{
//     toValue:30,
//     duration: 1000,
//     useNativeDriver:true
//   }),
//   Animated.timing(slideAnim.current,{
//     toValue:-30,
//     duration: 1000,
//     useNativeDriver:true
//   })

// ]).start()

  Animated.timing(opacityAnim.current,{
    toValue:1,
    duration: 5000,
    useNativeDriver:true
  }).start()

  Animated.timing(scaleAnim.current,{
    toValue:1,
    duration: 5000,
    useNativeDriver:true
  }).start()

  Animated.timing(floatAnim.current,{
    toValue:-height-30,
    duration: 5000,
    useNativeDriver: true
  }).start()

}

  return (

      <Animated.View  style={[styles.circle,{opacity:opacityAnim.current,transform:[{scale:scaleAnim.current},{translateY:floatAnim.current},{translateX:slideAnim.current}]}]}>
      </Animated.View>

  );
}

const styles = StyleSheet.create({

  circle:{
    height:50,
    width:50,
    backgroundColor: '#ADD8E6',
    borderRadius:500
  },

});
