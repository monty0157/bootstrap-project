import getMuiTheme from 'material-ui/styles/getMuiTheme';

const primary = 'crimson';

const options = {
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: primary,
    accent1Color: primary,//'#ff7300',
    textColor: '#545454',
    alternateTextColor: 'white',
  }
};


const muiTheme = getMuiTheme(options);

export default muiTheme;
