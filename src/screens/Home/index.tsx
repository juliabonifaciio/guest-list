import React, { useState } from 'react';

import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';

import { Participant } from '../../../components/Participant';

import { styles } from './styles';

export default function Home(){

    const [participants, setParticipants] = useState <string[]>([]);
    const [participantName, setParticipantName] = useState ('');

   
    // Função para adicionar participante
    function handleParticipantAdd() {
        if (participants.includes(participantName)) {
            return Alert.alert('Convidado(a) existente...', 'Já existe um(a) convidado(a) com esse nome na lista.');
        }

        setParticipants(prevState => [...prevState, participantName]);
        setParticipantName('');
    }

    // Função para remover participante
    function handleParticipantRemove(name: string){
        Alert.alert('Remover participante...', `Deseja mesmo realizar a remoção do(a) convidado(a) ${name}?`, [
            {
                text: 'Sim',
                onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
            },

            {
                text: 'Cancelar',
                style: 'cancel'
            },
        ]);
    }

    return (
        <View style={styles.container}>

            <Text style={styles.eventName}> 
                Lista de Convidados 
            </Text>

            <Text style={styles.eventDate}>
                Descrição do Evento
            </Text>

            <View style={styles.form}>
                <TextInput 
                    style={styles.input}
                    placeholder='Digite aqui...'
                    placeholderTextColor='#363636'
                    onChangeText={setParticipantName}
                    value={participantName}
                />

                <TouchableOpacity 
                    style={styles.button}
                    onPress={handleParticipantAdd}>
                        <Text style={styles.buttonText}>
                            + 
                        </Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={participants}  
                
                keyExtractor={item => item}

                renderItem={({ item }) => (
                    <Participant 
                        key={item}
                        name={item}
                        onRemove={() => handleParticipantRemove(item)}
                    />
                )}

                showsVerticalScrollIndicator={false}

                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Ninguém se cadastrou ainda? Adicione aqui os convidados para o seu evento!
                    </Text>
                )}
            />
        </View>
    )
}