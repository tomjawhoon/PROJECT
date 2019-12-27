import getFirebase from "../lib/firebase";

const withAuth = ComposedComponent => {
    const WithAuthComponent = props => {
        const { leadsRef } = getFirebase();
        leadsRef.signInAnonymously();
        return <ComposedComponent {...props}/>
    }
    return WithAuthComponent;
}

export default withAuth;