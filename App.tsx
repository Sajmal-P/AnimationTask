/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState, type PropsWithChildren, useEffect } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Animated, { FadeInDown, FadeInUp, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';

const App = () => {
  const dataset = [{ img: 'https://images.pexels.com/photos/2887774/pexels-photo-2887774.jpeg?auto=compress&cs=tinysrgb&w=800', name: 'Emily', desc: 'Responsable de marque' }, { img: 'https://images.pexels.com/photos/2887774/pexels-photo-2887774.jpeg?auto=compress&cs=tinysrgb&w=800', name: 'Marcus Waren', desc: 'Responsable de marque' }, { img: 'https://images.pexels.com/photos/2887774/pexels-photo-2887774.jpeg?auto=compress&cs=tinysrgb&w=800', name: 'John Doe', desc: 'Responsable de marque' }, { img: 'https://images.pexels.com/photos/2887774/pexels-photo-2887774.jpeg?auto=compress&cs=tinysrgb&w=800', name: 'Alexander', desc: 'Responsable de marque' }, { img: 'https://images.pexels.com/photos/2887774/pexels-photo-2887774.jpeg?auto=compress&cs=tinysrgb&w=800', name: 'Waren Buffet', desc: 'Responsable de marque' }, { img: 'https://images.pexels.com/photos/2887774/pexels-photo-2887774.jpeg?auto=compress&cs=tinysrgb&w=800', name: 'John Abraham', desc: 'Responsable de marque' }, { img: 'https://images.pexels.com/photos/2887774/pexels-photo-2887774.jpeg?auto=compress&cs=tinysrgb&w=800', name: 'Marcus Waren', desc: 'Responsable de marque' }]

  const [selected, setSelected] = useState(true);
  const scale1 = useSharedValue(0);
  const scale2 = useSharedValue(0);
  const zIndex1 = useSharedValue(0);
  const zIndex2 = useSharedValue(0);
  const animatedStyle1 = useAnimatedStyle(() => {
    'worklet';
    return {
      width: selected ? withTiming(50, {duration: 300}) : withTiming(25, {duration: 300}),
      left: selected ? withTiming(10) : withTiming(45),
      height: selected ? withTiming(50, {duration: 300}) : withTiming(25, {duration: 300}),
      zIndex: zIndex1.value,
      transform: [{scale: !selected ? scale1.value : scale2.value}]
    };
  });
  const animatedStyle2 = useAnimatedStyle(() => {
    'worklet';
    return {
      width: !selected ? withTiming(50, {duration: 300}) : withTiming(25, {duration: 300}),
      left: !selected ? withTiming(-15) : withTiming(0),
      height: !selected ? withTiming(50, {duration: 300}) : withTiming(25, {duration: 300}),
      zIndex: zIndex2.value,
      transform:[{scale: !selected ? scale1.value : scale2.value}]
    };
  });

  const Opacity = useSharedValue(0.3);
  const Opacity2 = useSharedValue(0.3);
  const animatedStyle = useAnimatedStyle(() => {
    'worklet';
    return {
      opacity: selected ? Opacity2.value : Opacity.value,
      // transform:[{scale: !selected ? scale1.value : scale2.value}]
    };
  });


  useEffect(() => {
    if (!selected) {
      Opacity.value = withTiming(1, { duration: 1000 });
      Opacity2.value = withTiming(0.3);
      scale1.value = withTiming(1);
      scale2.value = withTiming(0);
      zIndex1.value = withTiming(0);
      zIndex2.value = withTiming(10, {duration: 50});
    } else {
      Opacity2.value = withTiming(1, { duration: 1000 });
      Opacity.value = withTiming(0.3);
      scale1.value = withTiming(0);
      scale2.value = withTiming(1);
      zIndex1.value = withTiming(10, {duration: 50});
      zIndex2.value = withTiming(0);
    }
  }, [selected])


  const renderItem = ({ item, index }) => {
    return (
      <View style={{ width: 170, height: 300, backgroundColor: '#000', margin: 10, borderRadius: 25, zIndex: 100 }}>
        <Image style={{ height: 150, width: 170, borderTopLeftRadius: 25, borderTopRightRadius: 25 }} source={{ uri: item.img }} />
        <Text style={{ color: '#fff', fontSize: 16, fontWeight: '800', textAlign: 'center', marginTop: 15 }}>
          {item.name}
        </Text>
        <Text style={{ color: '#fff', fontSize: 12, fontWeight: '800', textAlign: 'center' }}>
          {item.desc}
        </Text>
        <View style={{ flexDirection: 'row', borderColor: '#0099cc', alignSelf: 'center', borderWidth: 1, padding: 8, marginTop: 20, borderRadius: 100, paddingHorizontal: 20, alignItems: 'center', justifyContent: 'center' }}>

          <Octicons name="person-add" size={16} color="#0099cc" style={{ marginHorizontal: 5 }} />
          <Text style={{ color: '#0099cc' }}>Connecter</Text>
        </View>
      </View>
    )
  }

  const [selectedIndex, setSelectedIndex] = useState(0);
  const changeView = ({nativeEvent}) => {
    const slide =
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width;
      setSelectedIndex(Math.round(slide));
  };
  return (
    <View style={{ flex: 1, backgroundColor: '#262626' }}>
      <LinearGradient colors={['#000d1a', '#000d1a', '#000d1a', '#000d1a', '#000d1a', '#000d1a', '#000d1a']} style={{
        flex: 1
      }} start={{ x: 0.5, y: 0.5 }} end={{ x: 0.5, y: 1 }}>
        <View style={{ flexDirection: 'row', position: 'absolute', top: 20, zIndex: 100, alignItems: 'flex-end'}}>
          <Animated.View style={[animatedStyle1, {
            borderRadius: 40, alignItems: 'center', justifyContent: 'center',
          }]}>
            <LinearGradient colors={['#006666', '#008080', '#00e6e6', '#00ffff',]} style={{
              flex: 1, width: selected ? 50 : 25, height: selected ? 50 : 25,
              borderRadius: 40,
              alignItems: 'center', justifyContent: 'center'
            }}>
              <TouchableOpacity onPress={() => { console.log(selected, 'seeeee'); setSelected(!selected) }}>
                <MaterialCommunityIcons name="account-group" size={selected ? 30 : 20} color="#fff" />
              </TouchableOpacity>
            </LinearGradient>
          </Animated.View>
          <Animated.View style={[animatedStyle2, {
            borderRadius: 40, alignItems: 'center', justifyContent: 'center',
          }]}>
            <LinearGradient colors={['#ff5500', '#ff7733', '#ff9966', '#ffbb99',]} style={{
              flex: 1, width: !selected ? 50 : 25, height: !selected ? 50 : 25,
              borderRadius: 40,
              alignItems: 'center', justifyContent: 'center'
            }}>
              <TouchableOpacity onPress={() => { console.log(selected, 'sleeeee'); setSelected(!selected) }}>
                <MaterialCommunityIcons name="heart" size={!selected ? 30 : 20} color="#fff" />
              </TouchableOpacity>
            </LinearGradient>
          </Animated.View>
        </View>
        {/* {selected ? ( */}
          <Animated.View style={[{ paddingTop: 50, zIndex: selected ? 10 : -10, backgroundColor: '#262626', flex: 1 }, animatedStyle]}>
            <Text style={{ textAlign: 'center', color: '#fff', fontSize: 20, fontWeight: '800' }}>
              Club
            </Text>
            <Text style={{ textAlign: 'center', color: '#fff', fontSize: 15, fontWeight: '400', marginTop: 25 }}>
              Find the 1500 private club members
            </Text>
            <View style={{ flexDirection: 'row', width: '95%', backgroundColor: '#737373', alignSelf: 'center', marginVertical: 35, borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
              <Octicons name="search" size={23} color="#0099cc" />
              <TextInput value="Search" style={{ width: '85%', marginLeft: 10 }} />
            </View>
            <Text style={{ color: '#fff', fontSize: 16, fontWeight: '800', marginBottom: 15, marginLeft: 15 }}>
              Personnes recommandees
            </Text>
            <FlatList showsVerticalScrollIndicator={false} renderItem={renderItem} numColumns={2} data={dataset} style={{ flexGrow: 1, marginLeft: 10 }} />
          </Animated.View>
         <Animated.View entering={FadeInDown} style={[animatedStyle, {width: '100%', flex: 1, zIndex: !selected ? 10 : -10, position: 'absolute', top: 2, flexGrow: 1 }]}>
          <FlatList showsHorizontalScrollIndicator={false} onScroll={changeView} pagingEnabled horizontal data={dataset} style={{zIndex: 100, width: '100%'}} renderItem={({item, index}) => {
            return (
              <ImageBackground source={{ uri: item?.img }} style={{ height: Dimensions.get('window').height, width: Dimensions.get('window').width, justifyContent: 'flex-end', flex: 1, backgroundColor: 'grey' }}>
                
              </ImageBackground>
              )
          }} />
          <View style={{alignSelf: 'flex-end',position: 'absolute', zIndex: 100, bottom: 10, left: -5 }}>
            <ScrollView horizontal style={{alignSelf: 'center'}}>
            {dataset?.map((_, index) => {
              return(
              <View style={{alignSelf: 'center', flexDirection: 'row'}}>
                <View style={{backgroundColor: selectedIndex === index ? '#fff' : 'grey', width: 5, height: 5, borderRadius: 5, marginHorizontal: 2}} />
            </View>)
            })}
            </ScrollView>
            
          <View style={{ alignSelf: 'flex-end', margin: 15, flexDirection: 'row', }}>
            
                  <View>
                    <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 25 }}>
                      {dataset[selectedIndex].name}, 24
                    </Text>
                    <View style={{ alignSelf: 'flex-start', marginVertical: 12, flexDirection: 'row', alignItems:'center' }}>
                      <Octicons name="location" size={15} color="#fff" />
                      <Text style={{ color: '#fff', fontSize: 14, marginLeft: 5 }}>
                        Paris
                      </Text>
    
                    </View>
                    <Text style={{ color: '#fff', fontSize: 13, maxWidth: '90%', textAlign: 'left' }}>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </Text>
    
                  </View>
                  <View>
                    
          <LinearGradient colors={['#fff', '#000', '#000', '#000','#fff' ]} end={{x: 0.5, y: 1}} style={{backgroundColor: '#fff', alignSelf: 'flex-start', width: 50, height: 50, borderRadius: 50, justifyContent: 'center', alignItems: 'center'}}>
            <MaterialCommunityIcons name="heart" size={30} color="red" />
          </LinearGradient>
          <LinearGradient colors={['#fff', '#000', '#000', '#000','#fff' ]} end={{x: 0.5, y: 1}} style={{backgroundColor: '#fff', alignSelf: 'flex-start', width: 50, height: 50, borderRadius: 50, justifyContent: 'center', alignItems: 'center', marginVertical: 10}}>
            <MaterialCommunityIcons name="email" size={30} color="#fff" />
          </LinearGradient>
                  </View>
                </View></View>

        </Animated.View>
      </LinearGradient>
    </View>
  );
};


export default App;
