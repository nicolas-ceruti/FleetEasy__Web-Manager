import React from 'react';
import { FaTruckMoving, FaShoppingCart, FaMoneyCheck, FaUserPlus } from "react-icons/fa";
import { BsPersonCheckFill } from "react-icons/bs";


import {Container, DivDeshboard, GraphList,  GraphContainer, GraphTitle, InfoCardsList, InfoCard, TitleCard} from "./style.js";
import { Chart } from 'react-google-charts';


const Dashboard = (  ) => {

  const SalesYearsdata = [
    ["Cidades", "Vendas em 2021", "Vendas em 2022"],
    ["Porto Alegre, RS", 2100, 1900],
    ["Florianópolis, SC", 4235, 6325],
    ["São Paulo, SP", 1102, 911],
    ["Rio de Janeiro, RJ", 501, 962],
    ["Salvador, BH", 6001, 8102],
  ];
  
  const SalesYearsoptions = {
    chartArea: { width: "60%" },
    colors: ["#3e3e40", "#ff5814"],
    hAxis: {
      title: "Total de Vendas",
      minValue: 0,
    },
    vAxis: {
      title: "Cidades",
    },
  };

  const SalesMonthdata = [
    ["Meses", "Faturamento(R$)"],
    ["Janeiro", 110450],
    ["Fevereiro", 496000],
    ["Março", 578000],
    ["Abril", 465000],
    ["Maio", 952000],
    ["Junho", 735415],
    ["Julho", 826349],
    ["Agosto", 739851],
    ["Setembro", 952467],
    ["Outubro", 756328],
    ["Novembro", 1125789],
    ["Dezembro", 520000],
  ];
  
   const SalesMonthoptions = {
    chart: {
      title: "",
      subtitle: "",
    },
  };


  return (
    <>
    <Container maxWidth="sm" component="article" className="form">
      <h1 className="hr">Estatísticas</h1>
      <form onSubmit={(event) => {
        event.preventDefault();
      }}></form>
      <DivDeshboard>
      
        <InfoCardsList>
          <InfoCard BgColor={'#34A75B'}>
            <TitleCard BgColorTitle={'#1e8140'}>ENTREGAS FINALIZADAS:</TitleCard>
            <p><span><FaMoneyCheck/></span><span>3.137</span></p>
          </InfoCard>
          <InfoCard BgColor={'#64A4C9'}>
            <TitleCard BgColorTitle={'#206187'}>VEÍCULOS FUNCIONAIS</TitleCard>
            <p><span><FaTruckMoving/></span><span>97</span></p>
          </InfoCard>
          <InfoCard BgColor={'#933CD5'}>
            <TitleCard BgColorTitle={'#7130A2'}>MOTORISTAS ATIVOS</TitleCard>
            <p><span><BsPersonCheckFill/></span><span>87</span></p>
          </InfoCard>
        </InfoCardsList>
        
        <GraphList>
          <GraphContainer>
            <GraphTitle PaddBottom={40}> Faturamento 2022</GraphTitle>
            <Chart
              chartType="Bar"
              width="100%"
              height="250px"
              data={SalesMonthdata}
              options={SalesMonthoptions}
            />
          </GraphContainer>
        </GraphList>
      
      </DivDeshboard>
    </Container>
    </>
  );
}

export default Dashboard;
