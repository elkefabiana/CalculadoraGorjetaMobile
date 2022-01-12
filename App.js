import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { View, Text, Button } from 'react-native';

const Page = styled.SafeAreaView`
  flex:1;
  align-items:center;
`;

const HeaderText = styled.Text`
  font-size:30px;
`;

const Input = styled.TextInput`
  width:90%;
  height:40px;
  font-size:15px;
  background-color:#6A5ACD;
  border-radius:10px;
  padding:12px;
`;

const CalcButton = styled.Button`
  margin-top:10px;
`;

const ResultArea = styled.View`
  width:90%;
  margin-top:30px;
  background-color:	#4169E1;
  padding:20px;
  justify-content:center;
  aling-items:center;

`;

const ResultItemTitle = styled.Text`
  font-size:18px;
  font-weigth:bold;
  margin-top:10px;
`;

const ResultItem = styled.Text`
  font-size:15px;
  margin-top:10px;
  margin-bottom:30px;
`;
const PctArea =styled.View`
  flex-direction:row;
  margin:20px;
`;
const PctItem =styled.Button`
`;

export default () => {

  const [bill, setBill] = useState('');
  const [tip, setTip] = useState(0);
  const [pct, setPct] = useState(10);

  const calc = () => {
    let nBill = parseFloat(bill);


    if (nBill) {
      setTip((pct/100) * nBill);
    } 
  }


  useEffect(()=>{
   calc(); 
  },[pct] );

  return (
    <Page>
      <HeaderText>Calculadora de Gorjeta</HeaderText>
      <Input
        placeholder="Quanto deu a conta?"
        placeholderTextColor="#000"
        keyboardType="numeric"
        value={bill}
        onChangeText={n => setBill(n)}
      />

      <PctArea>
        <PctItem title="5%"  onPress ={()=>setPct (5)} />
        <PctItem title="10%" onPress ={()=>setPct(10)} />
        <PctItem title="15%" onPress ={()=>setPct(15)} />
        <PctItem title="20%" onPress ={()=>setPct(20)} />
      </PctArea>

      <CalcButton title={`CALCULAR ${pct}%` } onPress={calc} />
      {tip>0 &&
        <ResultArea>
          <ResultItemTitle>Valor da Conta</ResultItemTitle>
          <ResultItem>R$ {parseFloat(bill).toFixed(2)}</ResultItem>

          <ResultItemTitle>Valor da Gorjeta</ResultItemTitle>
          <ResultItem>R$ {tip.toFixed(2)} ({pct}%)</ResultItem>

          <ResultItemTitle>Valor da Total</ResultItemTitle>
          <ResultItem>R$ {(parseFloat(bill) + tip).toFixed(2)}</ResultItem>
        </ResultArea>
      }    
    </Page>
  );
}
