import React from 'react'
import {Route,NavLink} from 'react-router-dom'



import { Menu } from 'antd';
import { StockTable } from './components/Stock/StockTable';
import { SalesTable } from './components/Sales/SalesTable';
import { fetchCounterparty } from './core/api';
import { BrandsReport } from './components/common/BrandsReport/BrandsReport';

const { SubMenu } = Menu;

class App extends React.Component {
  state = {
    current: null,
    counterparties:null
  };
  componentDidMount(){
    fetchCounterparty().then((counterparties) => {
      this.setState({counterparties})
    });
  }

  handleClick = e => {
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <>
        
          <Menu
            onClick={this.handleClick}
            selectedKeys={[current]}
            mode="horizontal"
            theme="dark"
          >
            <SubMenu key="boys" title="Мальчики">
              <Menu.Item key="boysStock">
                <NavLink to="/stock/boys">Oстатки </NavLink>
              </Menu.Item>
              <Menu.Item key="boysSales">
                <NavLink to="/sales/boys">Продажи </NavLink>
              </Menu.Item>
              <Menu.Item key="boysBrandReport">
                <NavLink to="/brandsReport/boys">Отчет по брендам </NavLink>
              </Menu.Item>
            </SubMenu>

            <SubMenu key="girls" title="Девочки">
              <Menu.Item key="girlsStock">
                <NavLink to="/stock/girls">Oстатки </NavLink>
              </Menu.Item>
              <Menu.Item key="girlsSales">
                <NavLink to="/sales/girls">Продажи </NavLink>
              </Menu.Item>
              <Menu.Item key="girlsBrandReport">
                <NavLink to="/brandsReport/girls">Отчет по брендам </NavLink>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="unisex" title="Унисекс">
              <Menu.Item key="unisexStock">
                <NavLink to="/stock/unisex">Oстатки</NavLink>
              </Menu.Item>
              <Menu.Item key="unisexSales">
                <NavLink to="/sales/unisex">Продажи</NavLink>
              </Menu.Item>
              <Menu.Item key="unisexBrandReport">
                <NavLink to="/brandsReport/unisex">Отчет по брендам </NavLink>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="common" title="Общее">
              <Menu.Item key="commonStock">
                <NavLink to="/stock/common">Oстатки</NavLink>
              </Menu.Item>
              <Menu.Item key="commonSales">
                <NavLink to="/sales/common">Продажи</NavLink>
              </Menu.Item>
              <Menu.Item key="commonBrandReport">
                <NavLink to="/brandsReport/common">Отчет по брендам </NavLink>
              </Menu.Item>
            </SubMenu>
          </Menu>
        
        <Route exact path="/stock/:sex" render={() => <StockTable />} />
        <Route path="/sales/:sex" render={() => <SalesTable counterparties={this.state.counterparties}/>} />
        <Route path="/brandsReport/:sex" render={() => <BrandsReport/>} />
      </>
    );
  }
}
export default App
