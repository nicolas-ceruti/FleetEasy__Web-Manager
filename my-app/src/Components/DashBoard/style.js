import styled from "styled-components"

export const Container = styled.div`
    width: 85%;
    height: 100vh;

    @media (max-width: 1180px) {
        width: 100%;
        padding-top: 80px;
    }
`;

export const DivDeshboard = styled.div`
    width: 100%;
`;

export const GraphList = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
`;

export const GraphContainer = styled.div`
    width: 100%;
    border: 1px solid #eceae9;
    border-radius: 5px;
    box-shadow: 0px 0px 12px 0px #3e3e407d;
    background: #fff;
    margin: 3% 0% 1% 4%;
    padding: 10px;

    svg{
        border-radius: 5px;
    };

    @media (max-width: 1180px) {
        width: 100%;
        margin: 10px;
    }
`;

export const GraphTitle = styled.h1`
    text-align: left;
    font-size: 20px;
    margin-bottom: 0px;
    font-weight: 200;
    padding: 15px;
    padding-bottom: ${props => `${props.PaddBottom}`}px;
`
export const InfoCardsList = styled.div`
    margin: 3% 1% 0% 4%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

    @media (max-width: 1180px) {
        width: 100%;
        margin: 0px;
    }
`

export const InfoCard = styled.div`
    width: 20%;
    background: ${props => `${props.BgColor}`};
    margin: 0% 4% 2% 0%;
    height: 100px;
    border-radius: 5px;
    color: #fff;
    box-shadow: 0px 0px 8px 0px #3e3e407d;

    p{
        padding: 8px;   
        font-size: 27px;
        padding-top: 20px;
    }
    
    p span:nth-child(2){
        float: right;
        font-weight: bold;
    }

    @media (max-width: 1180px) {
        width: 100%;
        margin: 10px;
    }
`



export const TitleCard = styled.h2`
        margin: 0PX;
        font-size: 15px;
        padding: 8px;
        background: ${props => `${props.BgColorTitle}`};
        border-radius: 5px 5px 0px 0px;
`