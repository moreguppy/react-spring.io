// GitHub Light
// Author: Thomas Pink (https://github.com/thomaspink/vscode-github-theme)
import theme from '../theme'

export default {
  plain: {
    color: '#24292e',
    fontFamily: theme.fonts.mono,
    fontSize: '15px',
  },
  styles: [
    {
      types: ['comment'],
      style: {
        color: '#6a737d',
      },
    },
    {
      types: ['string'],
      style: {
        color: '#032f62',
      },
    },
    {
      types: ['keyword', 'operator'],
      style: {
        color: '#d73a49',
      },
    },
    {
      types: ['number', 'boolean', 'null'],
      style: {
        color: '#0291BB',
      },
    },
    {
      types: ['function'],
      style: {
        color: '#6F42C1',
      },
    },
  ],
}
