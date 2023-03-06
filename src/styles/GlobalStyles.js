import { createGlobalStyle } from "styled-components";
// import '@fontsource/kaushan-script';
// import '@fontsource/sirin-stencil';


const GlobatStyles = createGlobalStyle`

*,*::before,*::after{
    margin:0;
    padding:0;
}

body{
    font-family: 'Caveat', cursive;
    overflow-x: hidden;
    background-color: black;

}

h1,h2,h3.h4,h5,h6{
    margin:0;
    padding:0;
}

a{
    color:ingerit;
    text-decoration:none;
}
`

export default GlobatStyles;