import styled from 'styled-components';

export const CaixaFooterEstils = styled.div`
    height: auto  ;
    
    display:flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap:10px 15px;;
    background-color: black;
    color: #2A304F;
    border-top: 1px solid gold;
    padding:5px;
    
    @media (max-width: 767px) {
       flex-direction: column;
    }

    `;

export const EnlacesEstils = styled.div`
    padding-top:25px;
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:5px;
`;
export const TitolEstils = styled.h4`
    color:#EFE4E4;
`;
