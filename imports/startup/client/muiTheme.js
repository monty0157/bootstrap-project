import getMuiTheme from 'material-ui/styles/getMuiTheme';

const primary = '#303143';
const secondary = '#282A37'
const tertiary = 'white'

const options = {
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: primary,
    accent1Color: secondary,//'#ff7300',
    textColor: tertiary,
    alternateTextColor: 'white',
  }
};


const muiTheme = getMuiTheme(options);

export default muiTheme;
