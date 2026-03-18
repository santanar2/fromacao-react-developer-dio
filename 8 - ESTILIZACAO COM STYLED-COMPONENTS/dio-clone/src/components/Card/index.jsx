import React from 'react';
import { FiThumbsUp } from 'react-icons/fi';

import {
    CardContainer, 
    Content, 
    HasInfo, 
    ImageBackground, 
    PostInfo, 
    UserInfo,
    UserPicture 
} from './styles'; 

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src ="https://assets.dio.me/9iEGW1AjWWbpeVwgU_a4wHdYyI2IIL5Msx7xzAqNq-4/f:webp/q:80/L2FydGljbGVzL2NvdmVyLzJiZGJiNzM0LTUyY2YtNDM1Mi05MTlmLTBiMjcxOTEyYTQwYy5wbmc" />
        <Content>
            <UserInfo>
                <UserPicture src = "https://avatars.githubusercontent.com/u/167146512?v=4" />
                <div>
                    <h4>Ricardo Santana</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso de React</h4>
                <p>Projeto feito para o curso de React da Dio. O projeto consiste em um clone do site da Dio, utilizando as tecnologias React,<strong> Styled-Components </strong> e React Router.</p>
            </PostInfo>
            <HasInfo>
                <h4>Veja o projeto no GitHub</h4>
                <p>
                    <FiThumbsUp /> 10
                </p>
                
            </HasInfo>  
        </Content>
    </CardContainer>
)
}

export default Card;
    