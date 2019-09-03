import React, { Fragment } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput,
    Button,
    Image,
    KeyboardAvoidingView,
    TouchableOpacity,
    Alert,
} from 'react-native';

import { TextInputMask } from 'react-native-masked-text'

export default class Produto extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textProduto: '',
            textTempoDeUso: '',
            textValidade: '',
            textPreco: '',
            textDescricao: '',
            textCategoria: '',
        }
    }

    ShowMaxAlert = (textProduto) => {
        var TextLength = textProduto.length.toString();
        if (TextLength == 60) {
            Alert.alert("Desculpe, você digitou o limite máximo de caracteres.")
            // Put your code here which you want to execute when TextInput entered text reached to 10.
        }
    }

    ShowMaxAlert = (textDescricao) => {
        var TextLength = textDescricao.length.toString();
        if (TextLength == 60) {
            Alert.alert("Desculpe, você digitou o limite máximo de caracteres.")
            // Put your code here which you want to execute when TextInput entered text reached to 10.
        }
    }

    ShowMaxAlert = (textCategoria) => {
        var TextLength = textCategoria.length.toString();
        if (TextLength == 20) {
            Alert.alert("Desculpe, você digitou o limite máximo de caracteres.")
            // Put your code here which you want to execute when TextInput entered text reached to 10.
        }
    }

    ShowMaxAlert = (textTempoDeUso) => {
        var TextLength = textTempoDeUso.length.toString();
        if (TextLength == 20) {
            Alert.alert("Desculpe, você digitou o limite máximo de caracteres.")
            // Put your code here which you want to execute when TextInput entered text reached to 10.
        }
    }

    onChangeHandler(field, value) {
        this.setState({ [field]: value });
    }

    register() {
        if (this.state.textCategoria.length > 0 &&
            this.state.textTempoDeUso.length > 0 &&
            this.state.textProduto.length > 0 &&
            this.state.textDescricao.length> 0 &&
            this.state.textPreco.length> 0 &&
            this.state.textValidade > 0
            ) {
            this.props.navigation.goBack();
            Alert.alert("Sucesso!", "Produto salvo com sucesso!");
        }
        else {
            Alert.alert("Atenção!", "Verifique os campos e preencha-os corretamente!");
        }
    }

    render() {
        const { goBack } = this.props.navigation;
        return (
            <Fragment>
                <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={'dark-content'} />
                <SafeAreaView style={{ flex: 1, backgroundColor: '#134ca1' }}>
                    <ScrollView
                        contentInsetAdjustmentBehavior="automatic"
                        style={styles.scrollView}>
                        {/*head*/}
                        <View>
                            <View style={styles.viewHeader}>
                                <View style={styles.viewLeft}>
                                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                        <Image
                                            style={styles.buttonHeader}
                                            source={require('./assets/setaBranca.png')}
                                        />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.viewHeaderCenter} >
                                    <Text style={styles.textTitle}>
                                        Produto
                                    </Text>
                                </View>
                                <View style={styles.viewRight} >
                                </View>
                            </View>
                            {/*body*/}
                            <KeyboardAvoidingView behavior="padding" enabled>
                                <View style={styles.viewFormulario}>
                                    <Text style={styles.textCamposFormulario}>Nome: </Text>
                                    <TextInput
                                        maxLength={60}
                                        placeholder='Nome'
                                        style={styles.textInputFormulario}
                                        onChangeText={(textProduto) => { this.onChangeHandler('textProduto', textProduto); this.ShowMaxAlert(textProduto) }}
                                        value={this.state.textProduto}
                                    />
                                    <Text style={styles.textCamposFormulario}>Preço: </Text>
                                    <TextInputMask
                                        placeholder='Preço'
                                        style={styles.textInputFormulario}
                                        type={'money'}
                                        options={{
                                            precision: 2,
                                            separator: ',',
                                            delimiter: '.',
                                            unit: 'R$',
                                            suffixUnit: ''
                                        }}
                                        value={this.state.advanced}
                                        value={this.state.advanced}
                                        onChangeText={text => {
                                            this.setState({
                                                advanced: text
                                            })
                                        }}
                                    />
                                    <Text style={styles.textCamposFormulario}>Descrição: </Text>
                                    <TextInput
                                        maxLength={60}
                                        placeholder='Descrição'
                                        style={styles.textInputFormulario}
                                        onChangeText={(textDescricao) => { this.onChangeHandler('textDescricao', textDescricao); this.ShowMaxAlert(textDescricao) }}
                                        value={this.state.textDescricao}
                                    />
                                    <Text style={styles.textCamposFormulario}>Categoria: </Text>
                                    <TextInput
                                        maxLength={20}
                                        placeholder='Categoria'
                                        style={styles.textInputFormulario}
                                        onChangeText={(textCategoria) => { this.onChangeHandler('textCategoria', textCategoria); this.ShowMaxAlert(textCategoria) }}
                                        value={this.state.textCategoria}
                                    />
                                    <Text style={styles.textCamposFormulario}>Tempo estimado de uso: </Text>
                                    <TextInput
                                        maxLength={20}
                                        placeholder='Tempo de uso'
                                        style={styles.textInputFormulario}
                                        onChangeText={(textTempoDeUso) => { this.onChangeHandler('textTempoDeUso', textTempoDeUso); this.ShowMaxAlert(textTempoDeUso) }}
                                        value={this.state.textTempoDeUso}
                                    />
                                    <Text style={styles.textCamposFormulario}>Data de Validade: </Text>
                                    <TextInputMask
                                        placeholder='DD/MM/AAAA'
                                        style={styles.textInputFormulario}
                                        type={'datetime'}
                                        options={{
                                            format: 'DD/MM/YYYY'
                                        }}
                                        value={this.state.dt}
                                        onChangeText={text => {
                                            this.setState({
                                                dt: text
                                            })
                                        }}
                                    />


                                    <View style={styles.alternativeLayoutButtonContainer}>
                                        <Button
                                            onPress={() => this.register()}
                                            title="Salvar Produto"
                                            color="#A1ACB3"
                                            accessibilityLabel="Salvar o produto"
                                        />
                                    </View>

                                </View>
                            </KeyboardAvoidingView>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </Fragment >

        );
    }
};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#A1ACB3',
    },
    viewLeft: {
        flex: 1,
        justifyContent: 'center',
    },
    viewHeaderCenter: {
        flex: 3,
    },
    viewRight: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginRight: 7,
        flex: 1,
    },
    viewHeader: {
        flex: 1,
        height: 70,
        justifyContent: 'center',
        marginTop: 20,
        paddingTop: 10,
        backgroundColor: '#A1ACB3',
        flexDirection: 'row',
    },
    buttonHeader: {
        width: 25,
        height: 25,
        marginLeft: 20,
    },
    iconHeader: {
        width: 55,
        height: 55,
        marginRight: 10,
    },
    textTitle: {
        color: 'white',
        alignSelf: 'center',
        marginBottom: 5,
        fontSize: 35,
        fontWeight: 'bold',
    },
    textHeader: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
    },
    viewFormulario: {
        backgroundColor: 'white',
        borderRadius: 25,
        padding: 25,
    },
    textInputFormulario: {
        height: 40,
        borderColor: '#d4d4d4',
        borderWidth: 1,
        margin: 10,
    },
    textCamposFormulario: {
        fontSize: 18,
    },
    alternativeLayoutButtonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        fontSize: 45,
    },
});