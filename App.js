import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import {rotulo_input_bnt,rotulo_input_titulo } from './components/mensagens';
import { useState } from 'react'; 
import InputField from './components/InputField';
import BotaoAdcinar from './components/BotaoAdcionar';
import ListaContatos from './components/ListaContatos';

export default function App() {
  const [nome, setNome] = useState('');
  const [Telefone, setTelefone] = useState('');
  const [lista, setLista] = useState([]);

  function addMeta(){
    if(nome.trim() === '' || Telefone.trim() === '') return;
    setLista([...lista, {nome, Telefone}]);
    setNome('');
    setTelefone('');
  }

  return (
    <SafeAreaView style = {{flex: 1}}>

    <View style={styles.maiContainer}>
        <Text style = {styles.labelTitle}>{rotulo_input_titulo}</Text>

        <InputField label="Nome:" value={nome} onChangeText={setNome} />
        <InputField label="Telefone" value={Telefone} onChangeText={setTelefone} />

        <BotaoAdcinar title={rotulo_input_bnt} onPress={addMeta} />

        <ListaContatos lista={lista} />

      <StatusBar style="auto" />
    </View>
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  maiContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
    justifyContent: 'flex-start',
  },
  labelTitle: {
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
