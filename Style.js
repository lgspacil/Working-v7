import { StyleSheet } from 'react-native';
import { ifIphoneX } from 'react-native-iphone-x-helper'
import { Colors } from 'terramap-utils/dist/TerraClearColors/Colors';
import Device from 'react-native-device-detection';
import { FontStyles } from './Fonts';



const Style = StyleSheet.create({
    Container: {
        flex: 1
    },

    Absolute: {
        position: 'absolute'
    },

    FormContainer: {
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,.4)'
    },

    FormLogo: {
        height: 50,
        alignSelf: 'center',
    },

    SignInSpacingView: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        height: 250
    },

    SignUpSpacingView: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        height: 300
    },

    FormInputBox: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignSelf: 'center',
        height: 40,
        width: '100%',
        borderRadius: 3,
        backgroundColor: 'rgba(250,250,250,0.2)',
    },

    FormDropDownBox: {
        flexDirection: 'row',
        height: 40,
        width: '100%',
        borderRadius: 3,
        backgroundColor: 'rgba(250,250,250,0.2)',
        padding: 6
    },

    FormInput: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        color: Colors.white
    },

    FormInputBoxIcon: {
        padding: 10,
    },

    FormButton: {
        width: 300,
        height: 40,
        borderRadius: 3,
        alignSelf: 'center',
        backgroundColor: Colors.green,
        justifyContent: 'center',
        alignItems: 'center'
    },

    FormButtonText: {
        color: Colors.white,
        ...FontStyles.h5
    },

    ButtonsView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        height: 40,
        width: 300
    },

    CancelButton: {
        flex: 1,
        width: 63,
        height: 20,
        ...FontStyles.normal,
        color: 'white'
    },

    SignUpButton: {
        flex: 1,
        width: 60,
        height: 20,
        ...FontStyles.normal,
        color: 'white'
    },

    ForgotPasswordButton: {
        flex: 5,
        width: Device.isTablet ? 156 : 135,
        height: 20,
        ...FontStyles.normal,
        color: 'white'
    },

    ContinueAsGuestButton: {
        flex: 5,
        width: 135,
        height: 20,
        ...FontStyles.normal,
        color: 'white'
    },

    InvalidPasswordText: {
        color: "red",
        ...FontStyles.h4
    },

    WelcomeDialogRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },

    WelcomeDialogOuterColumn: {
        flexDirection: 'column',
        justifyContent: 'center',
    },

    WelcomeDialogInnerColumn: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 150
    },

    WelcomeDialogTitle: {
        ...FontStyles.h3Heavy,
        color: Colors.lightBlack
    },

    WelcomeDialogMessage: {
        ...FontStyles.h5,
        color: Colors.lightBlack
    },

    WelcomeMessages: {
        alignSelf: 'center'
    },

    MapView: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    MapFieldsButton: {
        width: 150,
        height: 40,
        borderRadius: 2,
    },

    MapFieldsButtonText: {
        color: Colors.white,
        ...FontStyles.h5,
    },

    DrawerTabs: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        height: 45,
        width: 40
    },

    DrawerTabText: {
        ...FontStyles.tiny,
        color: 'white'
    },

    EntryPageContainer: {
        flex:1, 
        flexDirection: 'row'
    },

    SidebarContainer: {
        width: 40,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: Colors.lightBlack
    },

    SidebarButtonContainer: {
        height: 110,
        width: 40,
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },

    TCLogoContainer: {
        height: 40,
        width: 40,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        backgroundColor: Colors.lightBlack
    },

    TCLogoButton: {
        height:38,
        width: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.lightBlack
    },

    DrawerContainer: {
        flex:1,
        width: 165,
        flexDirection: 'column',
        backgroundColor: Colors.lightBlack,
        justifyContent: 'space-between'
    },

    DrawerHeaderContainer: {
        height: 60, 
        width: 165, 
        flexDirection: 'row', 
        backgroundColor: Colors.lightGrey, 
        justifyContent: 'space-between'
    },

    DrawerHeader: {
        height: 30,
        width: 120,
        backgroundColor: Colors.lightGrey,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },

    DrawerCloseButton: {
        height: 30, 
        width: 30, 
        backgroundColor: Colors.lightGrey,
        justifyContent: 'center', 
        alignItems: 'center',  
        alignSelf: 'center'
    },

    DrawerLabel: {
        height: 15,
        backgroundColor: Colors.lightBlack,
        justifyContent: 'center',
        alignItems: 'center'
    },

    DrawerLabelText: {
        color: Colors.lightGrey,
        ...FontStyles.tiny,
    },

    DrawerCardSpacing: {
        height: 7,
        backgroundColor: Colors.lightGrey,
        justifyContent: 'center',
        alignItems: 'center'
    },

    DrawerScrollBackground: {
        flex: 1,
        backgroundColor: Colors.lightGrey
    },

    CardContainer: {
        height: 165,
        flexDirection: 'column',
        backgroundColor: Colors.lightGrey
    },

    FieldCard: {
        height: 150,
        width: 150,
        flexDirection: 'column',
        borderRadius: 4,
        backgroundColor: 'white',
        padding: 10,
        alignSelf: 'center',
        shadowColor: Colors.lightBlack,
        shadowOpacity: .3,
        shadowRadius: 6
    },

    CompleteFieldCard: {
        height: 150,
        width: 150,
        flexDirection: 'column',
        borderRadius: 4,
        borderColor: Colors.green,
        borderWidth: 1,
        backgroundColor: 'white',
        padding: 10,
        alignSelf: 'center',
        shadowColor: Colors.lightBlack,
        shadowOpacity: .3,
        shadowRadius: 6
    },

    CardHeader: {
        height: 30,
        borderBottomWidth: .5,
        borderBottomColor: Colors.lightGrey
    },

    CardHeaderText: {
        ...FontStyles.normalHeavy,
        color: Colors.lightBlack
    },

    CardBodyContainer: {
        height: 70,
        borderBottomWidth: .5,
        borderBottomColor: Colors.lightGrey
    },

    CardBodyStyle: {
        ...FontStyles.tiny,
        color: Colors.lightBlack
    },

    CardFooterContainer: {
        width: 130,
        flexDirection: 'row'
    },

    AnnotationContainer: {
        width: 20,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.yellow,
        borderRadius: 15,
    },

    AnnotationFill: {
        width: 20,
        height: 20,
        borderRadius: 15,
        transform: [{ scale: 0.8 }],
    },

    // MapTools: {
    // 	width:50, 
    // 	bottom: -1,
    // 	justifyContent: 'space-between', 
    // 	alignSelf: 'flex-end', 
    // 	flexDirection: 'column'
    // },

    SchedulingButtonContainer: {
        right: 65,
        top: Device.isTablet ? 25 : 20,
        width: Device.isTablet ? 125 : 75,
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
        position: 'absolute',
        ...ifIphoneX({
            marginTop: 15
        }, {})
    },

    SchedulingButton: {
        height: Device.isTablet ? 45 : 35,
        width: Device.isTablet ? 100: 80
    },

    SchedulingButtonText: {
        color: Colors.white,
        ...FontStyles.h3,
        alignSelf: 'center'
    },

    MapTools: {
        width: 50,
        bottom: -1,
        justifyContent: 'space-between',
        alignSelf: 'flex-end',
        flexDirection: 'column'
    },

    MapToolsIcons: {
        width:45,
        height: 140,
        justifyContent: 'flex-start',
        alignSelf: 'flex-end',
        flexDirection: 'column'
    },

    MapToolsTopGroup: {
        width: 40, 
        paddingRight: 3, 
        justifyContent: 'center', 
        flexDirection: 'column', 
        alignItems: 'center'
    },

    ConditionalButton: {
        height: 40,
        width: 40,
        borderRadius: 30,
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center'
    },

    ConditionalButtonNotVisible: {
        height: 40,
        width: 40
    },

    ToolIconSpacing: {
        height: 6
    },

    LockButton: {
        height: Device.isTablet ? 60 : 40,
        width: Device.isTablet ? 60: 40,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },

    CompassIcon: {
        width: 40,
        paddingLeft: 3,
        paddingTop: 2
    },

    ZoomButtonContainer: {
        width: 45,
        height: 110,
        flexDirection: 'column',
        paddingTop: 2,
        paddingRight: 1
    },

    ZoomButton: {
        height: 40,
        width: 40,
        backgroundColor: Colors.lightBlack,
        justifyContent: 'center',
        alignItems: 'center'
    },

    SchedulingPanelContainer: {
        height: '100%',
        width: '100%',
        backgroundColor: Colors.white,
        // position: 'absolute',
        flexDirection: 'column'
    },

    NotesDialogTitle: {
        ...FontStyles.h3Heavy,
        color: Colors.lightBlack,
        alignSelf: 'flex-start',
    },

    iconBoxSize : {
        height: Device.isTablet ? 65 : 50,
        width: Device.isTablet ? 65 : 50
    },

    navButtonStyle: {
        height: Device.isTablet ? 65 : 45,
        width: Device.isTablet ? 140 : 115,
        borderRadius: 3
    },

    navButtonFloat: {
        height: Device.isTablet ? 65 : 45,
        width: Device.isTablet ? 140 : 115,
        borderRadius: 3,
        position: 'absolute',
        ...ifIphoneX({
            bottom: 20
        }, {bottom: 0})
    },

    checkBox: {
        height: Device.isTablet ? 20 : 15,
        width: Device.isTablet ? 20 : 15,
        borderWidth: 1,
        borderRadius: 2,
        alignItems: 'center'
    },
});

export default Style;
