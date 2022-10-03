import React from 'react';
import { Link } from 'react-router-dom';
import { ProSidebar, MenuItem, SubMenu, Menu, SidebarFooter, SidebarHeader } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import './menu.css';
import { BsTruck, BsFillPersonPlusFill, BsPersonFill } from 'react-icons/bs';
import {FaRoute, FaMapMarkerAlt} from "react-icons/fa";
import {AiFillHome} from "react-icons/ai";
import {BiLogOut} from "react-icons/bi";
import {BsPinMap} from "react-icons/bs";

const MenuLateral = () => {


  return(
    <>
    <ProSidebar  >
      <SidebarHeader>
        <h2 className='tituloMenu'> {<FaMapMarkerAlt/>} Itracker</h2>

      </SidebarHeader>

      <Menu iconShape="circle">
        
        <MenuItem icon={<AiFillHome />}>Home
        <Link to="/home" />
        </MenuItem>
        
        <SubMenu icon={<BsFillPersonPlusFill />} title="Cadastro" >
          <MenuItem icon={<BsPersonFill/>}>Motoristas
          <Link to="/driversRegister" />
          </MenuItem>
          <MenuItem icon={<BsTruck/>}> Veículos
          <Link to="/" />
          </MenuItem>
          <MenuItem icon={<FaRoute/>}>Coletas
          <Link to="/" />
          </MenuItem>
        </SubMenu>

        <MenuItem icon={<BsPersonFill />}>Motoristas
        <Link to="/" />
        </MenuItem>

        <MenuItem icon={<BsPinMap />}>Localizar
        <Link to="/map" />
        </MenuItem>

        <MenuItem icon={<BsTruck />}>Veículos
        <Link to="/" />
        </MenuItem>

        <MenuItem icon={<FaRoute />}>Coletas
        <Link to="/" />
        </MenuItem>

        <MenuItem icon={<BiLogOut />}>Sair
        <Link to="/" />
        </MenuItem>

      </Menu>
    </ProSidebar>
    </>

  );

}

export default MenuLateral;