import styled from 'styled-components';

export const GeneralEstils = styled.div`
    padding:20px;
    height: auto;
    
    color: #FFFFFF;
    background-color: #0d0625;
    padding: 25px;
    
    
    
    
`;
export const BoxesEstils = styled.div`
    margin: 30px;
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 10px;
    
`;
export const CuadratEstils = styled.div`
    height: 200px;
    width: 250px;
    border: 3px solid #FFFFFF;
    text-align: center;
    border-radius: 30px;

    :hover{
        cursor:pointer;
        background: #CCA923;
    }
`;

export const ImgEstils = styled.img`
    padding-top:15px;
    height: 80px;
    width: 80px;
    
`;

export const SubTitulEstils = styled.h3`
    
    color: #D59F9F;
    text-align:center;
    padding: 10px;
    
`;