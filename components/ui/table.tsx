import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

interface CustomTableProps {
  headers: string[];
  data: string[][];
}

export const CustomTable: React.FC<CustomTableProps> = ({ headers, data }) => {
  return (
    <View style={styles.container}>
      <Table borderStyle={styles.tableBorder}>
        <Row data={headers} style={styles.head} textStyle={styles.headText} />
        <Rows data={data} textStyle={styles.text} />
      </Table>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#ffffff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  headText: { margin: 6, fontWeight: 'bold', textAlign: 'center' },
  text: { margin: 6, textAlign: 'center' },
  tableBorder: { borderWidth: 1, borderColor: '#c8e1ff' },
});

