import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';

import HomeScreen from './home';
import Usuario from './usuario';
import Produto from './produto';
import Evento from './evento';

const MainNavigator = createStackNavigator({
    Home: {
        screen:HomeScreen,
        navigationOptions: {
            header: null,
        }
    },
    Usuario: {
        screen:Usuario,
        navigationOptions: {
            header: null,
        }
    },
    Produto: {
        screen:Produto,
        navigationOptions: {
            header: null,
        }
    },
    Evento: {
        screen:Evento,
        navigationOptions: {
            header: null,
        }
    },
});

const App = createAppContainer(MainNavigator);

export default App;