import { NavigationActions, StackActions } from 'react-navigation';

export class NavigationWrapper {
    static _navigator;
    static navigateTo = (routeName, params) => {
        NavigationWrapper._navigator.dispatch(
            NavigationActions.navigate({
                routeName,
                params,
            })
        );
    }

    static goBack = () => {
        NavigationWrapper._navigator.dispatch(NavigationActions.back());
    }

    static goHome = () => {
        NavigationWrapper._navigator.dispatch(StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Entry' })]
        }))
    }

    static logOut = () => {
        NavigationWrapper._navigator.dispatch(StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'SignIn' })]
        }))
    }

    static setNavigatorRef(navigatorRef) {
        NavigationWrapper._navigator = navigatorRef;
    }
}