import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { emitter} from '../../utils/emitter';

class ModalUser extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
            phoneNumber: '',
            sex: '1',
            roleId: 'R1'
        }

        this.listenToEmitter();
    }

    listenToEmitter(){
        emitter.on('EVENT_CLEAR_MODAL_DATA', (user) => {
            this.setState({
                // email: user.email,
                // password: user.password,
                // firstName: user.firstName,
                // lastName: user.lastName,
                // address: user.address,
                // phoneNumber: user.phoneNumber,
                // sex: user.sex,
                // roleId: user.roleId
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                address: '',
                phoneNumber: '',
                sex: '1',
                roleId: 'R1'
    
            })
            console.log('check listening event from parent data: ', user)
        });

    }


    componentDidMount() {
        console.log('call did mount')
    }

    toggle = () => {
        this.props.toggleFromParent();

    }
    handleOnchanceInput = (event, id) => {
        //console.log("event : ", event.target.value, id);

        // bad code :
        // this.state[id] = event.target.value;
        // this.setState({
        //     ...this.state
        // })
        // console.log('check bad code', this.state);

        let copyState = {...this.state};
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        })
        // , () => {
        //     console.log('check state:', this.state )
        // })


    }

    checkValidateInput = () => {
        let isValid = true;
        let arrInput = ['email', 'password', 'firstName', 'lastName', 'address', 'phoneNumber', 'sex', 'roleId'];
        for(let i = 0; i < arrInput.length; i++){
            if(!this.state[arrInput[i]]){
                isValid = false;
                alert('Missing parameter: ' + arrInput[i]);
                console.log('Missing parameter: ', arrInput[i]);
                break;
            }
        }
        return isValid;
    }

    handleAddNewUser = () => {

        if(this.checkValidateInput()){
            this.props.createNewUser(this.state);
        }
    }

    render() {
        // console.log('check child props: ', this.props)
        // console.log('check child open modal: ', this.props.isOpen)

        return (
            <Modal 
                isOpen={this.props.isOpen} 
                toggle={() => this.toggle()} 
                className="modal-user-container"
                size="lg"
            >
                <ModalHeader toggle={() => this.toggle()}>Create a new User</ModalHeader>
                <ModalBody>
                    <div className="modal-user-body">
                        <div className="input-container">
                            <label>Email</label>
                            <input type="text" onChange={(event) => {this.handleOnchanceInput(event, "email")}} value={this.state.email}/>
                        </div>
                        <div className="input-container">
                            <label>Password</label>
                            <input type="text" onChange={(event) => {this.handleOnchanceInput(event, "password")}} value={this.state.password}/>
                        </div>
                        <div className="input-container">
                            <label>First Name</label>
                            <input type="text" onChange={(event) => {this.handleOnchanceInput(event, "firstName")}} value={this.state.firstName}/>
                        </div>
                        <div className="input-container">
                            <label>Last Name</label>
                            <input type="text" onChange={(event) => {this.handleOnchanceInput(event, "lastName")}} value={this.state.lastName}/>
                        </div>
                        <div className="input-container max-width-input">
                            <label>Address</label>
                            <input type="text" onChange={(event) => {this.handleOnchanceInput(event, "address")}}  value={this.state.address}/>
                        </div>
                        <div className="input-container">
                            <label>Phone Number</label>
                            <input type="text" onChange={(event) => {this.handleOnchanceInput(event, "phoneNumber")}}  value={this.state.phoneNumber}/>
                        </div>
                        <div className="input-container width-select">
                            <label>Sex</label>
                            <select name="gender" onChange={(event) => {this.handleOnchanceInput(event, "sex")}}  value={this.state.sex} >
                                <option value="1">Male</option>
                                <option value="0">Female</option>
                            </select>
                      </div>
                        <div className="input-container width-select">
                            <label>Role</label>
                            <select name="roleId" onChange={(event) => {this.handleOnchanceInput(event, "roleId")}}  value={this.state.roleId} >
                                <option value="R1">Admin</option>
                                <option value="R2">Doctor</option>
                                <option value="R3">Patient</option>
                            </select>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" className='px-3' onClick={() => this.handleAddNewUser()}>
                        Add New
                    </Button>{' '}
                    <Button color="secondary" className='px-3' onClick={() => this.toggle()}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);





