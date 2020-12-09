import { createGlobalStyle } from 'styled-components'

interface Props {
    active: boolean
}

export default createGlobalStyle<Props>`
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
        background-color: #ccc;
        font-family: sans-serif;
        color: #777;
    }
`
