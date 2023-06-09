const actionTypes = Object.freeze({
    //app
    APP_START_UP_COMPLETE: 'APP_START_UP_COMPLETE',
    SET_CONTENT_OF_CONFIRM_MODAL: 'SET_CONTENT_OF_CONFIRM_MODAL',
    CHANGE_LANGUAGE: 'CHANGE_LANGUAGE',

    //user
    //ADD_USER_SUCCESS: 'ADD_USER_SUCCESS',
    USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
    USER_LOGIN_FAIL: 'USER_LOGIN_FAIL',
    PROCESS_LOGOUT: 'PROCESS_LOGOUT',

    //admin
    FETCH_GENDER_START: 'FETCH_GENDER_START',
    FETCH_GENDER_SUCCESS: 'FETCH_GENDER_SUCCESS',
    FETCH_GENDER_FAILED: 'FETCH_GENDER_FAILED',
    FETCH_POSITION_SUCCESS: 'FETCH_POSITION_SUCCESS',
    FETCH_POSITION_FAILED: 'FETCH_POSITION_FAILED',
    FETCH_ROLE_SUCCESS: 'FETCH_ROLE_SUCCESS',
    FETCH_ROLE_FAILED: 'FETCH_ROLE_FAILED',

    //ADD USER
    ADD_USER_SUCCESS: 'ADD_USER_SUCCESS',
    ADD_USER_FAILED: 'ADD_USER_FAILED',
    
    LOAD_USER_SUCCESS: 'LOAD_USER_SUCCESS',
    LOAD_USER_FAILED: 'LOAD_USER_FAILED',
    
    //EDIT USER
    EDIT_USER_SUCCESS: 'EDIT_USER_SUCCESS',
    EDIT_USER_FAILED: 'EDIT_USER_FAILED',
    //GET USERS
    GET_ALL_USERS_SUCCESS: 'GET_ALL_USERS_SUCCESS',
    GET_ALL_USERS_FAILED: 'GET_ALL_USERS_FAILED',
    //DELETE USER
    DELETE_USER_SUCCESS: 'DELETE_USER_SUCCESS',
    DELETE_USER_FAILED: 'DELETE_USER_FAILED',
    //GET DOCTORS
    GET_TOP_DOCTORS_SUCCESS: 'GET_TOP_DOCTORS_SUCCESS',
    GET_TOP_DOCTORS_FAILED: 'GET_TOP_DOCTORS_FAILED',
    
    GET_ALL_DOCTORS_SUCCESS: 'GET_ALL_DOCTORS_SUCCESS',
    GET_ALL_DOCTORS_FAILED: 'GET_ALL_DOCTORS_FAILED',

    CREATE_INFO_DOCTOR_SUCCESS: 'CREATE_INFO_DOCTOR_SUCCESS',
    CREATE_INFO_DOCTOR_FAILED: 'CREATE_INFO_DOCTOR_FAILED',

    EDIT_INFO_DOCTOR_SUCCESS: 'EDIT_INFO_DOCTOR_SUCCESS',
    EDIT_INFO_DOCTOR_FAILED: 'EDIT_INFO_DOCTOR_FAILED',

    GET_ALLCODE_TIME_SUCCESS: 'GET_ALLCODE_TIME_SUCCESS',
    GET_ALLCODE_TIME_FAILED: 'GET_ALLCODE_TIME_FAILED',

    GET_ALLCODE_DOCTOR_MORE_SUCCESS: 'GET_ALLCODE_DOCTOR_MORE_SUCCESS',
    GET_ALLCODE_DOCTOR_MORE_FAILED: 'GET_ALLCODE_DOCTOR_MORE_FAILED',
})

export default actionTypes;