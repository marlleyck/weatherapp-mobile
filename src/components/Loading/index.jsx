import { Text, View, Image} from 'react-native';

import styles from './styles'

export const Loading = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/loading.gif')} style={styles.gif} />
            <Text style={styles.title}>Carregando...</Text>
        </View>
    )

}