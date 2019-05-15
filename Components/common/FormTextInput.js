import React, { Component } from 'react';
import { TextInput, KeyboardAvoidingView, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { Colors } from 'terramap-utils/dist/TerraClearColors/Colors';

import Style from '../../Style';

export default class FormTextInput extends Component {

    render() {
        let label;
        if(this.props.label){
            label = (
                <Text>{this.props.label}</Text>
            )
        }
        return (
            <KeyboardAvoidingView >
                {label}
                <View
                    style={this.props.inputBoxStyle ? this.props.inputBoxStyle : Style.FormInputBox}
                    behavior="padding">
                    {this.props.iconName === "none" ? null :
                        <Icon
                            style={Style.FormInputBoxIcon}
                            type={this.props.iconType}
                            name={this.props.iconName}
                            size={20}
                            color={Colors.white}
                        />
                    }
                    <TextInput
                        underlineColorAndroid="transparent"
                        style={this.props.inputTextStyle ? this.props.inputTextStyle : Style.FormInput}
                        nativeID={this.props.controlId ? this.props.controlId : ''}
                        placeholder={this.props.placeholder}
                        secureTextEntry={this.props.secureTextEntry}
                        value={this.props.value}
                        placeholderTextColor={this.props.placeholderColor ? this.props.placeholderColor : Colors.white}
                        autoCapitalize="none"
                        editable={true}
                        selectionColor={Colors.selectionColor}
                        keyboardAppearance={'dark'}
                        onChangeText={(text) => this.props.onChangeText(text)}
                    />
                </View>
            </KeyboardAvoidingView>
        )
    }
}
