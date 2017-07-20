 //default server prerender
exoprt
default {
  index: {
    path: '/'
    entry: Home

  },
  home: {

    prerender: 'Site/views/home'
    entry: 'UI/views/home'
  },
  about: {

    prerender: 'Site/views/about'
    entry: 'UI/views/about'
    server_render: false
  },
  contact: {

    prerender: 'Site/views/contact'
    entry: 'UI/views/contact'
  },
  contact: {
    prerender: 'Site/views/error'
  }
}
