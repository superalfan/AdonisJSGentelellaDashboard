/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { HttpContext } from '@adonisjs/core/http'




router.get('/', (ctx: HttpContext) => {
  return ctx.view.render('pages/home', {
    title: 'Home',
  })
})

router.get('/dashboard1', (ctx: HttpContext) => {
  return ctx.view.render('pages/dashboard1', {
    title: 'Dashboard 1',
  })
})

router.get('/dashboard2', (ctx: HttpContext) => {
  return ctx.view.render('pages/dashboard2', {
    title: 'Dashboard 2',
  })
})

router.get('/dashboard3', (ctx: HttpContext) => {
  return ctx.view.render('pages/dashboard3', {
    title: 'Dashboard 3',
  })
})

router.get('/form', (ctx: HttpContext) => {
  return ctx.view.render('pages/form', {
    title: 'General Form',
  })
})

router.get('/form-advanced', (ctx: HttpContext) => {
  return ctx.view.render('pages/formadvanced', {
    title: 'Form Advanced',
  })
})

router.get('/form-validation', (ctx: HttpContext) => {
  return ctx.view.render('pages/formvalidation', {
    title: 'Form Validation',
  })
})

router.get('/form-wizard', (ctx: HttpContext) => {
  return ctx.view.render('pages/formwizard', {
    title: 'Form Wizard',
  })
})

router.get('/form-upload', (ctx: HttpContext) => {
  return ctx.view.render('pages/formupload', {
    title: 'Form Upload',
  })
})

router.get('/form-buttons', (ctx: HttpContext) => {
  return ctx.view.render('pages/formbuttons', {
    title: 'Form Buttons',
  })
})

router.get('/general-elements', (ctx: HttpContext) => {
  return ctx.view.render('pages/generalelements', {
    title: 'General Elements',
  })
})

router.get('/media-gallery', (ctx: HttpContext) => {
  return ctx.view.render('pages/mediagallery', {
    title: 'Media Galery',
  })
})

router.get('/typography', (ctx: HttpContext) => {
  return ctx.view.render('pages/typography', {
    title: 'Typography',
  })
})

router.get('/icons', (ctx: HttpContext) => {
  return ctx.view.render('pages/icons', {
    title: 'Icons',
  })
})

router.get('/glyphicons', (ctx: HttpContext) => {
  return ctx.view.render('pages/glyphicons', {
    title: 'Glyphicons',
  })
})

router.get('/widgets', (ctx: HttpContext) => {
  return ctx.view.render('pages/widgets', {
    title: 'Widgets',
  })
})

router.get('/invoice', (ctx: HttpContext) => {
  return ctx.view.render('pages/invoice', {
    title: 'Invoice',
  })
})

router.get('/inbox', (ctx: HttpContext) => {
    return ctx.view.render('pages/inbox', {
      title: 'Inbox',
    })
  })

  router.get('/calendar', (ctx: HttpContext) => {
    return ctx.view.render('pages/calendar', {
      title: 'Calendar',
    })
  })

  router.get('/tables', (ctx: HttpContext) => {
    return ctx.view.render('pages/tables', {
      title: 'Tables',
    })
  })

  router.get('/tables-dynamic', (ctx: HttpContext) => {
    return ctx.view.render('pages/tablesdynamic', {
      title: 'Table Dynamic',
    })
  })

  router.get('/chartjs', (ctx: HttpContext) => {
    return ctx.view.render('pages/chartjs', {
      title: 'ChartJS',
    })
  })

  router.get('/chartjs2', (ctx: HttpContext) => {
    return ctx.view.render('pages/chartjs2', {
      title: 'ChartJS2',
    })
  })

  router.get('/morisjs', (ctx: HttpContext) => {
    return ctx.view.render('pages/morisjs', {
      title: 'MorisJS',
    })
  })

  router.get('/echarts', (ctx: HttpContext) => {
    return ctx.view.render('pages/echarts', {
      title: 'Echarts',
    })
  })

  router.get('/other-charts', (ctx: HttpContext) => {
    return ctx.view.render('pages/othercharts', {
      title: 'Other Charts',
    })
  })

  router.get('/fixed-sidebar', (ctx: HttpContext) => {
    return ctx.view.render('pages/fixedsidebar', {
      title: 'Fixed Sidebar',
    })
  })

  router.get('/fixed-footer', (ctx: HttpContext) => {
    return ctx.view.render('pages/fixedfooter', {
      title: 'Fixed Footer',
    })
  })

  router.get('/e-commerce', (ctx: HttpContext) => {
    return ctx.view.render('pages/ecommerce', {
      title: 'E-Commerce',
    })
  })

  router.get('/projects', (ctx: HttpContext) => {
    return ctx.view.render('pages/projects', {
      title: 'Projects',
    })
  })

  router.get('/project-detail', (ctx: HttpContext) => {
    return ctx.view.render('pages/projectdetail', {
      title: 'Project Detail',
    })
  })

  router.get('/contacts', (ctx: HttpContext) => {
    return ctx.view.render('pages/contacts', {
      title: 'Contacts',
    })
  })

  router.get('/profile', (ctx: HttpContext) => {
    return ctx.view.render('pages/profile', {
      title: 'Profile',
    })
  })

  router.get('/page_403', (ctx: HttpContext) => {
    return ctx.view.render('pages/page403', {
      title: 'Page 403',
    })
  })

  router.get('/page_404', (ctx: HttpContext) => {
    return ctx.view.render('pages/page404', {
      title: 'Page 404',
    })
  })

  router.get('/page_500', (ctx: HttpContext) => {
    return ctx.view.render('pages/page500', {
      title: 'Page 500',
    })
  })

  router.get('/plain_page', (ctx: HttpContext) => {
    return ctx.view.render('pages/plainpage', {
      title: 'Plain Page',
    })
  })


  //================= Extended UI ====================

  router.get('/login', (ctx: HttpContext) => {
    return ctx.view.render('pages/login', {
      title: 'Login',
    })
  })

  router.get('/pricing_tables', (ctx: HttpContext) => {
    return ctx.view.render('pages/pricingtable', {
      title: 'Pricing Table',
    })
  })

//   //====================================================

//   router.get('/boxicons', (ctx: HttpContext) => {
//     return ctx.view.render('pages/boxicons', {
//       title: 'Boxicons',
//     })
//   })


//   //========= Form Elements ============================

//   router.get('/basic-inputs', (ctx: HttpContext) => {
//     return ctx.view.render('pages/basicinputs', {
//       title: 'Basic Inputs',
//     })
//   })

//   router.get('/input-groups', (ctx: HttpContext) => {
//     return ctx.view.render('pages/inputgroups', {
//       title: 'Input Groups',
//     })
//   })

// //================= Form Layouts ========================
  
// router.get('/vertical-form', (ctx: HttpContext) => {
//     return ctx.view.render('pages/verticalform', {
//       title: 'Vertical Form',
//     })
//   })

//   router.get('/horizontal-form', (ctx: HttpContext) => {
//     return ctx.view.render('pages/horizontalform', {
//       title: 'Horizontal Form',
//     })
//   })

// //========================================================

// router.get('/tables', (ctx: HttpContext) => {
//   return ctx.view.render('pages/tables', {
//     title: 'Tables',
//   })
// })


// //================ Misc ==================================

// router.get('/support', (ctx: HttpContext) => {
//   return ctx.view.render('pages/support', {
//     title: 'Support',
//   })
// })

// router.get('/documentation', (ctx: HttpContext) => {
//   return ctx.view.render('pages/documentation', {
//     title: 'Documentation',
//   })
// })