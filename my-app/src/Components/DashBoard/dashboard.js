import React from 'react';
import { FaShoppingCart, FaMoneyCheck, FaUserPlus } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";

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
    ["Meses", "Produto A", "Produto B", "Produto C"],
    ["Junho", 1170, 460, 250],
    ["Julho", 660, 1120, 300],
    ["Agosto", 1030, 540, 350],
  ];
  
   const SalesMonthoptions = {
    chart: {
      title: "",
      subtitle: "",
    },
  };


  return (
    <>
    <Container>
      <DivDeshboard>
      
        <InfoCardsList>
          <InfoCard BgColor={'#FE9632'}>
            <TitleCard BgColorTitle={'#c37225'}>TOTAL DE PEDIDOS:</TitleCard>
            <p><span><FaShoppingCart/></span><span>+186</span></p>
          </InfoCard>
          <InfoCard BgColor={'#34A75B'}>
            <TitleCard BgColorTitle={'#1e8140'}>TOTAL VENDIDO:</TitleCard>
            <p><span><FaMoneyCheck/></span><span>250K</span></p>
          </InfoCard>
          <InfoCard BgColor={'#FF2F2F'}>
            <TitleCard BgColorTitle={'#c12121'}>PEDIDOS CANCELADOS:</TitleCard>
            <p><span><GiCancel/></span><span>7</span></p>
          </InfoCard>
          <InfoCard BgColor={'#64A4C9'}>
            <TitleCard BgColorTitle={'#206187'}>TOTAL DE CLIENTES:</TitleCard>
            <p><span><FaUserPlus/></span><span>97</span></p>
          </InfoCard>
        </InfoCardsList>
        
        <GraphList>
          <GraphContainer>
            <GraphTitle PaddBottom={0}>Número De Vendas Nos Últimos Dois Anos</GraphTitle>
            <Chart
              chartType="BarChart"
              width="100%"
              height="250px"
              data={SalesYearsdata}
              options={SalesYearsoptions}
            />
          </GraphContainer>
          <GraphContainer>
            <GraphTitle PaddBottom={40}>Vendas Nos Ultimos Três Mêses</GraphTitle>
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
