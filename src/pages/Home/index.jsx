import { Text, View, Image, TextInput, Button, ScrollView, StatusBar } from 'react-native';
import { useEffect, useState } from 'react';
import axios from 'axios';

import { Loading } from '../../components/Loading';
import { InputArea } from '../../components/InputArea';

import { useFonts, Raleway_200ExtraLight, Raleway_400Regular } from '@expo-google-fonts/raleway';
import {LinearGradient} from 'expo-linear-gradient'
import styles from './styles';


export const Home = () => {
    let baseUrl = 'https://api.openweathermap.org/data/2.5/weather?q='

    const [city, setCity] = useState('')
    const [description, setDescription] = useState('')
    const [temperature, setTemperature] = useState(0)

    const [image, setImage] = useState(-1)
    const [isLoading, setIsLoading] = useState(false)
    

    const images = [
        require('../../../assets/img/lua_tempestade.png'),
        require('../../../assets/img/lua_nublado.png'),
        require('../../../assets/img/lua_chuva.png'),
        require('../../../assets/img/lua_neve.png'),
        require('../../../assets/img/lua.png'),
        require('../../../assets/img/sol_tempestade.png'),
        require('../../../assets/img/sol_nublado.png'),
        require('../../../assets/img/sol_chuva.png'),
        require('../../../assets/img/sol_neve.png'),
        require('../../../assets/img/sol.png')
      ]

    const changeImg = (data) => {
        const hour = new Date().getHours()
    
        if (hour >= 18) {
            switch (data) {
                case 'Thunderstorm':
                    setImage(0)
                    return 0
                case 'Clouds':
                    setImage(1)
                    return 1
                case 'Drizzle':
                    setImage(2)
                    return 2
                case 'Rain':
                    setImage(2)
                    return 2
                case 'Snow':
                    setImage(3)
                    return 3
                case 'Atmosphere':
                    setImage(4)
                    return 4
                case 'Clear':
                    setImage(4)
                    return 4
            }
        } else if (hour >= 5) {
            switch (data) {
                case 'Thunderstorm':
                    setImage(5)
                    return 5
                case 'Clouds':
                    setImage(6)
                    return 6
                case 'Drizzle':
                    setImage(7)
                    return 7
                case 'Rain':
                    setImage(7)
                    return 7
                case 'Snow':
                    setImage(8)
                    return 8
                case 'Atmosphere':
                    setImage(9)
                    return 9
                case 'Clear':
                    setImage(9)
                    return 9
            }
        } 
      }

    useEffect(() => {
        const fetchApi = async () => {
            setIsLoading(true)
            const {data} = await axios.get(`${baseUrl}Brasília&appid=2bdef8885b55003598b381a2dc578987&lang=pt_br&units=metric`)
            setIsLoading(false)

            setCity(data.name)
            setTemperature(Math.ceil(data.main.temp))
            setDescription(data.weather[0].description)
            changeImg(data.weather[0].main)
        }

        fetchApi()
    }, [])

    let [fontsLoaded] = useFonts({
        Raleway_200ExtraLight,
        Raleway_400Regular,
      });
    
      if (!fontsLoaded) {
        return null;
    }

    return (
        <ScrollView 
        contentContainerStyle={styles.container}
        scrollEnabled={false} 
        keyboardShouldPersistTaps='handled'>

            <LinearGradient
            colors={['#4d3bce','#683ec9']}
            style={styles.gradient} />

            <View style={styles.content}>
                <LinearGradient
                colors={['#5E4FD6','#7F6BE4']}
                style={styles.gradient} />

            {isLoading
             ? <Loading /> 
             : <>
                <Text style={styles.city}>{city}</Text>
            
                <View
                style={{width: '100%', display: 'flex', alignItems: 'center', 
                flexDirection: 'column'}}>
                    <Text style={styles.temperature}>{temperature}º</Text>
                    <Image 
                    source={images[image]}
                    style={styles.img} />
                    <Text style={styles.description}>{description}</Text>
                </View>


                <InputArea 
                setIsLoading={setIsLoading} 
                setCity={setCity} 
                setTemperature={setTemperature}
                setDescription={setDescription}
                changeImg={changeImg} />
             </> }
                
            </View>

            <View style={styles.background}></View>

            <StatusBar hidden={false} backgroundColor={'black'} />
        </ScrollView>
    )
}