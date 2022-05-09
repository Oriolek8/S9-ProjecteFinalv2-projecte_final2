import styled from 'styled-components';

export const GeneralEstils = styled.div`
    padding-top:20px;
    height: auto;
    color: #fdfcfd;
    background-color:#0d0625;
    padding: 25px;
    
    
    
`;

export const BoxTopEstils = styled.div`
    padding: 25px;  
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1px 10px;
    
`;
export const CuadratEstils = styled.div`
    height: 170px;
    width: 170px;
    border: 3px solid #FFFFFF;
    text-align: center;
    
`;

export const ImgEstils = styled.img`
    padding-top:10px;
    height: 80px;
    width: 80px;
    
`;
export const BoxTextEstils = styled.div`
    margin-top:10px;
    height:auto;
    padding:15px;
    display:grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    grid-gap:15px;
`;

export const TopEstils = styled.div`
   
@media (max-width: 422px) {
   
    text-align:center;
}
`;


  
  


export const Item1Estils = styled.div`
    grid-column: 1/3;
`;

export const Item2Estils = styled.div`
    margin-top:25px;
    grid-row: 2/2;

`;

export const Item3Estils = styled.div`
    grid-row: 2/3;

    @media (max-width: 767px) {
        grid-row: 3/3;
        text-align:center;
        padding-top:10px;
    }
`;

export const Img2Estils = styled.img`
    padding-top:10px;
    height: 240px;
    width: 200px;
    padding:5px;
    border-radius: 3px;

    @media (max-width: 767px) {
        height: 300px;
        width: 300px;
        vertical-align: middle;
    }

    @media (max-width: 361px) {
        height: 220px;
        width: 220px;
        vertical-align: middle;
    }
`;