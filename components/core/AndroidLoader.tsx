import Android from '@/assets/svgs/android';
import React from 'react';
import { View, Animated, Easing } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

interface AndroidLoaderProps {
  size?: number;
  color?: string;
  isLoading: boolean; // New prop to control visibility
}

const AndroidLoader: React.FC<AndroidLoaderProps> = ({ size = 100, color = '#3DDC84', isLoading }) => {
  const spinValue = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    if (isLoading) {
      Animated.loop(
        Animated.timing(spinValue, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        })
      ).start();
    } else {
      spinValue.stopAnimation();
    }
  }, [spinValue, isLoading]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const circleSize = size * 1.2;
  const strokeWidth = size * 0.03;

  if (!isLoading) return null;

  return (
    <View className="items-center justify-center" style={{ width: circleSize, height: circleSize }}>
      <Animated.View style={{ 
        position: 'absolute',
        width: circleSize,
        height: circleSize,
        transform: [{ rotate: spin }]
      }}>
        <Svg width={circleSize} height={circleSize} viewBox={`0 0 ${circleSize} ${circleSize}`}>
          <Circle
            cx={circleSize / 2}
            cy={circleSize / 2}
            r={(circleSize - strokeWidth) / 2}
            stroke={'#000'}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            fill="none"
            strokeDasharray={`${circleSize * 0.75} ${circleSize * 0.25}`}
          />
        </Svg>
      </Animated.View>
      <View style={{ position: 'absolute' }}>
        <Android color={'03C988'} width={size * 0.6} height={size * 0.6} />
      </View>
    </View>
  );
};

export default AndroidLoader;