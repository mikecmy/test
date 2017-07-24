 //default server prerender
exoprt
default {
  HomePage: {
    path: '/'
    entry: 'UI/views/home',
    server_entry: 'Site/Views/Index/index.js'
  },

  //{ActionName}:{
  //routes:
  //entry  如果不输入entry 默认为'UI/app/views/{ActionName}
  //server_entry 如果不输入server_entry 默认为'Site/Views/{ActionName}/{ActionName}.js
  // }
  Index: {
    routes: '/Home/Index',
    entry: 'UI/views/home',
    //如果不输入server_entry 默认为'Site/Views/Index/index.js
    server_entry: 'Site/Views/Index/index.js'
  },
  About: {
    routes: 'Home/About'
    entry: 'UI/views/about'
    server_entry: 'Site/Views/About/About.js'
  },
  Contact: {
    routes: 'Home/Contact'
    entry: 'UI/views/contact'
    server_entry: 'Site/Views/Contact/Contact.js'
  },
  Error: {
    routes: 'Home/Error'
    entry: 'UI/views/about'
    server_entry: 'Site/Views/About/Error.js'
  }
}
