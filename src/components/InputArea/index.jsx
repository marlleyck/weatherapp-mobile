import { useState } from "react"
import { View, TextInput, Button } from "react-native"
import axios from "axios"

import styles from "./style"

export const InputArea = (props) => {
    let baseUrl = 'https://api.openweathermap.org/data/2.5/weather?q='
    const [inputCity, setInputCity] = useState('')

    const handleSearchCity = async () => {
        if (inputCity === '') {
            alert('Ops! você não digitou nada... >(')
            return;
          }
          
          let cityResult = inputCity.trim()
      
          props.setIsLoading(true)
      
          const {data} = await
          axios.get(`${baseUrl}${cityResult}&appid=2bdef8885b55003598b381a2dc578987&lang=pt_br&units=metric`)
      
          props.setIsLoading(false)
      
          props.setCity(data.name)
          props.setTemperature(Math.ceil(data.main.temp))
          props.setDescription(data.weather[0].description)
          props.changeImg(data.weather[0].main)

          setInputCity('')
    }

    return (
        <View 
          style={{width: 350, display: 'flex', alignItems: 'center', justifyContent: 'center', 
          flexDirection: 'row'}}>

          <TextInput style={styles.input} 
            value={inputCity}
            onChangeText={(text) => {setInputCity(text)} } />

          <Button title='Search' onPress={handleSearchCity} />

        </View>
    )
}