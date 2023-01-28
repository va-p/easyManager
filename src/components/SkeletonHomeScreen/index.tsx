import React, { useEffect } from 'react';
import { Container, Title, Product } from './styles';

import Animated, { EasingNode } from 'react-native-reanimated';

import theme from '@themes/theme';

export function SkeletonHomeScreen() {
  const skeletonAnimatedValue = new Animated.Value(0)

  const skeletonAnimated = () => {
    skeletonAnimatedValue.setValue(0)
    Animated.timing(
      skeletonAnimatedValue,
      {
        toValue: 1,
        duration: 500,
        easing: EasingNode.out(EasingNode.linear)
      }
    ).start(() => {
      setTimeout(() => {
        skeletonAnimated()
      }, 500);
    })
  };

  const translateX = skeletonAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-30, 100]
  });
  const translateX2 = skeletonAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-80, 380]
  });

  useEffect(() => {
    skeletonAnimated()
  }, []);

  return (
    <Container>
      <Title>
        <Animated.View style={{ width: '30%', height: 32, opacity: 0.5, backgroundColor: theme.COLORS.BACKGROUND, transform: [{ translateX: translateX }] }}></Animated.View>
      </Title>

      <Product>
        <Animated.View style={{ height: '100%', backgroundColor: theme.COLORS.SHAPE }}>
          <Animated.View style={{ width: '20%', height: '100%', opacity: 0.5, backgroundColor: theme.COLORS.BACKGROUND, transform: [{ translateX: translateX2 }] }}></Animated.View>
        </Animated.View>
      </Product>

      <Product>
        <Animated.View style={{ height: '100%', backgroundColor: theme.COLORS.SHAPE }}>
          <Animated.View style={{ width: '20%', height: '100%', opacity: 0.5, backgroundColor: theme.COLORS.BACKGROUND, transform: [{ translateX: translateX2 }] }}></Animated.View>
        </Animated.View>
      </Product>

      <Product>
        <Animated.View style={{ height: '100%', backgroundColor: theme.COLORS.SHAPE }}>
          <Animated.View style={{ width: '20%', height: '100%', opacity: 0.5, backgroundColor: theme.COLORS.BACKGROUND, transform: [{ translateX: translateX2 }] }}></Animated.View>
        </Animated.View>
      </Product>

      <Product>
        <Animated.View style={{ height: '100%', backgroundColor: theme.COLORS.SHAPE }}>
          <Animated.View style={{ width: '20%', height: '100%', opacity: 0.5, backgroundColor: theme.COLORS.BACKGROUND, transform: [{ translateX: translateX2 }] }}></Animated.View>
        </Animated.View>
      </Product>
    </Container>
  );
}