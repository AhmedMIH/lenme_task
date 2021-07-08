import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CircularSlider from 'rn-circular-slider'
import styled from 'styled-components'
import Row from './Row'
import VerticalSpace from './VerticalSpace'

const Slider = ({ max, min, value, onChange }) => {
    return (
        <View>
            <CircularSlider
                step={1}
                min={50}
                max={max}
                value={value}
                onChange={onChange}
                contentContainerStyle={styles.contentContainerStyle}
                strokeWidth={30}
                buttonBorderColor="white"
                buttonFillColor="#fff"
                buttonStrokeWidth={10}
                openingRadian={Math.PI / 4}
                buttonRadius={10}
                linearGradient={[{ stop: '0%', color: 'black' }, { stop: '100%', color: 'black' }]}
            >
                <ValueView>$ {value}</ValueView>
                <Text style={{ fontSize: 15 }}>max ${max}</Text>
                <VerticalSpace h />
                <Row pos='absolute' top='170px' >
                    <Text style={{ fontSize: 15, color: '#585858' }}>
                        ${min}
                    </Text>
                    <Text style={{ fontSize: 15, color: '#585858' }} >
                        ${max}
                    </Text>
                </Row>
            </CircularSlider>
        </View>
    )
}


const ValueView = styled(Text)`
font-weight: 500;
font-size: 32px;
color: black;
`

const styles = StyleSheet.create({

    contentContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center'
    },

});


export default Slider

