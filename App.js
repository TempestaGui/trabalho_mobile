import { StatusBar } from 'expo-status-bar';
import {Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import {rotulo_input_bnt,rotulo_input_titulo } from './components/mensagens';
import { useState } from 'react'; 
import { SafeAreaView } from 'react-native';

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
      
      <View style={styles.containerInput}>

        <View style = {styles.inputRow}>
          <Text style={styles.label}>Nome:</Text>
          <TextInput style={styles.inputText} onChangeText={setNome} value={nome}></TextInput>
        </View>

        <View style = {styles.inputRow}>
          <Text style = {styles.label}>Telefone</Text>
          <TextInput style={styles.inputText} onChangeText={setTelefone} value={Telefone}></TextInput>
        </View>

      </View> 

      <View style = {styles.inputRow}> 
        <Text style = {styles.label}></Text>
        <View style = {{flex: 1}}>
          <Button title={rotulo_input_bnt} onPress={addMeta}></Button>
        </View>
        </View>

        <ScrollView style = {styles.listaContainers}>

          <View style = {styles.listaHeader}>
            <Text style = {[styles.listaColuna, styles.listaTitulo]}>Nome</Text> 
            <Text style = {[styles.listaColuna, styles.listaTitulo]}>Telefone</Text> 
          </View>

          {lista.map((item, index) => (
            <View key={index} style = {styles.listaLinha}>
                <Text style = {styles.listaColuna}>{item.nome}</Text>
                <Text style = {styles.listaColuna}>{item.Telefone}</Text>
            </View> 
          ))}
        </ScrollView>

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
  inputText: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
    padding: 8,
  },
  containerInput: {
    marginBottom: 20,
  }, 
  label: {
    width: '25%',
    fontSize: 16,
    fontWeight: 'bold',
  },
  labelTitle: {
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  listaContainers: {
    flex: 1,
    marginTop: 10,
    borderTopWidth: 2,
    borderColor: 'black',
    paddingTop: 15,
  },
  listaHeader: {
    flexDirection: 'row',
    paddingBottom: 5,
  },
  listaLinha: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  listaColuna: {
    flex: 1,
    fontSize: 16,
  },
  listaTitulo: {
    fontWeight: 'bold',
  },
});
