import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: inherit;
	}

	html {
		font-size: 62.5%;
		box-sizing: border-box;
	}

    body {
        background-color: ${props => props.theme.colors.greyDark3};
        /* background-color: #dbdbdb; */
        font-family: 'Raleway', sans-serif;
        color: ${props => props.theme.colors.greyDark2};
    }
`
