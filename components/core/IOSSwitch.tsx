import React from 'react';
import { TouchableWithoutFeedback, Animated, View } from 'react-native';

const AnimatedView = Animated.createAnimatedComponent(View);

interface IOSSwitchProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
  disabled?: boolean;
}

const IOSSwitch: React.FC<IOSSwitchProps> = ({ value, onValueChange, disabled = false }) => {
  const [switchAnimation] = React.useState(new Animated.Value(value ? 1 : 0));

  React.useEffect(() => {
    Animated.timing(switchAnimation, {
      toValue: value ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [value, switchAnimation]);

  const handlePress = () => {
    if (!disabled) {
      onValueChange(!value);
    }
  };

  const switchTranslate = switchAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [2, 22],
  });

  const switchColor = switchAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgb(233, 233, 234)', 'rgb(52, 199, 89)'],
  });

  return (
    <TouchableWithoutFeedback onPress={handlePress} disabled={disabled}>
      <AnimatedView
        className="w-[51px] h-[31px] rounded-full justify-center"
        style={{ backgroundColor: switchColor }}
      >
        <AnimatedView
          className="w-[27px] h-[27px] rounded-full bg-white shadow-md"
          style={{
            transform: [{ translateX: switchTranslate }],
          }}
        />
      </AnimatedView>
    </TouchableWithoutFeedback>
  );
};

export default IOSSwitch;