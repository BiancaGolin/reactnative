import * as React from 'react';
import { Text, View, StyleSheet, FlatList, Pressable, Image,Modal } from 'react-native';
import Constants from 'expo-constants';


const ShowDetalhes = ({display,toogleModal,mensagem}) => (   
    <Modal
          animationType="slide"
          transparent={true}
          visible={display}
          onRequestClose={toogleModal}
    >

        <View style={styles.centeredView}>
          <View style={styles.modalView}>
                <Pressable onPress={toogleModal}>
                  <Text>{mensagem}</Text>
                </Pressable>
          </View>
        </View>
    
    </Modal>
        
 )

const Pessoa = ({nome,comentario,foto}) => {
    
    //state para controle do Modal
    const [modal,setModal] = React.useState(false)

    function mudaModal(){
      setModal(!modal)
    }

    return(
    <View>
      <ShowDetalhes display={modal} toogleModal={mudaModal} mensagem={comentario}/>
      
      <Pressable onPress={mudaModal}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: foto,
          }}
        />

        <Text style={styles.paragraph}>{nome}</Text>
      </Pressable>
    </View>
    )
}


const DATA = [
        {
          "id": 1,
          "name": "Morty",
          "body": "Criado por Justin Roiland e Dan Harmon, Morty é um ansioso garoto de 14 anos baseado em Marty McFly de Back to the Future.",
          "foto": "https://pbs.twimg.com/profile_images/482902136427397120/f6h3mYEu.jpeg"
        },
        {
          "id": 2,
          "name": "Ricky",
          "body": "Richard D. Rick Sanchez III é um dos dois protagonistas homônimos da série animada de televisão de Adult Swim, Rick e Morty. Criado por Justin Roiland e Dan Harmon e dublado pelo primeiro, Sanchez é um cientista alcoólatra misantrópico",
          "foto": "https://imagensemoldes.com.br/wp-content/uploads/2021/04/Ilustracao-Rick-and-Morty-PNG.png"
        },
        {
          "id": 3,
          "name": "Beth",
          "body": "Beth Smith é uma das personagens principais da série de animação americana Rick e Morty. Criada por Justin Roiland e Dan Harmon, Beth é uma veterinária especializada em cirurgia de cavalos",
          "foto": "https://rickandmortyapi.com/api/character/avatar/4.jpeg"
        },
        {
          "id": 4,
          "name": "Jerry",
          "body": "Jerry Smith é um dos personagens principais de Rick e Morty. Jerry é marido de Beth Smith, pai de Summer Smith e Morty Smith, e genro de Rick Sanchez.",
          "foto": "https://mystickermania.com/cdn/stickers/rick-and-morty/jerry-smith-sock-toy-512x512.png"
        },
        {
          "id": 5,
          "name": "Summer",
          "body": "Summer Smith é um dos personagens principais da série de animação americana Rick e Morty. Criado por Justin Roiland e Dan Harmon, Summer é uma adolescente convencional e muitas vezes superficial e inicialmente de 17 anos, que está obcecada em melhorar seu status social entre seus pares.",
          "foto": "https://i.pinimg.com/originals/93/3f/ce/933fce7bf2db6fed7b2a38569fd5f7c4.png"
        }
    ];



//item com uma arrow function
/*const meuItemObj = ({item}) => (
  <View>
      <Text style={styles.paragraph}>{item.title}</Text>
    </View>
)*/



export default function App() {

  //função que renderiza cada item do FlatList
  function meuItem({item}){
       
    return(
      <Pessoa nome={item.name}
              comentario={item.body}
              foto={item.foto}
      />
    )
  }
  

  return (

    <View style={styles.container}>

      <FlatList
        data={DATA}
        renderItem={meuItem}
        keyExtractor={item => item.id}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 2,
  },
  paragraph: {
    margin: 12,
    padding: 12,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'yellow'
  },
  tinyLogo: {
    width: 50,
    height: 50,
    alignSelf: 'center'
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
