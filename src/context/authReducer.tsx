import { Usuario } from "../interfaces/appInterfaces";

export interface AuthState {
    status: 'checking' | 'authenticated' | 'not-authenticated';
    token: string | null;
    errorMessage: string;
    user: Usuario | null;
}

export type AuthAction =
    | { type: 'signIn', payload: { token: string, user: Usuario } }
    | { type: 'addError', payload: string }
    | { type: 'removeError' }
    | { type: 'notAuthenticated' }
    | { type: 'logOut' }




/**Lo que devuelve este reducer, siempre debe ser un AuthState */
/**Lo que va a usar el reducer es el state(estado anterior) y el action(del tipo AuthAction...signUP,AddError,removeError) */
export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'addError':
            return {
                ...state,
                errorMessage: action.payload,
                user: null,
                status: 'not-authenticated',
                token: null,
            }
        case 'removeError':
            return {
                ...state,
                errorMessage: '',
            }
        case 'signIn':
            return {
                ...state,
                errorMessage: '',
                status: 'authenticated',
                token: action.payload.token,
                user: action.payload.user,
            }
        case 'notAuthenticated':
            return {
                ...state,
                token: null,
                status: 'not-authenticated',
                user: null,
            }
        case 'logOut':
            return {
                ...state,
                token: null,
                status: 'not-authenticated',
                user: null,
            }
        default:
            return state;
    }

}