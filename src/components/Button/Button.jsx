import React from "react";
import { LoadMoreBtn } from "./Button.styled";

export class LoadMoreButton extends React.Component {
    
    render() {
        return (
            <LoadMoreBtn
                type='button'
            onClick={this.props.onClick}>
                Load More</LoadMoreBtn>
        )
    }
}