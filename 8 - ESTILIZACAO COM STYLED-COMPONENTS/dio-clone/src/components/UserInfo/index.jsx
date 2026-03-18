import React from "react";

import { Container, NameText, Progress, UserPicture } from "./styles";

const UserInfo = ({nome, image, percentual}) => {
    return (
        <div>
            <Container>
                <UserPicture src={image} />
                <div>
                    <NameText>{nome}</NameText>
                    <Progress percentual={percentual} />
                </div>
            </Container>
        </div>
    )
}


export default UserInfo;