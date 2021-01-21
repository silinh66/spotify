import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import {
    View,
    Text,
    ScrollView,
    Touchable,
    TouchableOpacity,
    StyleSheet,
    Image
  } from 'react-native';
  import React, {Component} from 'react';

import Swiper from 'react-native-swiper'


const styles = StyleSheet.create({
 container: {
   ...StyleSheet.absoluteFillObject,
   height: "100%",
   width: 400,
   justifyContent: 'flex-end',
   alignItems: 'center',
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 },
});

// const styles = StyleSheet.create({
//   wrapper: {},
//   slide1: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#9DD6EB'
//   },
//   slide2: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#97CAE5'
//   },
//   slide3: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#92BBD9'
//   },
//   text: {
//     color: '#fff',
//     fontSize: 30,
//     fontWeight: 'bold'
//   }
// })



export default () => (
//   <Swiper style={styles.wrapper} showsButtons={true}>
//   <View style={styles.slide1}>
//     <Text style={styles.text}>Hello Swiper</Text>
//   </View>
//   <View style={styles.slide2}>
//     <Text style={styles.text}>Beautiful</Text>
//   </View>
//   <View style={styles.slide3}>
//     <Text style={styles.text}>And simple</Text>
//   </View>
// </Swiper>
   <View style={styles.container}>
     <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
       region={{
         latitude: 21.002557755025496,
         longitude: 105.77964903786778,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
       onRegionChange={(region) => {
         console.log('region', region);
       }}
     >
       <Marker
       draggable
        coordinate={{
          latitude: 21.001999755025496,
          longitude: 105.77991903786778
        }}
        title={"Viettel"}
        description={"Tổng công ty bưu chính Viettel"}
        // image={require('./marker.png')}
        onDragEnd={(e) => {
          console.log('DragEnd: ', e.nativeEvent.coordinate);
        }}
        // pinColor="purple"
       >
         <Image source={require('./marker.png')} style={{width: 40, height: 60}}/>
       </Marker>
     </MapView>
   </View>
);

// import React, {Component} from 'react';
// import {
//   View,
//   Text,
//   ScrollView,
//   Touchable,
//   TouchableOpacity,
//   StyleSheet
// } from 'react-native';
// import LottieView from 'lottie-react-native';
// import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

// const styles = StyleSheet.create({
//   container: {
//     ...StyleSheet.absoluteFillObject,
//     height: 400,
//     width: 400,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   map: {
//     ...StyleSheet.absoluteFillObject,
//   },
//  });

// // export default class App extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       data: ['./amongUs.json'],
// //     };
// //   }

// //   render() {
// //     return (
// //       <View style={styles.container}>
// //         <MapView
// //           provider={PROVIDER_GOOGLE} // remove if not using Google Maps
// //           style={styles.map}
// //           region={{
// //             latitude: 37.78825,
// //             longitude: -122.4324,
// //             latitudeDelta: 0.015,
// //             longitudeDelta: 0.0121,
// //           }}
// //         >
// //         </MapView>
// //       </View>
// //       // <ScrollView style={{backgroundColor: 'pink'}}>
// //       //   {/* <View style={{width: '100%', height: 100}}>
// //       //   <LottieView source={require('./heart.json')} autoPlay loop></LottieView>
// //       // </View>
// //       // <View style={{width: '100%', height: 100}}>
// //       //   <LottieView source={require('./loading.json')} autoPlay loop></LottieView>
// //       // </View>
// //       // <View style={{width: '100%', height: 100}}>
// //       //   <LottieView source={require('./dropdown.json')} autoPlay loop></LottieView>
// //       // </View>
// //       // <View style={{width: '100%', height: 100}}>
// //       //   <LottieView source={require('./loadingRed.json')} autoPlay loop></LottieView>
// //       // </View>
// //       // <View style={{width: '100%', height: 100}}>
// //       //   <LottieView source={require('./loadingBlue.json')} autoPlay loop></LottieView>
// //       // </View>
// //       // <View style={{width: '100%', height: 100}}>
// //       //   <LottieView source={require('./loadingDarkBlue.json')} autoPlay loop></LottieView>
// //       // </View>
// //       // <View style={{width: '100%', height: 100}}>
// //       //   <LottieView source={require('./react.json')} autoPlay loop></LottieView>
// //       // </View>
// //       // <View style={{width: '100%', height: 100}}>
// //       //   <LottieView source={require('./check.json')} autoPlay loop></LottieView>
// //       // </View>
// //       // <View style={{width: '100%', height: 100}}>
// //       //   <LottieView source={require('./checkGreen.json')} autoPlay loop></LottieView>
// //       // </View>
// //       // <View style={{width: '100%', height: 100}}>
// //       //   <LottieView source={require('./loadingLightBlue.json')} autoPlay loop></LottieView>
// //       // </View>
// //       // <View style={{width: '100%', height: 100}}>
// //       //   <LottieView source={require('./playButton.json')} autoPlay loop></LottieView>
// //       // </View> */}
// //       //   {/* <View style={{width: '100%', height: 100}}>
// //       //   <LottieView source={require('./baymax.json')} autoPlay loop></LottieView>
// //       // </View>
// //       // <View style={{width: '100%', height: 100}}>
// //       //   <LottieView source={require('./arrow.json')} autoPlay loop></LottieView>
// //       // </View>
// //       // <View style={{width: '100%', height: 100}}>
// //       //   <LottieView source={require('./nextToClose.json')} autoPlay loop></LottieView>
// //       // </View>
// //       // <View style={{width: '100%', height: 100}}>
// //       //   <LottieView source={require('./checkPurple.json')} autoPlay loop></LottieView>
// //       // </View>
// //       // <View style={{width: '100%', height: 100}}>
// //       //   <LottieView source={require('./humberger.json')} autoPlay loop></LottieView>
// //       // </View>
// //       // <View style={{width: '100%', height: 100}}>
// //       //   <LottieView source={require('./heartEye.json')} autoPlay loop></LottieView>
// //       // </View> */}

// //       //   {/* {this.state.data.map((item, index) => {
// //       //     console.log('item', typeof item);
// //       //     return (
// //       //       <TouchableOpacity
// //       //       key={index}
// //       //         onPress={() => {
// //       //           console.log('pressed');
// //       //           this.setState({
// //       //             data: [...this.state.data, ''],
// //       //           });
// //       //         }}>
// //       //         <View  style={{width: '100%', height: 100}}>
// //       //           <LottieView
// //       //             source={require('./amongUs.json')}
// //       //             autoPlay
// //       //             loop></LottieView>
// //       //         </View>
// //       //       </TouchableOpacity>
// //       //     );
// //       //   })} */}

// //       //   {/* <View style={{width: '100%', height: 100}}>
// //       //   <LottieView source={require('./pumkin.json')} autoPlay loop></LottieView>
// //       // </View>
// //       // <View style={{width: '100%', height: 100}}>
// //       //   <LottieView source={require('./beer.json')} autoPlay loop></LottieView>
// //       // </View>
// //       // <View style={{width: '100%', height: 100}}>
// //       //   <LottieView source={require('./break.json')} autoPlay loop></LottieView>
// //       // </View>
// //       // <View style={{width: '100%', height: 100}}>
// //       //   <LottieView source={require('./rubik2x2.json')} autoPlay loop></LottieView>
// //       // </View> */}
// //       //   {/* <View style={{width: '100%', height: 100}}>
// //       //     <LottieView
// //       //       source={require('./amongUs.json')}
// //       //       autoPlay
// //       //       loop></LottieView>
// //       //   </View> */}
// //       //   {/* <View  style={{width: '100%', height: 100}}>
// //       //             <LottieView
// //       //               source={require('./conffinDance.json')}
// //       //               autoPlay
// //       //               loop></LottieView>
// //       //           </View> */}
// //       //   {/* <View style={{width: '100%', height: 100}}>
// //       //     <LottieView
// //       //       source={require('./amongUsKill.json')}
// //       //       autoPlay
// //       //       loop></LottieView>
// //       //   </View>
// //       //   <View style={{width: '100%', height: 100}}>
// //       //     <LottieView
// //       //       source={require('./amongUsJumpVent.json')}
// //       //       autoPlay
// //       //       loop></LottieView>
// //       //   </View>
// //       //   <View style={{width: '100%', height: 100}}>
// //       //     <LottieView
// //       //       source={require('./amongUsLaugh.json')}
// //       //       autoPlay
// //       //       loop></LottieView>
// //       //   </View> */}
// //       // </ScrollView>
// //     );
// //   }
// // }

// // // import React, {Component} from 'react';
// // // import {
// // //   View,
// // //   Text,
// // //   StyleSheet,
// // //   StatusBar,
// // //   Button,
// // //   TouchableOpacity,
// // // } from 'react-native';

// // // import WheelOfFortune from 'react-native-wheel-of-fortune';

// // // const participants = [
// // //   '%10',
// // //   '%20',
// // //   '%30',
// // //   '%40',
// // //   '%50',
// // //   '%60',
// // //   '%70',
// // //   '%90',
// // //   'FREE',
// // // ];
// // // class App extends Component {
// // //   constructor(props) {
// // //     super(props);

// // //     this.state = {
// // //       winnerValue: null,
// // //       winnerIndex: null,
// // //       started: false,
// // //     };
// // //     this.child = null;
// // //   }

// // //   buttonPress = () => {
// // //     this.setState({
// // //       started: true,
// // //     });
// // //     this.child._onPress();
// // //   };

// // //   render() {
// // //     const wheelOptions = {
// // //       rewards: participants,
// // //       knobSize: 30,
// // //       borderWidth: 5,
// // //       borderColor: '#fff',
// // //       innerRadius: 30,
// // //       duration: 6000,
// // //       backgroundColor: 'transparent',
// // //       textAngle: 'horizontal',
// // //       knobSource: require('./knob.png'),
// // //       onRef: ref => (this.child = ref),
// // //     };
// // //     return (
// // //       <View style={styles.container}>
// // //         <StatusBar barStyle={'light-content'} />
// // //         <WheelOfFortune
// // //           options={wheelOptions}
// // //           getWinner={(value, index) => {
// // //             this.setState({winnerValue: value, winnerIndex: index});
// // //           }}
// // //         />
// // //         {!this.state.started && (
// // //           <View style={styles.startButtonView}>
// // //             <TouchableOpacity
// // //               onPress={() => this.buttonPress()}
// // //               style={styles.startButton}>
// // //               <Text style={styles.startButtonText}>Spin to win!</Text>
// // //             </TouchableOpacity>
// // //           </View>
// // //         )}
// // //         {this.state.winnerIndex != null && (
// // //           <View style={styles.winnerView}>
// // //             <Text style={styles.winnerText}>
// // //               You win {participants[this.state.winnerIndex]}
// // //             </Text>
// // //             <TouchableOpacity
// // //               onPress={() => {
// // //                 this.setState({winnerIndex: null});
// // //                 this.child._tryAgain();
// // //               }}
// // //               style={styles.tryAgainButton}>
// // //               <Text style={styles.tryAgainText}>TRY AGAIN</Text>
// // //             </TouchableOpacity>
// // //           </View>
// // //         )}
// // //       </View>
// // //     );
// // //   }
// // // }
// // // export default App;

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     alignItems: 'center',
// // //     justifyContent: 'center',
// // //     backgroundColor: 'white'
// // //   },
// // //   startButtonView: {
// // //     position: 'absolute',
// // //   },
// // //   startButton: {
// // //     backgroundColor: 'rgba(0,0,0,.5)',
// // //     marginTop: 50,
// // //     padding: 5,
// // //   },
// // //   startButtonText: {
// // //     fontSize: 50,
// // //     color: '#fff',
// // //     fontWeight: 'bold',
// // //   },
// // //   winnerView: {
// // //     position: 'absolute',
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //   },
// // //   tryAgainButton: {
// // //     padding: 10,
// // //   },
// // //   winnerText: {
// // //     fontSize: 30,
// // //   },
// // //   tryAgainButton: {
// // //     padding: 5,
// // //     backgroundColor: 'rgba(0,0,0,0.5)',
// // //   },
// // //   tryAgainText: {
// // //     fontSize: 20,
// // //     fontWeight: 'bold',
// // //     color: '#fff',
// // //   },
// // // });


// import React, { useState, useCallback, useEffect } from 'react'
// import { GiftedChat } from 'react-native-gifted-chat'

// export default function Example() {
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     setMessages([
//       {
//         _id: 1,
//         text: 'Hello developer',
//         createdAt: new Date(),
//         user: {
//           _id: 2,
//           name: 'React Native',
//           avatar: 'https://placeimg.com/140/140/any',
//         },
//       },
//     ])
//   }, [])

//   const onSend = useCallback((messages = []) => {
//     setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
//   }, [])

//   return (
//     <GiftedChat
//       messages={messages}
//       onSend={messages => onSend(messages)}
//       user={{
//         _id: 1,
//       }}
//     />
//   )
// }