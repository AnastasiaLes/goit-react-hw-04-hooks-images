import React from 'react';
import { Overlay, ModalContainer } from './Modal.styled';

export class Modal extends React.Component {
    
    render() {
        
         return (
        <Overlay onClick={this.props.onClose}>
        <ModalContainer>
            <img src={this.props.LargeImage} alt={this.props.tag} />
        </ModalContainer>
        </Overlay> 
    )
}
}
