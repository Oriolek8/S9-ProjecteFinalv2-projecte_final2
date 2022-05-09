import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderEstils = styled.div`
    height: 200px;
    background-color: #0d0625;
    padding-top:15px;
    
    color: #2A304F;
    text-align:center;
`;
export const CaixaTopEstils = styled.div`
    display:flex;
    height:150px;
    

`;
export const CaixaTitolEstils = styled.div`
    width: 70%;
    

`;


export const CaixaLinksEstils = styled.div`
    height: 35px;
    background-color: #F1980A;
    color: #2A304F;
    text-align:center;
`;


export const TitolEstils = styled.h1`
    color:#F1980A;
`;

export const TitulinEstils = styled.h6`
    color:#FFFFFF;
    padding-bottom: 25px;
`;

export const EnlacesEstils = styled(Link)`
   color:#000000;
   maring-top:10px;
   margin-left:7px;
   padding:5px;
   font-size: 20px;

   @media (max-width: 767px) {
    font-size: 15px;
}
   
`;