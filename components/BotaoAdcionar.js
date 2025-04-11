import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function BotaoAdicionar({ onPress, title }) {
  return (
    <View style={styles.inputRow}>
      <Text style={styles.label}></Text>
      <View style={{ flex: 1 }}>
        <TouchableOpacity style={styles.botao} onPress={onPress}>
          <Text style={styles.textoBotao}>{title}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  label: {
    width: '25%',
  },
  botao: {
    backgroundColor: '#DDE8FA', 
    paddingVertical: 5,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#AAB8C2',
  },
  textoBotao: {
    fontWeight: 'normal',
    fontSize: 20,
    fontWeight: 'bold'
  },
});
