import { useNavigation } from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import { Button, Text, View } from 'react-native';
import { ScreenNavigationProp } from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

type Props = {
    toggleNewNote: (toggle: boolean)=>void;
}
export const HomeScreen: React.FC = () =>{
    const navigation = useNavigation<ScreenNavigationProp>();
    const [ noteText, setNoteText ] = useState<string>("");

    useFocusEffect(()=>{
        getNote().then(result => setNoteText(result ?? ''));
    });

    const getNote = async () => {
        return await AsyncStorage.getItem('note');   
    }

    return(
        <>
            <View>
                <Text>
                    {noteText}
                </Text>
            </View>
            <Button onPress={()=> navigation.navigate("EditNote")} title='New Note'/>
        </>
    )
};

