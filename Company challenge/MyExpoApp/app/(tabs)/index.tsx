import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

interface Contact {
  name: string;
  phone: string;
}

const contacts = [
  { name: "Test1", phone: "9999999999" },
  { name: "Test2", phone: "9999999998" },
  { name: "ATest3", phone: "9999999997" },
  { name: "BTest4", phone: "9999999996" },
  { name: "CTest5", phone: "9999999995" },
  { name: "DTest6", phone: "9999999994" },
  { name: "ETest7", phone: "9999999993" },
  { name: "FTest8", phone: "9999999992" },
  { name: "GTest9", phone: "9999999991" },
  { name: "HTest10", phone: "9999999990" },
  { name: "ITest11", phone: "9999999981" },
  { name: "JTest12", phone: "9999999982" },
  { name: "KTest13", phone: "9999999983" },
  { name: "LTest14", phone: "9999999984" },
  { name: "MTest15", phone: "9999999985" },
  { name: "NTest16", phone: "9999999986" },
  { name: "OTest17", phone: "9999999987" },
  { name: "PTest18", phone: "9999999988" },
  { name: "QTest19", phone: "9999999989" },
  { name: "RTest20", phone: "9999999970" },
];
const HomeScreen: React.FC = () => {
  const [visibleContacts, setVisibleContacts] = useState<Contact[]>(contacts);

  const handleDelete = (phone: string) => {
    setVisibleContacts(prevContacts => prevContacts.filter(contact => contact.phone !== phone));
  };

  const renderItem = ({ item }: { item: Contact }) => (
    <View style={styles.contactCard}>
      <View style={styles.initialContainer}>
        <Text style={styles.initial}>{item.name[0]}{item.name.split(" ")[1]?.[0]}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.phone}>+91 - {item.phone}</Text>
      </View>
      <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete(item.phone)}>
        <MaterialIcons name="delete" size={24} color="#900" />
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      data={visibleContacts}
      renderItem={renderItem}
      keyExtractor={(item) => item.phone}
    />
  );
};

const styles = StyleSheet.create({
  contactCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginHorizontal: 10,
  },
  initialContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#f5c6cb",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  initial: {
    color: "#333",
    fontSize: 18,
    fontWeight: "bold",
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  phone: {
    color: "gray",
  },
  deleteButton: {
    padding: 10,
  },
});

export default HomeScreen;
