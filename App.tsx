import React from "react"
import {
  View, 
  Text,
  SafeAreaView,
  StyleSheet,
  useColorScheme,
} from "react-native"
function App() : JSX.Element {
  const isDark = useColorScheme() === 'dark'
  const styles = StyleSheet.create({
    darkText : {
      color: '#000000'
    }
  })
  return(
    <SafeAreaView>
    <View >
      <Text style={styles.darkText}>Binod Binod Binod</Text>
      <Text>Binod Binod Binod</Text>
    </View>
  </SafeAreaView>
  )

  
}

export default App;