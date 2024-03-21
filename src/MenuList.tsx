import React from "react";
import {View, Text, StyleSheet, TouchableOpacity,FlatList, StatusBar,Image} from "react-native";


interface Item {
    id: string,
    nome: string,
    preco: string,
    ingredientes: string,
    image: any;
}

const dados: Item [] = [
{id:"1" , nome: "X-Burguer", preco:"10.00" , ingredientes: "pao,hamburguer,queijo,katchup,maionese,",image:require('../assets/images/')},
{id:"2" , nome: "X-Bacon", preco:"12.00" , ingredientes: "pao,hamburguer,bacon,katchup,maionese,",image:require('../assets/images/lanche-2.png')},
{id:"3" , nome: "X-Egg", preco:"14.00" , ingredientes: "pao,hamburguer,ovo,alface,tomate,maionese,katchup,",image:require('../assets/images/lanche-3.png')},
{id:"4" , nome: "X-frango", preco:"15.00" , ingredientes: "pao,hamburguer,frango desfiado,alface,katchup,maionese,",image:require('../assets/images/lanche-4.png')},
{id:"5" , nome: "X-italiano", preco:"15.50" , ingredientes: "pao,hamburguer,salame,queijo,katchup,maionese,",image:require('../assets/images/lanche-5.png')},
{id:"6" , nome: "X-calabresa", preco:"13.00" , ingredientes: "pao,hamburguer,alface,calabresa,queijo,katchup,maionese,",image:require('../assets/images/lanche-6.png    ')},

]



const renderItem = ({item}: {item: Item}) => (
    <TouchableOpacity style={styles.item}>
        <Text>{item.nome}</Text>
        <Text>{item.preco}</Text>
        <Text>{item.ingredientes}</Text>
       <Image source={item.image} style={styles.footerIcon} />
    </TouchableOpacity>
)

function MenuList(): React.JSX.Element {
    return(
        <View style={styles.container}>
        <StatusBar backgroundColor="blue" barStyle='light-content'/>
        <View style={styles.header}>
            <Text style={styles.headerText}>NJR artesanais</Text>
        </View>
        <FlatList
        showsVerticalScrollIndicator={false} 
            data={dados}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
        />

        <View style={styles.footer}>
            <TouchableOpacity>
                <Image 
                source={require('./assets/images/home.png')}
                style={ styles.footerIcon}
                />
            </TouchableOpacity>

            <TouchableOpacity>
                <Image 
                source={require('./assets/images/orders.png')}
                style={ styles.footerIcon}
                />
            </TouchableOpacity>

            <TouchableOpacity>
                <Image 
                source={require('./assets/images/profile.png')}
                style={ styles.footerIcon}
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
        backgroundColor: 'black',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16
    },
    header: {
        backgroundColor: 'white',
        alignItems: 'center',
        paddingVertical: 10
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
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
    }
});



export default MenuList;