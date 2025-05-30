import React from 'react';
import { ScrollView } from 'react-native';
import Titulo from './components/Titulo';
import Saudacao from './components/Saudacao';
import FotoPerfil from './components/FotoPerfil';
import CartaoUsuario from './components/CartaoUsuario';

export default function App() {
  return (
    <ScrollView>
      <Titulo />
      <Saudacao nome="kauany" />

      <FotoPerfil />

      <CartaoUsuario 
      nome="claudio" 
      descricao="programador" 
      img= 'perfil00'/>

      <CartaoUsuario 
      nome="upa lumpa" 
      descricao="dev senior" 
      img= 'perfil02'/>


      <CartaoUsuario 
      nome="jacinto o melhor" 
      descricao="dev senior" 
      img= 'perfil01'/>


    </ScrollView>
  );
}
