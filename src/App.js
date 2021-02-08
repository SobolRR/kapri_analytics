import {StockTable} from './components/SalesTable/StockTable'
import React from 'react'
import {Route,NavLink} from 'react-router-dom'



import { Menu } from 'antd';
import { SalesTable } from './components/SalesTable/SalesTable';

const { SubMenu } = Menu;

class App extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <>
        <Route path="/">
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
            </SubMenu>

            <SubMenu key="girls" title="Девочки">
              <Menu.Item key="girlsStock">
                <NavLink to="/stock/girls">Oстатки </NavLink>
              </Menu.Item>
              <Menu.Item key="girlsSales">
                <NavLink to="/sales/girls">Продажи </NavLink>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="unisex" title="Унисекс">
              <Menu.Item key="unisexStock">
                <NavLink to="/stock/unisex">Oстатки</NavLink>
              </Menu.Item>
              <Menu.Item key="unisexSales">
                <NavLink to="/sales/unisex">Продажи</NavLink>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Route>
        <Route exact path="/stock/:sex" render={() => <StockTable />} />
        <Route path="/sales/:sex" render={() => <SalesTable />} />
      </>
    );
  }
}
export default App
