import React from 'react';
import {
    TouchableOpacity,
    TouchableNativeFeedback,
    Text,
    View,
    StyleSheet,
    Platform
} from "react-native";

import TCButtonBase from './TCButtonBase';
import { FontSizes } from '../../../Fonts';

// You can customize this button component with buttonColor, textColor, disabled={true/false}

// The Props for this component
// buttonColor --> (optional) String
// textColor --> (optional) String
// shouldBeDisabled() --> (optional) function
// onPress --> (required) function
// style --> (optional) style object that can be passed in to override the main View
// textSize --> (optional) will override the default font of 16
// textPadding --> (optional) will override default padding of 10

class TCButtoMobile extends TCButtonBase {

    constructor(props) {
        super(props);
    }

    render() {
        const content = (
            <View
                style={[
                    styles.button,
                    { backgroundColor: this.props.buttonColor ? this.props.buttonColor : this.state.buttonBackgroundColor},
                    this.props.style,
                    this.shouldBeDisabled() ? styles.disabled : null
                ]}
            >
                <Text
                    style={[
                        this.shouldBeDisabled() ? styles.disabledText : null,
                        {color: this.props.textColor ? this.props.textColor : this.state.textColor},
                        {fontSize: this.props.textSize ? this.props.textSize : FontSizes.h5},
                        {padding: this.props.textPadding ? this.props.textPadding : 0},
                        {textAlign: 'center'}
                    ]}
                >
                    {this.props.children}
                </Text>
            </View>
        );

        if(this.shouldBeDisabled()){
            return content;
        }

        if(Platform.OS === "android"){
            return(
                <TouchableNativeFeedback onPress={this.props.onPress}>
                    {content}
                </TouchableNativeFeedback>
            )
        }

        return (
            <TouchableOpacity onPress={this.props.onPress}>{content}</TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        height: 40,
        width: 300,
        margin: 5,
        borderRadius: 3,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    disabled: {
        opacity: 0.5
    },
    disabledText: {
        color: "#aaa"
    }
});

export default TCButtoMobile;