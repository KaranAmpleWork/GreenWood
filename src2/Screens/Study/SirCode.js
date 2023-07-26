import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { Button as NativeButton } from 'react-native-elements';
import theme from '@theme';
​
const styles = StyleSheet.create({
  base: {
    height: 62,
    borderRadius: 31,
    width: '100%',
  },
  primary: {
    backgroundColor: theme.colors.primary[0],
    height: 60,
    borderRadius: 30,
  },
  full: {
    backgroundColor: theme.colors.primary[0],
    height: 60,
    borderRadius: -50,
  },
  secondary: {
    backgroundColor: theme.colors.primary[0],
    borderWidth: 1,
  },
  outline: {
    backgroundColor: theme.colors.primary[0],
    borderWidth: 2,
  },
  transparent: {
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  primaryTitle: {
    color: 'white',
    fontSize: 19,
    letterSpacing: 1,
    fontFamily: theme.fontFamily,
  },
  fullTitle: {
    color: 'white',
    fontSize: 19,
    letterSpacing: 1,
    fontWeight: '500',
    fontFamily: theme.fontFamily,
  },
  secondaryTitle: {
    color: theme.colors.primary[0],
    fontSize: 19,
    letterSpacing: 1,
    fontFamily: theme.fontFamily,
  },
  outlineTitle: {
    color: theme.colors.primary[0],
    fontSize: 19,
    letterSpacing: 1,
    fontFamily: theme.fontFamily,
  },
});
​
const Button = ({
  primary,
  full,
  secondary,
  outline,
  transparent,
  buttonStyle,
  titleStyle,
  ...props
}) => {
  const buttonStyles = useMemo(
    () => [
      styles.base,
      primary && styles.primary,
      full && styles.full,
      secondary && styles.secondary,
      outline && styles.outline,
      transparent && styles.transparent,
      buttonStyle,
    ],
    [primary, full, secondary, outline, transparent, buttonStyle],
  );
​
  const titleStyles = useMemo(
    () => [
      primary && styles.primaryTitle,
      full && styles.fullTitle,
      secondary && styles.secondaryTitle,
      outline && styles.outlineTitle,
      titleStyle,
    ],
    [primary, full, secondary, outline, titleStyle],
  );
​
  return (
    <NativeButton
      accessibilityLabel={props.title}
      buttonStyle={buttonStyles}
      titleStyle={titleStyles}
      {...props}
    />
  );
};
​
Button.propTypes = {
  primary: PropTypes.bool,
  full: PropTypes.bool,
  secondary: PropTypes.bool,
  outline: PropTypes.bool,
  transparent: PropTypes.bool,
  buttonStyle: PropTypes.object,
  titleStyle: PropTypes.object,
};
​
export default Button;