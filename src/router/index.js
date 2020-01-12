import Vue from "vue";
import VueRouter from "vue-router";

function loadView(view) {
  return () =>
    import(/* webpackChunkName: "view-[request]" */ `@/pages/${view}.vue`);
}

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: loadView("Home"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/login",
    name: "login",
    component: loadView("Login"),
    meta: {
      guest: true
    }
  },
  {
    path: "/register/:invite_id?",
    name: "Register",
    component: loadView("Register"),
    meta: {
      guest: true
    }
  },
  {
    path: "/success",
    name: "Success",
    component: loadView("success")
  },
  {
    path: "/forget",
    name: "ForgetPassword",
    component: loadView("ForgetPassword")
  },
  {
    path: "/new_password",
    name: "NewPassword",
    component: loadView("NewPassword")
  },
  {
    path: "/profile",
    name: "Profile",
    component: loadView("Profile"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/invest",
    name: "Invest",
    component: loadView("Invest"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/edit-profile",
    name: "EditProfile",
    component: loadView("EditProfile"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/history",
    name: "History",
    component: loadView("History"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/invite",
    name: "Invite",
    component: loadView("Invite"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../pages/About.vue")
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (sessionStorage.getItem("Micromoni") == null) {
      next({
        path: "/login",
        params: {
          nextUrl: to.fullPath
        }
      });
    } else {
      next();
    }
  }
  // If User is Guest
  else if (to.matched.some(record => record.meta.guest)) {
    if (sessionStorage.getItem("Micromoni") == null) {
      next();
    } else {
      next({
        name: "home"
      });
    }
  } else {
    next();
  }
});

export default router;
