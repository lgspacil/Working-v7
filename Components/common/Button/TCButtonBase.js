import React, {Component} from 'react';

class TCButtonBase extends Component {

    constructor(props) {
        super(props);

        this.state = {
            buttonBackgroundColor: "#04b762",
            textColor: "#FFFFFF"
        }
    }

    shouldBeDisabled = () => {        
        var disabled = false;
        if (this.props.requiredFields != null) {
            this.props.requiredFields.some(field => {
                if (!field) {
                    disabled = true;
                    return true;
                }
            })
        }
        return disabled;
    }

    render() {
        return (
            null
        )
    }
}

export default TCButtonBase;