import React from 'react';
import { Animated, View } from 'react-native';

let ENABLE_SCREENS = true;

export function enableScreens(shouldEnableScreens = true) {
  ENABLE_SCREENS = shouldEnableScreens;
}

export function screensEnabled() {
  return ENABLE_SCREENS;
}

export class NativeScreen extends React.Component {
  render() {
    const { active, activityState, style, enabled = true, ...rest } = this.props;
    if (active !== undefined && activityState === undefined) {
      activityState = active !== 0 ? 2 : 0; // change taken from index.native.js
    }
    return (
      <View
        style={[
          style,
          ENABLE_SCREENS && enabled && activityState !== 2
            ? { display: 'none' } 
            : null,
        ]}
        {...rest}
      />
    );
  }
}

export const Screen = Animated.createAnimatedComponent(NativeScreen);

export const ScreenContainer = View;

export const NativeScreenContainer = View;

export const shouldUseActivityState = true;
