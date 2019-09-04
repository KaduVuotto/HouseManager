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
  Alert,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';

import { TextInputMask } from 'react-native-masked-text';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { timer } from 'rxjs';

export default class Evento extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDateTimePickerVisible: false,
      textData: '',
      textHorario: '',
      textEvento: '',
      textDescricaoEvento: '',
    };
  }

  ShowMaxAlert = (textEvento) => {

    var TextLength = textEvento.length.toString();

    if (TextLength == 60) {
      Alert.alert("Desculpe, você digitou o limite máximo de caracteres.")
      // Put your code here which you want to execute when TextInput entered text reached to 10.
    }
  }

  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };

  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };

  handleDatePicked = date => {
    console.log("A date has been picked: ", date);
    this.hideDateTimePicker();
  };

  handleTimePicked = date => {
    console.log("A date has been picked: ", timer);
    this.hideDateTimePicker();
  };

  onChangeHandler(field, value) {
    this.setState({ [field]: value });
  }


  register() {
    if (this.state.textEvento.length > 0) {
      this.props.navigation.goBack();
      Alert.alert("Sucesso!", "Evento salvo com sucesso!");
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
        <SafeAreaView style={{ flex: 1, backgroundColor: '#A1ACB3' }}>
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
                    Agenda
                   </Text>
                </View>
                <View style={styles.viewRight} >
                </View>
              </View>
              {/*body*/}
              <KeyboardAvoidingView behavior="padding" enabled>

                {/*Data */}
                <View style={styles.viewCalendaio}>
                  <View style={styles.alternativeLayoutButtonContainer}>
                    <Button
                      title='Calendário'
                      color='#A1ACB3'
                      onPress={this.showDateTimePicker} />
                    <DateTimePicker
                      isVisible={this.state.isDateTimePickerVisible}
                      onConfirm={this.handleDatePicked}
                      onCancel={this.hideDateTimePicker}
                    />
                  </View>
                </View>

                <View style={styles.viewFormulario}>
                  <Text style={styles.textCamposFormulario}>Nome: </Text>
                  <TextInput
                    maxLength={60}
                    placeholder='Evento'
                    style={styles.textInputFormulario}
                    onChangeText={(textEvento) => { this.onChangeHandler('textEvento', textEvento); this.ShowMaxAlert(textEvento) }}
                    value={this.state.textEvento}
                  />
                  <Text style={styles.textCamposFormulario}>Prioridade: </Text>
                  <TextInput
                    maxLength={60}
                    placeholder='Prioridade'
                    style={styles.textInputFormulario}
                    onChangeText={(textDescricaoEvento) => { this.onChangeHandler('textDescricaoEvento', textDescricaoEvento); this.ShowMaxAlert(textDescricaoEvento) }}
                    value={this.state.textDescricaoEvento}
                  />
                  <Text style={styles.textCamposFormulario}>Data inicial: </Text>
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
                  <Text style={styles.textCamposFormulario}>Data final: </Text>
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
                      title="Salvar Agenda"
                      color="#A1ACB3"
                      accessibilityLabel="Salvar a agenda"
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
    marginTop: 5,
    marginBottom: 10,
  },
  viewCalendaio: {
    backgroundColor: 'white',
    borderRadius: 25,
    padding: 5,
    marginLeft: 85,
    marginRight: 85,
    marginTop: 5,
    marginBottom: 5,
  },
  textInputFormulario: {
    height: 40,
    borderColor: '#d4d4d4',
    borderWidth: 1,
    margin: 10,
  },
  textCamposFormulario: {
    marginTop: 5,
    fontSize: 18,
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    fontSize: 45,
  },
  containerColor: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
