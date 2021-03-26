import React from 'react'
import {iconSize} from '../../globals/helpers'
import * as theme from '../theme/theme-data'
import {LG} from '../../globals/constants'

const {primary, secondary} = theme.colors

const Logo = ({size, className}) =>
    <svg className={`${iconSize(size)} ${className}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100">
        <rect x="10.1" y="67.1" fill={primary} width="32.8" height="28.6"/>
        <rect x="57.5" y="67.1" fill={primary} width="9" height="28.6"/>
        <rect x="98.2" y="67.1" fill={primary} width="24.1" height="28.6"/>
        <rect x="146.9" y="67.1" fill={primary} width="9" height="28.6"/>
        <rect x="161.3" y="67.1" fill={primary} width="9" height="28.6"/>
        <rect x="83.9" y="67.1" fill={primary} width="9" height="28.6"/>
        <rect x="132.5" y="67.1" fill={primary} width="9" height="28.6"/>
        <rect x="175.2" y="67.1" fill={primary} width="32.8" height="28.6"/>
        <rect x="226.9" y="67.1" fill={primary} width="9" height="28.6"/>
        <rect x="212.5" y="67.1" fill={primary} width="9" height="28.6"/>
        <rect x="263.4" y="67.1" fill={primary} width="28.9" height="28.6"/>
        <rect x="248.8" y="67.1" fill={primary} width="9" height="28.6"/>
        <path fill={secondary} d="M49,51.5c-1.4-0.6-2.9-0.9-4.4-0.8h-0.7V34c0-5-1.3-8.8-3.9-11.4s-6.5-3.9-11.4-3.9c-3.9-0.1-7.9,0.5-11.6,1.7
	c-3.5,1.3-5.2,3-5.2,5.1c0,1.1,0.3,2.3,1,3.2c0.7,0.9,1.8,1.4,2.9,1.4c0.7,0,2-0.2,5.5-1.8c2-1,4.2-1.5,6.4-1.6
	c2.7,0,4.7,0.6,5.9,1.8c1.1,1.3,1.7,2.9,1.8,4.5c-1.1-0.2-2.2-0.4-3.3-0.6c-1.6-0.2-3.2-0.3-4.8-0.3c-6.1,0-10.9,1.2-14.3,3.7
	c-3.5,2.4-5.5,6.5-5.3,10.7c-0.1,3.6,1.3,7.1,4,9.5c2.9,2.5,6.6,3.8,10.4,3.6c2.9,0,5.7-0.6,8.3-1.6c2-0.8,3.9-1.9,5.7-3.2v0.2
	c0.2,1,0.6,1.9,1.3,2.6c0.7,0.7,1.7,1,2.7,1h6.2c1.2,0.1,2.3-0.3,3.2-1c0.8-0.8,1.3-1.9,1.2-3.1C50.6,53.5,50,52.2,49,51.5z
	 M35.2,41v3.4c0,1.4-1.2,2.9-3.7,4.4c-2.6,1.6-5.6,2.5-8.7,2.5c-1.7,0.1-3.5-0.5-4.8-1.5c-1.1-0.8-1.7-2.1-1.7-3.5
	c0-1.9,1-3.3,2.9-4.5c2.1-1.2,5.2-1.9,9-1.9c1.3,0,2.6,0.1,3.9,0.3C33.1,40.4,34.2,40.7,35.2,41z"/>
        <path fill={secondary} d="M98.7,51.6c-1.1-0.7-2.3-1-3.6-0.9h-0.5V7.2c0.1-0.9-0.3-1.7-1-2.2c-0.7-0.5-1.6-0.7-2.5-0.7H83
	c-1.2-0.1-2.3,0.3-3.2,1c-0.9,0.8-1.3,1.9-1.2,3.1c-0.1,1.3,0.5,2.6,1.6,3.3c0.9,0.6,2.5,0.8,5.1,0.8h0.8v10.9
	c-1.2-1-2.4-1.8-3.8-2.4c-2.5-1.1-5.2-1.6-7.8-1.6c-5.4-0.1-10.6,2-14.3,5.8c-3.8,3.9-5.9,9.1-5.8,14.5c-0.1,5.2,1.8,10.3,5.4,14.1
	c3.5,3.7,8.4,5.8,13.5,5.7c2.8,0,5.6-0.6,8.2-1.8c1.5-0.7,2.9-1.6,4.2-2.7v0.2c-0.1,0.8,0.1,1.7,0.6,2.4c0.5,0.6,1.3,0.9,2.1,0.9H96
	c1.1,0.1,2.2-0.3,3-1.1c0.8-0.8,1.2-1.9,1.1-3C100.2,53.5,99.7,52.3,98.7,51.6z M86.2,39.3c0.1,3.1-1,6.1-3.2,8.3
	c-2.1,2.2-5.1,3.4-8.1,3.2c-3,0.1-5.9-1-8.1-3.1c-2.1-2.1-3.3-5.1-3.2-8.1c-0.2-3.2,1-6.2,3.1-8.6c2.1-2.2,5.1-3.3,8.1-3.2
	c3-0.1,6,1,8.1,3.1C85.1,33.3,86.3,36.3,86.2,39.3z"/>
        <path fill={primary} d="M140.5,44.8c-1.3,0-2.9,0.8-4.8,2.4c-0.8,0.6-1.5,1.1-2,1.4c-1.3,0.9-2.7,1.5-4.2,2c-1.5,0.5-3.1,0.7-4.7,0.7
	c-3.2,0.1-6.3-1.1-8.6-3.3c-2.3-2.3-3.5-5.5-3.3-8.8c-0.1-3.2,1.1-6.3,3.5-8.5c2.5-2.3,5.8-3.5,9.2-3.3c2,0,3.9,0.5,5.6,1.5
	c1.7,1.1,3.2,2.6,4.2,4.4c0.6,1.1,1.3,2.1,2.2,2.9c0.7,0.6,1.7,0.9,2.6,0.9c1.1,0.1,2.3-0.3,3.1-1.1c0.8-0.8,1.2-2,1.1-3.1v-7.4
	c0-2.3-0.3-3.8-0.8-4.6c-0.7-1.1-2-1.6-3.3-1.5c-1.1-0.1-2.2,0.2-3.1,0.9c-0.4,0.3-0.7,0.7-0.9,1.2c-1.7-0.8-3.4-1.4-5.2-1.9
	c-2.1-0.6-4.2-0.8-6.4-0.9c-5.6-0.2-11.1,2-15.2,5.9c-4,3.8-6.2,9.2-6.1,14.7c-0.1,5.5,2.1,10.9,6.1,14.7c4.1,3.9,9.6,6,15.2,5.9
	c4.6,0,9.2-1.2,13.2-3.4c4.4-2.5,6.6-4.9,6.6-7.5c0-2.2-1.7-4-3.8-4C140.6,44.9,140.5,44.9,140.5,44.8L140.5,44.8z"/>
        <path fill={primary} d="M189.8,24.5c-4.1-3.8-9.4-5.7-15.9-5.7s-11.8,1.9-15.9,5.7c-4.1,3.8-6.4,9.2-6.2,14.8c-0.2,5.6,2.1,11,6.2,14.8
	c4.1,3.8,9.4,5.7,15.9,5.7s11.8-1.9,15.9-5.7c4.1-3.8,6.4-9.2,6.2-14.8C196.2,33.7,193.9,28.3,189.8,24.5z M186.6,39.2
	c0.1,3.4-1.1,6.6-3.5,9c-5.2,4.7-13.1,4.7-18.2,0c-2.4-2.4-3.7-5.6-3.5-9c-0.1-3.4,1.2-6.6,3.5-9c5.2-4.7,13.1-4.7,18.2,0
	C185.5,32.6,186.8,35.9,186.6,39.2L186.6,39.2z"/>
        <path fill={primary} d="M245,51.6c-1.1-0.7-2.3-1-3.6-0.9h-0.5V7.2c0.1-0.9-0.3-1.7-1-2.2c-0.7-0.5-1.6-0.7-2.5-0.7h-8.1
	c-1.1-0.1-2.3,0.3-3.2,1c-0.9,0.8-1.3,1.9-1.2,3.1c-0.1,1.3,0.5,2.6,1.6,3.3c0.9,0.6,2.5,0.8,5.1,0.8h0.8v10.9
	c-1.2-1-2.4-1.8-3.8-2.4c-2.5-1.1-5.2-1.6-7.9-1.6c-5.4-0.1-10.6,2-14.3,5.8c-3.8,3.9-5.9,9.1-5.8,14.5c-0.2,5.2,1.8,10.3,5.3,14.1
	c3.5,3.7,8.4,5.8,13.5,5.7c2.9,0,5.7-0.6,8.3-1.8c1.5-0.7,2.9-1.6,4.2-2.7v0.2c-0.1,0.8,0.1,1.7,0.6,2.4c0.5,0.6,1.3,0.9,2.1,0.9
	h7.7c1.1,0,2.1-0.4,2.9-1.1c0.8-0.8,1.2-1.9,1.1-3C246.4,53.5,245.9,52.3,245,51.6z M232.5,39.3c0.1,3.1-1,6.1-3.2,8.3
	c-2.1,2.2-5.1,3.4-8.1,3.2c-3,0.1-5.9-1-8.1-3.1c-2.1-2.1-3.3-5.1-3.2-8.1c-0.2-3.2,1-6.2,3.1-8.6c2.1-2.2,5.1-3.3,8.1-3.2
	c3-0.1,6,1,8.1,3.2C231.4,33.4,232.6,36.3,232.5,39.3z"/>
        <path fill={primary} d="M288.4,46.7c-0.7,0-2.1,0.3-7.1,2.6c-3,1.5-6.3,2.3-9.6,2.4c-3.8,0-6.8-1-8.9-2.8c-1.9-1.7-3.1-4.1-3.3-6.7
	h25.9c4,0,5.2-0.5,5.9-1c0.9-0.8,1.4-2.1,1.4-4c0-5.1-2.1-9.9-5.9-13.2c-4-3.6-9.3-5.6-14.7-5.4c-6.5,0-11.8,1.9-15.9,5.8
	s-6.1,8.9-6.1,15.1s2,11,5.8,14.7c3.8,3.7,9,5.6,15.3,5.6c2.9,0,5.8-0.4,8.7-1.1c2.9-0.7,5.7-1.7,8.5-3c1.1-0.5,2.1-1.3,3-2.2
	c0.7-0.8,1.1-1.8,1.1-2.9c0-1.1-0.4-2.1-1.2-2.8C290.4,47.1,289.4,46.7,288.4,46.7z M282.6,34.5H260c0.7-2.2,2.1-4.1,3.9-5.5
	c2.3-1.7,5.2-2.6,8.1-2.5c2.7-0.1,5.3,0.8,7.4,2.6C281,30.5,282.1,32.4,282.6,34.5z"/>

    </svg>

Logo.defaultProps = {
    size: LG
}

export default Logo