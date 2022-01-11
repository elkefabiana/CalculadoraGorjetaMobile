import React, { useState } from 'react';
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



export default () => {

  const [bill, setBill] = useState('');
  const [tip, setTip] = useState(0);

  const calc = () => {
    let nBill = parseFloat(bill);


    if (nBill) {
      setTip((10/100) * nBill);
    } else {
      alert("Digite o valor da conta");
    }
  }

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
      <CalcButton title="Calcular" onPress={calc} />
      {tip>0 &&
        <ResultArea>
          <ResultItemTitle>Valor da Conta</ResultItemTitle>
          <ResultItem>R$ {parseFloat(bill).toFixed(2)}</ResultItem>

          <ResultItemTitle>Valor da Gorjeta</ResultItemTitle>
          <ResultItem>R$ {tip.toFixed(2)} (%10)</ResultItem>

          <ResultItemTitle>Valor da Total</ResultItemTitle>
          <ResultItem>R$ {(parseFloat(bill) + tip).toFixed(2)}</ResultItem>
        </ResultArea>
      }    
    </Page>
  );
}
