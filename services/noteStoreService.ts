import AsyncStorage from "@react-native-async-storage/async-storage";

export const getNote = async () => {
    return await AsyncStorage.getItem('note');   
}
  