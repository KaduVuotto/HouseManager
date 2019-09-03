import React from 'react';

import {
    Text,
    View,
    Button,
    StatusBar,
    SafeAreaView,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    static navigationsOptions = {
        title: 'Tela Inicial',
    }

    /*static navigationsOptions = {
        title: 'Tela Inicial',
    }*/

    render() {
        const { navigate } = this.props.navigation;
        return (

            <View style={{ flex: 1, }}>
                {/*head*/}
                <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={'dark-content'} />
                <SafeAreaView style={{ flex: 1, backgroundColor: '#A1ACB3' }}>
                    <ScrollView contentInsetAdjustmentBehavior="automatic"
                        style={styles.scrollView}>
                        <View style={styles.viewHeader}>
                            <Text style={styles.textTitle}>HouseManager</Text>
                        </View>
                        {/*body*/}
                        <View style={styles.viewFormulario}>
                            {/*Usuario*/}
                            <View>
                                <TouchableOpacity
                                    style={styles.homeNavigate}
                                    onPress={() => navigate('Usuario')}
                                    underlayColor='#fff'>
                                    <Text style={styles.textHome}>Usuário</Text>
                                </TouchableOpacity>
                                {/*<Button
                            title='Usuário'
                            color="#A1ACB3"
                        onPress={() => navigate('Usuario')} />*/}
                            </View>
                            {/*Produtos*/}
                            <View>
                                <TouchableOpacity
                                    style={styles.homeNavigate}
                                    onPress={() => navigate('Produto')}
                                    underlayColor='#fff'>
                                    <Text style={styles.textHome}>Produtos</Text>
                                </TouchableOpacity>
                            </View>
                            {/*Agenda*/}
                            <View>
                                <TouchableOpacity
                                    style={styles.homeNavigate}
                                    onPress={() => navigate('Evento')}
                                    underlayColor='#fff'>
                                    <Text style={styles.textHome}>Agenda</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </View>
        );
    }
};


const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#A1ACB3',
    },
    viewHeader: {
        flex: 1,
        justifyContent: 'center',
        height: 70,
        marginTop: 20,
        paddingTop: 10,
        backgroundColor: '#A1ACB3',
        flexDirection: 'row',
    },
    textTitle: {
        color: 'white',
        alignSelf: 'center',
        marginBottom: 5,
        fontSize: 35,
        fontWeight: 'bold',
    },
    viewFormulario: {
        backgroundColor: 'white',
        borderRadius: 25,
        padding: 25,
    },
    homeNavigate: {
        marginRight: 40,
        marginLeft: 40,
        marginTop: 10,
    },
    textHome: {
        paddingTop: 20,
        paddingBottom: 20,
        color: '#fff',
        textAlign: 'center',
        backgroundColor: '#A1ACB3',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        fontSize: 20,
    },
});
export default HomeScreen
