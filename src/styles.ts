import { Dimensions, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 400,
    width: Dimensions.get('window').width,
    resizeMode: 'cover',
  },
})

export default styles
