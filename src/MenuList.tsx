import React from "react";
import {View, Text, StyleSheet, TouchableOpacity,FlatList, StatusBar,Image, ImageBackground} from "react-native";


interface Item {
    id: string,
    nome: string,
    preco: string,
    ingredientes: string,
    image: any
    
}

const dados: Item [] = [
{id:"1" , nome: "𝑿-𝑩𝑼𝑹𝑮𝑼𝑬𝑹", preco:"R$10.00" , ingredientes: "𝔭𝔞̃𝔬,𝔥𝔞𝔪𝔟𝔲𝔯𝔤𝔲𝔢𝔯,𝔮𝔲𝔢𝔦𝔧𝔬,𝔨𝔞𝔱𝔠𝔥𝔲𝔭,𝔪𝔞𝔦𝔬𝔫𝔢𝔰𝔢", image: require('./assets/image/pao1.png')},
{id:"2" , nome: "𝑿-𝑩𝑨𝑪𝑶𝑵", preco:"R$12.00" , ingredientes: "𝔭𝔞̃𝔬,𝔥𝔞𝔪𝔟𝔲𝔯𝔤𝔲𝔢𝔯,𝔟𝔞𝔠𝔬𝔫,𝔨𝔞𝔱𝔠𝔥𝔲𝔭,𝔪𝔞𝔦𝔬𝔫𝔢𝔰𝔢", image: require('./assets/image/pao2.png')},
{id:"3" , nome: "𝑿-𝑬𝑮𝑮", preco:"R$14.00" , ingredientes: "𝔭𝔞̃𝔬,𝔥𝔞𝔪𝔟𝔲𝔯𝔤𝔲𝔢𝔯,𝔬𝔳𝔬,𝔞𝔩𝔣𝔞𝔠𝔢,𝔱𝔬𝔪𝔞𝔱𝔢,𝔪𝔞𝔦𝔬𝔫𝔢𝔰𝔢,𝔨𝔞𝔱𝔠𝔥𝔲𝔭", image: require('./assets/image/pao3.png')},
{id:"4" , nome: "𝑿-𝑭𝑹𝑨𝑵𝑮𝑶", preco:"R$14.00" , ingredientes: "𝔭𝔞̃𝔬,𝔥𝔞𝔪𝔟𝔲𝔯𝔤𝔲𝔢𝔯,𝔣𝔯𝔞𝔫𝔤𝔬 𝔡𝔢𝔰𝔣𝔦𝔞𝔡𝔬,𝔞𝔩𝔣𝔞𝔠𝔢,𝔨𝔞𝔱𝔠𝔥𝔲𝔭,𝔪𝔞𝔦𝔬𝔫𝔢𝔰𝔢", image: require('./assets/image/pao4.png')},
{id:"5" , nome: "𝑿-𝑺𝑨𝑳𝑨𝑴𝑬", preco:"R$12.50" , ingredientes: "𝔭𝔞̃𝔬,𝔥𝔞𝔪𝔟𝔲𝔯𝔤𝔲𝔢𝔯,𝔰𝔞𝔩𝔞𝔪𝔢,𝔮𝔲𝔢𝔦𝔧𝔬,𝔨𝔞𝔱𝔠𝔥𝔲𝔭,𝔪𝔞𝔦𝔬𝔫𝔢𝔰𝔢", image: require('./assets/image/pao5.png')},
{id:"6" , nome: "𝑿-𝑪𝑨𝑳𝑨𝑩𝑹𝑬𝑺𝑨", preco:"R$13.00" , ingredientes: "𝔭𝔞̃𝔬,𝔥𝔞𝔪𝔟𝔲𝔯𝔤𝔲𝔢𝔯,𝔞𝔩𝔣𝔞𝔠𝔢,𝔠𝔞𝔩𝔞𝔟𝔯𝔢𝔰𝔞,𝔮𝔲𝔢𝔦𝔧𝔬,𝔨𝔞𝔱𝔠𝔥𝔲𝔭,𝔪𝔞𝔦𝔬𝔫𝔢𝔰𝔢", image: require('./assets/image/pao6.png')},
{id:"7" , nome: "𝑩𝑰𝑮 𝑩𝑼𝑹𝑮𝑼𝑬𝑹 ", preco:"R$12.00" , ingredientes: "𝔭𝔞̃𝔬,𝔥𝔞𝔪𝔟𝔲𝔯𝔤𝔲𝔢𝔯,𝔮𝔲𝔢𝔦𝔧𝔬,𝔨𝔞𝔱𝔠𝔥𝔲𝔭,𝔪𝔞𝔦𝔬𝔫𝔢𝔰𝔢", image: require('./assets/image/pao1.png')},
{id:"8" , nome: "𝑩𝑰𝑮 𝑩𝑨𝑪𝑶𝑵", preco:"R$16.00" , ingredientes: "𝔭𝔞̃𝔬,𝔥𝔞𝔪𝔟𝔲𝔯𝔤𝔲𝔢𝔯,𝔟𝔞𝔠𝔬𝔫,𝔨𝔞𝔱𝔠𝔥𝔲𝔭,𝔪𝔞𝔦𝔬𝔫𝔢𝔰𝔢", image: require('./assets/image/pao2.png')},
{id:"9" , nome: "𝑩𝑰𝑮 𝑬𝑮𝑮", preco:"R$14.00" , ingredientes: "𝔭𝔞̃𝔬,𝔥𝔞𝔪𝔟𝔲𝔯𝔤𝔲𝔢𝔯,𝔣𝔯𝔞𝔫𝔤𝔬 𝔡𝔢𝔰𝔣𝔦𝔞𝔡𝔬,𝔞𝔩𝔣𝔞𝔠𝔢,𝔨𝔞𝔱𝔠𝔥𝔲𝔭,𝔪𝔞𝔦𝔬𝔫𝔢𝔰𝔢", image: require('./assets/image/pao3.png')},
{id:"10" , nome: "𝑩𝑰𝑮 𝑭𝑹𝑨𝑵𝑮𝑶", preco:"R$15.00" , ingredientes: "𝔭𝔞̃𝔬,𝔥𝔞𝔪𝔟𝔲𝔯𝔤𝔲𝔢𝔯,𝔣𝔯𝔞𝔫𝔤𝔬 𝔡𝔢𝔰𝔣𝔦𝔞𝔡𝔬,𝔞𝔩𝔣𝔞𝔠𝔢,𝔨𝔞𝔱𝔠𝔥𝔲𝔭,𝔪𝔞𝔦𝔬𝔫𝔢𝔰𝔢", image: require('./assets/image/pao4.png')},
{id:"11" , nome: "𝑩𝑰𝑮 𝑺𝑨𝑳𝑨𝑴𝑬", preco:"R$16.00" , ingredientes: "𝔭𝔞̃𝔬,𝔥𝔞𝔪𝔟𝔲𝔯𝔤𝔲𝔢𝔯,𝔰𝔞𝔩𝔞𝔪𝔢,𝔮𝔲𝔢𝔦𝔧𝔬,𝔨𝔞𝔱𝔠𝔥𝔲𝔭,𝔪𝔞𝔦𝔬𝔫𝔢𝔰𝔢", image: require('./assets/image/pao5.png')},
{id:"12" , nome: "𝑩𝑰𝑮 𝑪𝑨𝑳𝑨𝑩𝑹𝑬𝑺𝑨", preco:"R$13.00" , ingredientes: "𝔭𝔞̃𝔬,𝔥𝔞𝔪𝔟𝔲𝔯𝔤𝔲𝔢𝔯,𝔞𝔩𝔣𝔞𝔠𝔢,𝔠𝔞𝔩𝔞𝔟𝔯𝔢𝔰𝔞,𝔮𝔲𝔢𝔦𝔧𝔬,𝔨𝔞𝔱𝔠𝔥𝔲𝔭,𝔪𝔞𝔦𝔬𝔫𝔢𝔰𝔢", image: require('./assets/image/pao6.png')},
{id:"13" , nome: "𝑳𝑨𝑵𝑪𝑯𝑬 𝑴𝑼𝑰𝑻𝑶 𝑳𝑶𝑼𝑪𝑶", preco:"R$18.00" , ingredientes: "𝔭𝔞̃𝔬,𝔥𝔞𝔪𝔟𝔲𝔯𝔤𝔲𝔢𝔯,𝔰𝔞𝔩𝔞𝔪𝔢,𝔮𝔲𝔢𝔦𝔧𝔬,𝔨𝔞𝔱𝔠𝔥𝔲𝔭,𝔪𝔞𝔦𝔬𝔫𝔢𝔰𝔢", image: require('./assets/image/pao5.png')},
{id:"14" , nome: "𝑳𝑨𝑵𝑪𝑯𝑬 𝑴𝑼𝑰𝑻𝑶 𝑩𝑶𝑴", preco:"R$17.50" , ingredientes: "𝔭𝔞̃𝔬,𝔥𝔞𝔪𝔟𝔲𝔯𝔤𝔲𝔢𝔯,𝔣𝔯𝔞𝔫𝔤𝔬 𝔡𝔢𝔰𝔣𝔦𝔞𝔡𝔬,𝔞𝔩𝔣𝔞𝔠𝔢,𝔨𝔞𝔱𝔠𝔥𝔲𝔭,𝔪𝔞𝔦𝔬𝔫𝔢𝔰𝔢", image: require('./assets/image/pao4.png')},
{id:"15" , nome: "𝑳𝑨𝑵𝑪𝑯𝑬 𝑬𝑿𝑪𝑬𝑳𝑬𝑵𝑻𝑬", preco:"R$18.00" , ingredientes: "𝔭𝔞𝔬,𝔥𝔞𝔪𝔟𝔲𝔯𝔤𝔲𝔢𝔯,𝔞𝔩𝔣𝔞𝔠𝔢,𝔠𝔞𝔩𝔞𝔟𝔯𝔢𝔰𝔞,𝔮𝔲𝔢𝔦𝔧𝔬,𝔨𝔞𝔱𝔠𝔥𝔲𝔭,𝔪𝔞𝔦𝔬𝔫𝔢𝔰𝔢", image: require('./assets/image/pao6.png')},

]



const renderItem = ({item}: {item: Item}) => (
    <TouchableOpacity style={styles.item}>
        <Text style={styles.text1}>{item.nome}</Text>
        <Text style={styles.text2}>{item.preco}</Text>
        <Text style={styles.text3}>{item.ingredientes}</Text>
        <Image source={item.image} style={styles.imageIcon}></Image>
      
    </TouchableOpacity>
)

function MenuList(): React.JSX.Element {
    return(
        <View style={styles.container}>
     <ImageBackground source={require('./assets/image/fundo.png')} resizeMode="cover" style={styles.imageFundo}>
        <StatusBar backgroundColor="black" barStyle='light-content'/>
        <View style={styles.header}>
        <Image
        source={require('./assets/image/logo.png')}style={styles.imageLogo}/>
        </View>
        <FlatList
        showsVerticalScrollIndicator={false} 
            data={dados}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
        />
        </ImageBackground>
         <View style={styles.footer}>
                <TouchableOpacity>
                    <Image
                        source={require('./assets/image/home.png')}
                        style={styles.footerIcon}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image
                        source={require('./assets/image/orders.png')}
                        style={styles.footerIcon}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image
                        source={require('./assets/image/profile.png')}
                        style={styles.footerIcon}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={require('./assets/image/menu.png')}
                        style={styles.footerIcon}
                    />
                </TouchableOpacity>
            </View>
    </View>
)       
      
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
       
    },
    item: {
        backgroundColor: '#fbfbdb',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius:20,
        
    },
    header: {
        backgroundColor: '#fbfbdb',
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius:20
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    footer: {
        borderTopWidth: 0.2, 
        backgroundColor: 'black', 
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        alignItems: 'center', 
        paddingVertical: 10
    },
    footerIcon: {
        width: 30,
        height: 30
    },
    imageIcon: {
        marginTop: 20,
        width: 320,
        height: 150,
        borderRadius: 20
    },
    imageLogo: {
        width: 320,
        height:130,
        borderRadius: 20
    },
    imageFundo: {
        flex: 1,
        justifyContent: 'center',
    },
    text1:{
        fontSize: 18,
        fontWeight:'500',
        color: 'black'
    },
    text2:{
        fontSize: 18,
        fontWeight:'500',
        color: 'black'
    },
    text3:{
        fontSize: 18,
        fontWeight:'500',
        color: 'black'
    }
});



export default MenuList;

