import { Alert, Button, Text, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';

import Numbers from '../../components/atoms/numbers';
import { generateRandomNumber } from '../../utils/functions';
import { styles } from './styles';
import { theme } from '../../utils/constants/theme';

const GameScreen = (props) => {
    const { userOption, onGameOver } = props;
    const [currentGuess, setCurrentGuess] = useState(generateRandomNumber(0, 100, userOption));
    const [rounds, setRounds] = useState(0);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    useEffect(() => {
        if(currentGuess == userOption) onGameOver(rounds)
    }, [currentGuess, userOption, onGameOver])

    const handlerNextGuess = (direction) => {
        if(
            (direction === 'lower' && currentGuess < userOption) ||
            (direction === 'greater' && currentGuess > userOption)
        ) {
            Alert.alert('No mientas', 'Estas haciendo trampa', [
                { text: 'OK, no', style: 'Cancelar' }
            ])
        }
        /*
        if(direction === 'lower') {
            //currentHigh.current = currentGuess;
            console.warn("max: "+currentHigh.current+ " min: "+currentLow.current+ " current: "+currentGuess);
        } else {
            //currentLow.current = currentGuess; 
            console.warn("max: "+currentHigh.current+ " min: "+currentLow.current+ " current: "+currentGuess);
        }
        */
         
         
        const nextNumber = generateRandomNumber(currentLow.current, currentHigh.current, currentGuess); 
        setCurrentGuess(nextNumber);
        setRounds(current => current + 1);
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.subtitle}>Suposición del oponente</Text>
            <Numbers number={currentGuess} />
            <View style={styles.buttonContainer}>
                <Button title="Menor" onPress={() => handlerNextGuess('lower')} color={theme.primaryColor}/>
                <Button title="Mayor" onPress={() =>  handlerNextGuess('greater')} color={theme.primaryColor}/>
            </View>
        </View>
    )
}

export default GameScreen;