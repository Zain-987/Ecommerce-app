import React, {useRef} from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import BannerData from '../utils/BannerData';

const HomeCarousel = () => {
  const carouselRef = useRef(null);
  console.log('====================================');
  console.log(BannerData);
  console.log('====================================');

  const renderItem = ({item, index}: any) => (
    <View>
      <Image
        source={{uri: item.coverImageUri}}
        height={200}
        style={{width: '100%', borderRadius: 10}}
        // style={{}}
      />
      <Text
        style={{
          backgroundColor: item.cornerLabelColor,
          position: 'absolute',
          fontSize: 12,
          padding: 5,
          fontWeight: '700',
        }}>
        {item.cornerLabelText}
      </Text>
    </View>
  );

  return (
    <View style={{marginHorizontal: Dimensions.get('screen').width * 0.02}}>
      <Carousel
        layout={'tinder'}
        ref={carouselRef}
        loop
        autoplay
        data={BannerData}
        renderItem={renderItem}
        sliderWidth={Dimensions.get('screen').width * 0.96}
        itemWidth={Dimensions.get('screen').width * 1}
        windowSize={1} // Set an appropriate value for windowSize
      />
    </View>
  );
};

export default HomeCarousel;
