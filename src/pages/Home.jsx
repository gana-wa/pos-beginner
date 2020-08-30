import React, { Component } from 'react';
// import Axios from 'axios';
import { connect } from 'react-redux';
import { fetchMenus, searchMenu } from '../redux/actions/menu';

// components
import Menu from '../components/Menu';
import HeaderHome from '../components/HeaderHome';
import LeftSidebar from '../components/LeftSidebar';
import RightSidebar from '../components/RightSidebar';


class Home extends Component {

   componentDidMount = () => {
      this.props.fetchMenus();
   }

   handleSearch = (key) => {
      const filtered = this.props.menus.filter(item => item.product_name.toLowerCase().indexOf(key.toLowerCase()) !== -1);
      // console.log(filtered);
      this.props.searchMenu(filtered)
   }

   render() {
      return (
         <>
            <div className="container-fluid">
               <div className="row">
                  {/* kiri */}
                  <div className="col-md-8">
                     <HeaderHome
                        handleSearch={(key) => this.handleSearch(key)}
                     // fetchAllProducts={() => this.fetchAllProducts}
                     />
                     <div className="row">
                        <LeftSidebar />
                        <Menu />
                     </div>
                  </div>
                  {/* kanan */}
                  <div className="col-md-4 border-left border-top">
                     <RightSidebar />
                  </div>
               </div>
            </div>
         </>
      );
   };
};

const mapStateToProps = (state) => {
   return {
      menus: state.menu.menus,
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
      fetchMenus: () => dispatch(fetchMenus()),
      searchMenu: (key) => dispatch(searchMenu(key)),
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);