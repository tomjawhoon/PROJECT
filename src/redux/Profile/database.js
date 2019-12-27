import getFirebase from '../../lib/firebase';

export const DatabaseProfile = {
    GET_PROFILE: 'GET_PROFILE'
}

export const menuActions = {
    PROFILES: () => (dispatch, getState) => {
        const { leadsRef } = getFirebase();
        return leadsRef.on('value', (snapshot) => {
            snapshot.forEach((childSnapshot) => {
                var childData = childSnapshot.val();
                console.log("childData_formnode===>", childData)
                //test.push(childData)
            });
        });
    },
   /* addMenu: (data) => (dispatch, getState) => {
        const { db } = getFirebase();
        return db.collection('menu').add(data)
    },
    updateMenu: (data) => (dispatch, getState) => {
        const { id, ...restData } = data;
        const { db } = getFirebase();
        return db.doc(`menu/${id}`).update({ ...restData });
    },
    deleteMenu: (id) => (dispatch, getState) => {
        const { db } = getFirebase();
        return db.doc(`menu/${id}`).delete();
    }*/
}