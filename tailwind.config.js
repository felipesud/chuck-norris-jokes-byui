/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/components/button/button.component.{html, ts}",
  "./src/app/components/content/content.component.{html, ts}",
  "./src/app/components/footer/footer.component.{html, ts}",
  "./src/app/components/heading/heading.component.{html, ts}",
],
  theme: {
    colors: {
      'blue': '#0069c2',
      'purple': '#7e5bef',
      'pink': '#88144c',
      'orange': '#d46617',
      'green': '#329864',
      'yellow': '#a08209',
      'gray-dark': '#242424',
      'gray': '#878787',
      'gray-light': '#fafafa',
      'turquoise': '#23969a',
      'red': '#d40d02',
      'ocher': '#b98327',
      primary: '#23969a',
      background: '#fafafa',
      gray31: '#4e4e4e',
      gray50: '#808080',
      gray17: '#2b2b2b',
      gray92: '#ebebeb',
      green40: '#329864'
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}

