// import React from 'react'
// import {
//   Switch,
//   Route,
//   Redirect,
// } from 'react-router-dom'
// import {
//   RouteTransition,
// } from 'react-router-transition'

// import HomePage from 'containers/Home'
// import SortPage from 'containers/Sort'
// import ShopCart from 'containers/ShopCart'
// // import PersonCenterPage from 'containers/PersonCenter'
// import NotMatch from 'containers/NotMatch'
// import Login from 'containers/Login'
// import Detail from 'containers/Detail'
// import SearchPage from 'containers/Search'

// // TODO 理解, exact的作用

// const RouteMap = ({ location, }) => {
//   console.log(location)
//   return (
//     <div>
//       <RouteTransition
//         atEnter={{ opacity: 0, }}
//         atLeave={{ opacity: 0, }}
//         atActive={{ opacity: 1, }}
//       />
//       <Switch>
//         <Route exact path="/" render={() => (< Redirect to="/home" />)} />
//         <Route path="/home" component={HomePage} />
//         <Route path="/sort" component={SortPage} />
//         <Route path="/shopcart" component={ShopCart} />
//         <Route path="/personcenter" component={Login} />
//         <Route path="/detail" component={Detail} />
//         <Route path="/search" component={SearchPage} />
//         <Route component={NotMatch} />
//       </Switch>
//     </div>
//   )
// }

// export default RouteMap
