import React, {Component} from 'react';
import PopupDialog, { SlideAnimation} from 'react-native-popup-dialog';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Colors } from "terramap-utils/dist/TerraClearColors/Colors";
import { exitMessage, clearAlertAction } from 'terramap-core/dist/redux/modules/general';
import { resetShowCodeModal } from 'terramap-core/dist/redux/modules/auth';
import TCButton from '../common/Button/TCButton';

const slideAnimation = new SlideAnimation({
    slideFrom: 'bottom',
});

class AlertPopUp extends Component {

    constructor(props){
        super(props)
    }

    closeMesssage = () => {
        this.props.navigation.goBack();
        this.props.onClearAlertAction();
        this.props.exitMessage();

        //reset the resetShowCodeModal if going back from signIn popup
        this.props.resetShowCodeModal();
    }

    render(){
        if(this.props.general.message == ''){
            return null;
        }

        return(
            <PopupDialog
                dismissOnHardwareBackPress={true}
                onDismissed={this.props.exitMessage}
                show={this.props.general.message !== ''}
                width={this.props.width || 0.5}
                height={this.props.height || 0.2}
                dialogAnimation={slideAnimation}
                style={styles.popUpContainer}
            >
                <View style={styles.contentContainer}>
                    <Text style={{fontWeight: 'bold', textAlign: 'center', marginBottom: 8}}>{this.props.message}</Text>
                    
                    {this.props.action == 'goBack' ?
                        <TCButton
                            onPress ={this.closeMesssage}
                            style={{width: 80, height: 35}}
                        >
                            {this.props.general.buttonTitle || 'OK'}
                        </TCButton>
                        :
                        <TCButton
                            onPress={() => this.props.exitMessage()}
                            style={{width: 80, height: 35}}
                        >
                            {this.props.general.buttonTitle || 'OK'}
                        </TCButton>
                    }
                </View>
            </PopupDialog>
        )
    }
}

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        padding: 15,
        alignItems: "center",
        justifyContent: "center"
    },
    popUpContainer: {
        backgroundColor: Colors.lightGrey,
        borderRadius: 15
    }
});

function mapStateToProps(state) {
    return {
        auth: state.auth,
        general: state.general
    }
}

function mapDispatchToProps(dispatch) {
    return {
        exitMessage: () => dispatch(exitMessage()),
        onClearAlertAction: () => dispatch(clearAlertAction()),
        resetShowCodeModal: () => dispatch(resetShowCodeModal())
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AlertPopUp);