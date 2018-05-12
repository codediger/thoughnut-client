import MyLoadable from "./myLoadable"; //customized config for code-splitting using react-MyLoadable

export const Home = MyLoadable({
  loader: () => import("../storefront/Index")
});

export const AdminLogin = MyLoadable({
  loader: () => import("../admin/containers/login/Index")
});

export const AdminDashboard = MyLoadable({
  loader: () => import("../admin/Index")
});

export const FourOhFour = MyLoadable({
  loader: () => import("../FourOhFour")
});

// export const Product = MyLoadable({
//   loader: () => import('../pages/Product')
// });

// export const Checkout = MyLoadable({
//   loader: () => import('../pages/Checkout')
// });

// export const Cart = MyLoadable({
//   loader: () => import('../pages/Cart')
// });

// export const NotFound = MyLoadable({
//   loader: () => import('../pages/NotFound')
// });

// export const Logout = MyLoadable({
//   loader: () => import('../pages/Logout')
// });

// export const ResetPassword = MyLoadable({
//   loader: () => import('../pages/ResetPassword')
// });

// export const ForgotPassword = MyLoadable({
//   loader: () => import('../pages/ForgotPassword')
// });

// export const CustomerDashboard = MyLoadable({
//   loader: () => import('../pages/CustomerDashboard')
// });

// export const SavedItems = MyLoadable({
//   loader: () => import('../pages/SavedItems')
// });

// export const FeaturedItem = MyLoadable({
//   loader: () => import('../pages/FeaturedItem')
// });

// export const Search = MyLoadable({
//   loader: () => import('../pages/Search')
// });

// export const DashboardHome = MyLoadable({
//   loader: () => import('../components/CustomerDashboard/Home')
// });

// export const Account = MyLoadable({
//   loader: () => import('../components/CustomerDashboard/Account')
// });

// export const Order = MyLoadable({
//   loader: () => import('../components/CustomerDashboard/Order')
// });

// export const ManageAuction = MyLoadable({
//   loader: () => import('../components/CustomerDashboard/ManageAuction')
// });

// export const Bid = MyLoadable({
//   loader: () => import('../components/CustomerDashboard/Bid')
// });

// export const PaymentDetails = MyLoadable({
//   loader: () => import('../components/CustomerDashboard/PaymentDetails')
// });

// export const Reward = MyLoadable({
//   loader: () => import('../components/CustomerDashboard/Reward')
// });
