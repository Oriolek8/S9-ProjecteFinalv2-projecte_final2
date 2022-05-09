import styled from 'styled-components';

export const GeneralEstils = styled.div`
    padding:20px;
    height: auto;
    
    color: #FFFFFF;
    background-color: #0d0625;
    padding: 25px;
    
    
   
`;

export const BoxEstils = styled.div`
    margin:10px;
    display:grid;
    grid-template-areas:
      "a c"
      "b c";

      @media (max-width: 763px) {
        grid-template-areas:
        "a"
        "b"
        "c";
        text-align:center;
    }
      
      

`;
export const SpanEstils = styled.span`
    padding-left: 6px;
    
    
`;
export const ItemA = styled.div`
    height: 120px;
    grid-area: a;
    
    
`;
export const ItemB = styled.div`
grid-area: b;
padding: 15px;



`;
export const ItemC = styled.div`
    height: 300px;
    grid-area: c;
    
    text-align:center;
    padding: 20px;

   
    
`;

export const Img3Estils = styled.img`

@media (max-width: 312px) {
    height: 200px;
    width: 150px;
}

   
    
`;
export const NomCryptoEstils = styled.h1`
font-size: 35px;
font-weight: 700;
padding: 3px;
  
`;

export const ParrafoEstils = styled.p`
font-size: 25px;
font-weight: 500;
padding: 3px;

@media (max-width: 477px) {
    font-size: 17px;
}
@media (max-width: 312px) {
    font-size: 13px;
}


  
  
`;
