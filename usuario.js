/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

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

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class Usuario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textNome: '',
      textEmail: '',
      textNascimento: '',
      textEndereco: '',
      textSenha: '',
      emailIsValid: false,
      formIsNew: true,
      messageEmailError: '',
    }
  }

  ShowMaxAlert = (textNome) => {

    var TextLength = textNome.length.toString();

    if (TextLength == 60) {
      Alert.alert("Desculpe, você digitou o limite máximo de caracteres.")
      // Put your code here which you want to execute when TextInput entered text reached to 10.
    }
  }

  onChangeHandler(field, value) {
    this.setState({ [field]: value });
  }
  validateEmail(textEmail) {
    if (textEmail == '') {
      this.setState({ formIsNew: false, emailIsValid: false, messageEmailError: 'Campo obrigatório' })
      return null
    }
    let validate = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.setState({
      formIsNew: false,
      emailIsValid: validate.test(textEmail),
      messageEmailError: validate.test(textEmail) ? '' : 'Email inválido'
    })
  }

  renderAlertEmail() {
    if (this.state.formIsNew == false && this.state.emailIsValid == false) {
      return (
        <Text style={{ color: 'red', fontSize: 12, marginLeft: 5 }}>{this.state.messageEmailError}</Text>
      )
    }
  }

  register() {
    if (this.state.textNome.length > 0 &&
      this.state.textEndereco.length > 0 &&
      this.state.textEmail.length > 0 &&
      this.state.textSenha.length > 0) {
      this.props.navigation.goBack();
      Alert.alert("Sucesso!", "Perfil salvo com sucesso!");
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
                    Meu Perfil
                  </Text>
                </View>
                <View style={styles.viewRight} >
                  <TouchableOpacity onPress={() => Alert.alert('Oops!', 'Para adicionar sua foto, termine de editar seu perfil!')}>
                    <Image
                      style={styles.iconHeader}
                      source={require('./assets/iconUserBranco.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              {/*body*/}
              <KeyboardAvoidingView behavior="padding" enabled>
                <View style={styles.viewFormulario}>
                  <Text style={styles.textCamposFormulario}>Seu nome: </Text>
                  <TextInput
                    maxLength={60}
                    placeholder='Nome Completo'
                    style={styles.textInputFormulario}
                    onChangeText={(textNome) => { this.onChangeHandler('textNome', textNome); this.ShowMaxAlert(textNome) }}
                    value={this.state.textNome}
                  />
                  {/*<Text style={styles.textCamposFormulario}>Digite seu CPF: </Text>
                  <TextInputMask
                    placeholder='999.999.999-99'
                    style={styles.textInputFormulario}
                    type={'cpf'}
                    value={this.state.cpf}
                    onChangeText={text => {
                      this.setState({
                        cpf: text
                      })
                    }}
                  />*/}
                  <Text style={styles.textCamposFormulario}>Seu e-mail: </Text>
                  <TextInput
                    placeholder='seunome@emai.com'
                    style={styles.textInputFormulario}
                    onChangeText={(text) => {
                      this.validateEmail(text);
                      this.onChangeHandler('textEmail', text)
                    }}
                    value={this.state.textEmail}
                  />
                  {this.renderAlertEmail()}

                  <Text style={styles.textCamposFormulario}>Data de Nascimento: </Text>
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
                  {/*<TextInput
                    placeholder='dd/mm/aaaa'
                    style={styles.textInputFormulario}
                    onChangeText={(textNascimento) => this.setState({ textNascimento })}
                    value={this.state.textNascimento}
                  />*/}
                  <Text style={styles.textCamposFormulario}>Endereço: </Text>
                  <TextInput
                    placeholder='sua rua, 2019'
                    style={styles.textInputFormulario}
                    onChangeText={(textEndereco) => this.setState({ textEndereco })}
                    value={this.state.textEndereco}
                  />
                  {/*<Text style={styles.textCamposFormulario}>Telefone Celular: </Text>
                  <TextInputMask
                    placeholder='(99) 99999-99999'
                    style={styles.textInputFormulario}
                    type={'cel-phone'}
                    options={{
                      maskType: 'BRL',
                      withDDD: true,
                      dddMask: '(99) '
                    }}
                    value={this.state.international}
                    onChangeText={text => {
                      this.setState({
                        international: text
                      })
                    }}
                  />
                   <TextInput
                    placeholder='+99 (99) 99999-9999'
                    style={styles.textInputFormulario}
                    onChangeText={(textCelular) => this.setState({ textCelular })}
                    value={this.state.textCelular}
                   />*/}
                  <Text style={styles.textCamposFormulario}>Digite sua senha: </Text>
                  <TextInput
                    secureTextEntry={true}
                    placeholder='******'
                    style={styles.textInputFormulario}
                    onChangeText={(textSenha) => this.setState({ textSenha })}
                    value={this.state.textSenha}
                  />

                  <View style={styles.alternativeLayoutButtonContainer}>
                    <Button
                      onPress={() => this.register()}
                      title="Salvar Perfil"
                      color="#A1ACB3"
                      accessibilityLabel="Salvar o perfil"
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
    backgroundColor:'#A1ACB3',
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
    justifyContent: 'center',
    height: 70,
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