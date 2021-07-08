import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components'

const Row = ({ children, pt, pl, pr, jc, pos, top, bottom }) => {
    return (
        <RowView pt={pt} pl={pl} pr={pr} jc={jc} pos={pos} top={top} bottom={bottom}>
            {children}
        </RowView>
    )
}



const RowView = styled(View)`
            width: 100%;
            padding-top: ${(prop) => prop.pt || '30px'};
            padding-left: ${(prop) => prop.pl || '30px'};
            padding-right: ${(prop) => prop.pr || '30px'};
            flex-direction: row;
            align-self: flex-start;
            justify-content: ${(prop) => prop.jc || 'space-between'};
            align-items: center;
           
            position: ${(prop) => prop.pos || 'relative'};
            top: ${(prop) => prop.top || '0px'};
            bottom: ${(prop) => prop.bottom || '0px'};
            `

export default Row
