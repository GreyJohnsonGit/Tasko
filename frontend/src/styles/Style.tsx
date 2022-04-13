const Style = {
  common: {
    darken: '',
    brighten: '',
    strike: '',
    fill: '',
    flex: '',
    panel: '',
    smallPanel: '',
    mediumPanel: '',
    largePanel: ''
  },
  components: {
    banner: {
      container: '',
      button: '',
      icon: {
        container: '',
        img: ''
      }
    },
    content: '',
    footer: {
      container: '',
      text: '',
      seperator: ''
    },
    users: {
      container: '',
      entry: '',
      circle: '',
      name: ''
    },
    views: {
      login: {
        container: '',
        header: '',
        button: '',
        input: {
          container: '',
          input: ''
        }
      },
      task: {
        menu: '',
        button: '',
        add: '',
        edit: '',
        delete: '',
        move: '',
        text: '',
        check: {
          base: '',
          checked: ''
        },
        entries: {
          entry: '',
          complete: ''
        }
      },
      error: {
        padding: ''
      }
    }
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function generateCssStrings(styleSubTree: any, cssStub: string): any {
  for (const key of Object.keys(styleSubTree)) {
    if (typeof styleSubTree[key] === 'string') {
      if (styleSubTree[key] === '')
        styleSubTree[key] = `${cssStub}${key} `;
    } else {
      generateCssStrings(styleSubTree[key], `${cssStub}${key}-`);
    }
  }
}
generateCssStrings(Style, '');

export const CommonCss = Style.common;
export const CustomCss = Style.components;