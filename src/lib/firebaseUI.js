import firebaseApp from './firebase';
import firebaseui from 'firebaseui';
export default new firebaseui.auth.AuthUI(firebaseApp.auth());
