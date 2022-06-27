import react from 'react';
import { View, Image, StyleSheet, SafeAreaView, StatusBar, Text, Pressable, Linking} from 'react-native'; //pressable apertar determinado botão

const colorGitHub = '#010409'; //cor do github
const colorFontGitHub = '#C9D1D9';
const imageProfileGitHub = 'https://avatars.githubusercontent.com/u/58638736'; //váriável para a imagem
const colorDarkFontGitHub = '#4f565e'
const urlGitHub= 'https://github.com/HellenBarros';
const App = () => { //passei as propriedades de style para cada componente q eu quis
              //Statusbar é o componente que mexe com a barra de notificações do celular
              //SafeAreaView faz com que os componentes não saiam da área de visualização
    const handlePressGoToGitHub=async()=> {
    const res = await Linking.canOpenURL(urlGitHub)
    console.log('verificando link');
      if(res){
        await Linking.openURL(urlGitHub);
        console.log('aprovado link');
      }
      else{
        console.log('não foi possivewl');
      }
    }         
    return (     
      <SafeAreaView style={style.container}>
        <StatusBar backgroundColor={colorGitHub} barStyle="white"/> 
      <View style={style.content}>     
        <Image 
        accessibilityLabel="Imagem de hellen" //descrição da imagme caso não carregue
        style={style.avatar}
        source={{uri: imageProfileGitHub}}/> 
        <Text accessibilityLabel="nome: Hellen Barros"  
        style={[style.defaultText, style.name]}> Hellen Barros</Text>
        <Text accessibilityLabel="nickname: HellenBarros" 
        style={[style.defaultText, style.nickName]}>HellenBarros</Text>
        <Text accessibilityLabel= "descrição: font-end denveloper @ibarros.hellen " 
        style={[style.defaultText, style.description]}> front-end denveloper @ibarros.hellen
        </Text>
        <Pressable onPress={handlePressGoToGitHub}> 
        <View style={style.button}>
          <Text style={[style.defaultText, style.textButton]}>
            Open in GitHub 
          </Text>
        </View>
        </Pressable>
      </View>
    </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({  //Seria o CSS
  container: { 
    backgroundColor: colorGitHub,
    flex: 1, //expandir a cor para a tela inteira
    justifyContent: 'center', // centro da orizontal
    alignItems: 'center',//pode ser colocado aqui
  },
  content:{
    alignItems: 'center',  //alinhar na vertical
    padding: 20, //para impedir q o texto toque as laterais

  },
 avatar:{ //para aparecer a imagem tem q informar o tamanho dela
  height: 150,
  width: 150,
  borderRadius: 100, //para deixar a imagem redonda
  borderColor: 'white', //cor da borda
  borderWidth:1, //tamanho da borda
 }, 
defaultText:{
  color: colorFontGitHub,
},
name:{
  marginTop: 20, // colocando distancia
  fontWeight: 'bold', // negrito
  fontSize: 24, //tamanho da fonte
},
nickName:{
  color: colorDarkFontGitHub,
  fontsize: 18,
},
description:{
  fontWeight: 'bold', //deixa em negrito
  fontSize:14,
},
button:{
  marginTop: 20,
  backgroundColor: colorDarkFontGitHub,
  borderRadius:10,
  padding: 20,
},
textButton:{
  fontWeight: 'bold', //deixa em negrito
  fontSize:16,
},
});