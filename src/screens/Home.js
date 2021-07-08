import React, { useState } from 'react'
import { Text, View, StatusBar, Switch, Image } from 'react-native'
import styled from 'styled-components'
import { Ionicons, Entypo, MaterialCommunityIcons } from '@expo/vector-icons'
import Container from '../components/ContainerView'
import VerticalSpace from '../components/VerticalSpace'
import Row from '../components/Row'
import Slider from '../components/Slider'


const Home = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const [show, setShow] = useState(false)
    const [value, setValue] = useState(0)
    const [max, setMax] = useState(2000)
    const [min, setMin] = useState(50)

    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState)
        setShow(!isEnabled)
    }
    const changeValue = (x) => {
        setValue(x)
    }
    return (
        <Container>
            <StatusBar
                hidden={true}
            />
            <TopView >
                <Row >
                    <Entypo name="flattr" size={24} color="black" />
                    <Text
                        style={{ color: 'white', fontSize: 15, fontWeight: '700' }}
                    >
                        BORROW
                    </Text>
                    <MaterialCommunityIcons name="account" size={24} color="#F687FF" />
                </Row>
                <VerticalSpace height={31} />
                <Text
                    style={{ color: 'white', fontSize: 28, fontWeight: '600', paddingLeft: 30 }}
                >
                    Hi Mark
                </Text>
            </TopView>
            <MainView>
                <Text
                    style={{
                        color: 'black',
                        fontSize: 15,
                        fontWeight: '600',
                        paddingLeft: 16,
                        paddingTop: 30,
                    }}
                >
                    How much would you like to borrow?
                </Text>
                <ChoseCryptoView>
                    <Row pl='0px' pr='0px' pt='0px'>
                        <View>
                            <Row jc='flex-start' pl='0px' pr='0px' pt='0px'>
                                <Image
                                    source={require('../../assets/bitcoin.jpg')}
                                    style={{
                                        height: 16,
                                        width: 16,
                                        marginTop: 13,
                                        marginLeft: 13,
                                        marginRight: 13,
                                    }} />
                                <Text
                                    style={{
                                        color: '#151515',
                                        fontSize: 13,
                                        fontWeight: '600',
                                        marginTop: 13,
                                    }}
                                >
                                    Do you own crypto?
                                </Text>
                            </Row>
                            <Text
                                style={{
                                    color: '#585858',
                                    fontSize: 13,
                                    fontWeight: '600',
                                    marginLeft: 13,
                                }}
                            >
                                Increase your limit up to $10,000
                            </Text>
                        </View>
                        <Switch
                            trackColor={{ false: "#C2C2C2", true: "#7659FB" }}
                            thumbColor="white"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </Row>
                </ChoseCryptoView>
                <VerticalSpace height={10} />
                {show ? <View style={{
                    height: 20,
                    alignSelf: 'center',
                    marginBottom: 10
                }}>
                    <Row jc='flex-start' pl='0px' pr='0px' pt='0px' >
                        <Image
                            source={require('../../assets/bitcoin.jpg')}
                            style={{
                                height: 16,
                                width: 16,
                                marginRight: 13
                            }} />
                        <Text
                            style={{
                                color: 'black',
                                fontSize: 17,
                                fontWeight: 'bold',
                            }}
                        >
                            BitCoin
                        </Text>
                    </Row>

                </View> : null}

                <View style={{
                    height: 290,
                    backgroundColor: 'white',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    marginBottom: 10
                }}>

                    <Slider
                        max={max}
                        min={min}
                        value={value}
                        onChange={(v) => { setValue(v) }}
                    />

                </View>
                <Row jc='flex-start' pl='30px' pr='0px' pt='0px' >
                    <Text
                        style={{
                            color: 'black',
                            fontSize: 13,
                            fontWeight: '400',
                        }}
                    >
                        {"Total amount with applicable "}
                    </Text>
                    <Text
                        style={{
                            color: 'blue',
                            fontSize: 13,
                            fontWeight: '400',
                            textDecorationLine: 'underline'
                        }}
                    >
                        {"fees:"}
                    </Text>
                    <Text
                        style={{
                            color: 'black',
                            fontSize: 13,
                            fontWeight: 'bold',

                        }}
                    >
                        {" $8,800.00"}
                    </Text>
                </Row>
                <Row jc='flex-end' pl='00px' pr='24px' pt='0px' >
                    <Ionicons name="ios-arrow-forward-circle" size={45} color="black" />
                </Row>
            </MainView>
        </Container>
    )
}


const TopView = styled(View)`
            background-color:
            rgba(118, 89, 251, 1);
            height: 285px;
            width: 100%;
            `

const MainView = styled(View)`
            background: white;
            top:-120px;
            width: 90%;
            height: 74%;
            margin-left: 24px;
            margin-right: 24px;
            margin-bottom: 32px;
            border-radius: 10px;
            `

const ChoseCryptoView = styled(View)`
            background-color: 'rgba(245, 244, 248,1)';
            height: 55px;
            width: auto;
            margin-top:10px;
            margin-left:13px;
            margin-right:13px;
            border-radius: 7px;
`

export default Home


