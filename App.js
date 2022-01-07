import React, { Component } from 'react';
import { Dimensions, AppRegistry, Text, View, StyleSheet, TouchableHighlight, ImageBackground } from 'react-native';
import Constants from 'expo-constants';
let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
   state = {
      name: 'choose a color to see the name'

    } 
    updateNameRed = () =>
    {
        this.setState({ 
            name: 'Red' 
        })
    }
    updateNameBlue = () => 
    {
        this.setState({ 
            name: 'Blue' 
        })
    }
    updateNameYellow = () => 
    {
        this.setState({ 
            name: 'Yellow' 
        })
    }
    updateNameGreen = () => 
    {
        this.setState({ 
            name: 'Green' 
        })

    }
    updateNameCyan = () =>
    {
        this.setState({ 
            name: 'Cyan' 
        })
    }
    updateNamePeach = () => 
    {
        this.setState({ 
            name: 'Peach' 
        })
    }
    updateNameCoral = () => 
    {
        this.setState({ 
            name: 'Coral' 
        })
    }
    updateNamePapayaWhip = () => 
    {
        this.setState({ 
            name: 'Papaya Whip' 
        })

    }
    updateNameTomato = () =>
    {
        this.setState({ 
            name: 'Tomato' 
        })
    }
    updateNameLavender = () => 
    {
        this.setState({ 
            name: 'Lavender' 
        })
    }
    updateNameMidnightBlue = () => 
    {
        this.setState({ 
            name: 'Midnight Blue' 
        })
    }
    updateNameBurlyWood = () => 
    {
        this.setState({ 
            name: 'Burley Wood' 
        })
    }

    updateNameOrange = () =>
    {
        this.setState({ 
            name: 'Orange' 
        })
    }
    updateNameCadetBlue = () => 
    {
        this.setState({ 
            name: 'Cadet Blue' 
        })
    }
    updateNameSaddleBrown = () => 
    {
        this.setState({ 
            name: 'Saddle Brown' 
        })
    }
    updateNameLightSlateGray = () => 
    {
        this.setState({ 
            name: 'Light Slate Gray' 
        })
    }
    
    render() {
        return (
            <View style={styles.buttonContainerR}>
                
                <ImageBackground
                    style={styles.background}
                    source={{ uri: 'https://codehs.com/uploads/af454b8ee442867600014d16ace373e3' }}
                >
                <View style={styles.colors}>
                <Text style={styles.title}>
                    {"Paint Color Selector"}
                </Text>
                 <Text style={styles.paragraph}>
                    {this.state.name}
                </Text>
                </View>

                <View style={styles.buttonContainerR}>
                <TouchableHighlight
                    onPress = {this.updateNameRed}
                >
                    <View style={styles.redButton}>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress = {this.updateNameBlue}
                >
                    <View style={styles.blueButton}>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress = {this.updateNameYellow}
                >
                    <View style={styles.yellowButton}>
                    </View>
                </TouchableHighlight>                
                <TouchableHighlight
                    onPress = {this.updateNameGreen}
                >
                    <View style={styles.greenButton}>
                    </View>
                </TouchableHighlight>
                </View>

                <View style={styles.buttonContainerR}>
                <TouchableHighlight
                    onPress = {this.updateNameCyan}
                >
                    <View style={styles.cyanButton}>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress = {this.updateNamePeach}
                >
                    <View style={styles.peachButton}>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress = {this.updateNameCoral}
                >
                    <View style={styles.coralButton}>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress =   {this.updateNamePapayaWhip}
                >
                    <View style={styles.papayawhipButton}>
                    </View>
                </TouchableHighlight>
                </View> 

                <View style={styles.buttonContainerR}>
                <TouchableHighlight
                    onPress = {this.updateNameTomato}
                >
                    <View style={styles.tomatoButton}>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress = {this.updateNameLavender}
                >
                    <View style={styles.lavenderButton}>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress = {this.updateNameMidnightBlue}
                >
                    <View style={styles.midnightBlueButton}>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress =   {this.updateNameBurlyWood}
                >
                    <View style={styles.burlyWoodButton}>
                    </View>
                </TouchableHighlight>
                </View> 

                <View style={styles.buttonContainerR}>
                <TouchableHighlight
                    onPress = {this.updateNameOrange}
                >
                    <View style={styles.orangeButton}>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress = {this.updateNameCadetBlue}
                >
                    <View style={styles.cadetBlueButton}>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress = {this.updateNameSaddleBrown}
                >
                    <View style={styles.saddleBrownButton}>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress =   {this.updateNameLightSlateGray}
                >
                    <View style={styles.lightSlateGrayButton}>
                    </View>
                </TouchableHighlight>
                </View> 
                
                </ImageBackground>
               
            </View>
      );
   }
}

const styles = StyleSheet.create({
    buttonContainerC: {
        flexDirection: 'column',
    },
    buttonContainerR: {
        flexDirection: 'row',
    },
    paragraph: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },

    redButton: {
        backgroundColor: 'red',
        height: 50,
        width: 70,
        margin: 5,
    },
    blueButton: {
        backgroundColor: 'blue',
        height: 50,
        width: 70,
        margin: 5,
    },
    yellowButton: {
        backgroundColor: 'yellow',
        height: 50,
        width: 70,
        margin: 5,
    },
    greenButton: {
        backgroundColor: 'green',
        height: 50,
        width: 70,
        margin: 5,
    },

    cyanButton: {
        backgroundColor: '#00FFFF',
        height: 50,
        width: 70,
        margin: 5,
    },
    peachButton: {
        backgroundColor: '#FFE5B4',
        height: 50,
        width: 70,
        margin: 5,
    },
    coralButton: {
        backgroundColor: '#FF7F50',
        height: 50,
        width: 70,
        margin: 5,
    },
    papayawhipButton: {
        backgroundColor: '#FFEFD5',
        height: 50,
        width: 70,
        margin: 5,
    },

    tomatoButton: {
        backgroundColor: '#FF6347',
        height: 50,
        width: 70,
        margin: 5,
    },
    lavenderButton: {
        backgroundColor: '#E6E6FA',
        height: 50,
        width: 70,
        margin: 5,
    },
    midnightBlueButton: {
        backgroundColor: '#191970',
        height: 50,
        width: 70,
        margin: 5,
    },
    burlyWoodButton: {
        backgroundColor: '#DEB887',
        height: 50,
        width: 70,
        margin: 5,
    },

    orangeButton: {
        backgroundColor: '#FFA500',
        height: 50,
        width: 70,
        margin: 5,
    },
    cadetBlueButton: {
        backgroundColor: '#5F9EA0',
        height: 50,
        width: 70,
        margin: 5,
    },
    saddleBrownButton: {
        backgroundColor: '#8B4513',
        height: 50,
        width: 70,
        margin: 5,
    },
    lightSlateGrayButton: {
        backgroundColor: '#778899',
        height: 50,
        width: 70,
        margin: 5,
    },

    background: {
        height: deviceHeight,
        width: deviceWidth,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: 'white',
        fontSize: 40,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 10,
    },
    
});