import React, { Component } from 'react';
import {
    ImageBackground,
    Text,
    ActivityIndicator,
    KeyboardAvoidingView,
    TouchableHighlight,
    StyleSheet
} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import SvgUri from 'react-native-svg-uri';
import { connect } from 'react-redux';
import { authenticate, checkSession } from 'terramap-core/dist/redux/modules/auth';
import FormTextInput from "../Components/common/FormTextInput";
import { validateEmail } from "../utils/Validator";
import Style from '../Style';
import { Colors } from 'terramap-utils/dist/TerraClearColors/Colors';
import AlertPopUp from '../Components/PopUp/AlertPopUp';
import { setMessage, initalizeOnRefresh } from 'terramap-core/dist/redux/modules/general';
import Device from 'react-native-device-detection';
import TCButton from '../Components/common/Button/TCButton';

class SignIn extends Component {
    static navigationOptions = {
        title: 'Sign In',
        headerVisible: false
    };

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };
    }

    componentDidMount() {
        this.props.checkSession();
        // this.props.onInitalizeOnRefresh();
    }

onSignUp = () => {
    this.props.navigation.navigate('SignUp');
}

onForgotPassword = () => {
    this.props.navigation.navigate('ForgotPassword');
}

navigateToEntryScreen = () => {
// Navigate to Entry screen and reset stack
    this.props.navigation.dispatch(StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Entry' })],
    }));
}

onSignIn = () => {
    if (validateEmail(this.state.username, () => this.props.onSetMessage({ message: "Email address is not in a valid format." }))) {
        this.props.authenticate(this.state.username, this.state.password);
    }
}

renderSignInForm = () => [
    <FormTextInput
        inputBoxStyle={styles.inputBox}
        key="mail"
        iconName="mail"
        placeholder="email address"
        value={this.state.username}
        onChangeText={(text) => this.setState({ username: text })}
    />,
    <FormTextInput
        inputBoxStyle={styles.inputBox}
        key="lock"
        iconName="lock"
        placeholder="password"
        secureTextEntry={true}
        value={this.state.password}
        onChangeText={(text) => this.setState({ password: text })}
    />,
    <TCButton
        key="signIn"
        onPress={this.onSignIn}
    >
    SIGN IN
    </TCButton>,
    <KeyboardAvoidingView key="buttons" style={Style.ButtonsView}>
        <TouchableHighlight onPress={this.onSignUp}>
            <Text style={Style.SignUpButton}>SIGN UP</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.onForgotPassword}>
            <Text style={Style.ForgotPasswordButton}> FORGOT PASSWORD? </Text>
        </TouchableHighlight>
    </KeyboardAvoidingView>
];

render() {
    return (
        <ImageBackground
            source={require('../assets/farmer.jpg')}
            style={Style.Container}
        >

            <AlertPopUp
                message={this.props.general.message}
                action={this.props.general.action}
            />

            <KeyboardAvoidingView style={Style.FormContainer}>
                <KeyboardAvoidingView
                    behavior="padding"
                    style={Style.SignInSpacingView}
                >
                    <KeyboardAvoidingView style={Style.FormLogo}>
                        <SvgUri
                            width="260"
                            height="63"
                            source={require('../assets/TerraClearLogo2.svg')}
                        />
                    </KeyboardAvoidingView>
                    { this.props.general.isBusy ?
                        <ActivityIndicator size="large" color={Colors.green} /> :
                        this.renderSignInForm()
                    }
                </KeyboardAvoidingView>
            </KeyboardAvoidingView>
        </ImageBackground>
    );
}
}

const styles = StyleSheet.create({
    inputBox: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignSelf: 'center',
        height: 40,
        width: Device.isTablet ? '50%' : '80%',
        borderRadius: 3,
        backgroundColor: 'rgba(250,250,250,0.2)',
    }
})

function mapStateToProps(state) {
    return {
        auth: state.auth,
        general: state.general
    };
}

function mapDispatchToProps(dispatch) {
    return {
        authenticate: (username, password) => dispatch(authenticate(username, password)),
        checkSession: () => dispatch(checkSession()),
        onSetMessage: (messageInfo) => dispatch(setMessage(messageInfo)),
        onInitalizeOnRefresh: () => dispatch(initalizeOnRefresh())
    }; // here we're mapping actions to props
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignIn);