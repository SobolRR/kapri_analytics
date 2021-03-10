import React,{useEffect,  useState} from 'react'
import { fetchSales } from '../../core/api'
import {productNamesToFolders,dateFormat} from '../../data'
import { sellColumns, } from '../../utils/utils'
import { DatePicker, Dropdown, Table, Button, Menu } from "antd";
import moment from 'moment';
import { useParams } from 'react-router-dom'
import { filterBySex, updateSalesData } from './SalesTable.functions';
import Checkbox from 'antd/lib/checkbox/Checkbox';

const productNames = Object.keys(productNamesToFolders);

const { RangePicker } = DatePicker;

export const SalesTable = ({counterparties}) => {
  const { sex } = useParams();
  const [dataSource, setDataSource] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [counterparty, setCounterparty] = useState(null);
  const [momentFrom, setMomentFrom] = useState("")
  const [momentTo, setMomentTo] = useState("")

  const [showSellSum, setShowSellSum] = useState(true)

  const counterpartyMenu = counterparties && (
    <Menu theme="dark" selectedKeys={[counterparty ? counterparty.name :"All"]}>
      <Menu.Item
        onClick={() => {
          setCounterparty(null);
        }}
        key={"All"}
      >
        {"All"}
      </Menu.Item>
      {counterparties.map((item) => {
        return (
          <Menu.Item
            onClick={() => {
              setCounterparty(item.counterparty);
            }}
            key={item.counterparty.name}
          >
            {item.counterparty.name}
          </Menu.Item>
        );
      })}
    </Menu>
  );

  const updateDataSource = async ( counterparty,momentFrom, momentTo,) => {
    setIsLoading(true);
    let products = await fetchSales(counterparty,momentFrom, momentTo);
     products = sex === "common" ? products : filterBySex(products, sex);
    setDataSource(updateSalesData(productNames, products, sex,showSellSum));
    setIsLoading(false);
  };

  useEffect(() => {
    let currentCounterparty = !!counterparty ? counterparty.meta.href :counterparty
    updateDataSource(currentCounterparty,momentFrom, momentTo);
  }, [sex,counterparty,showSellSum,momentFrom,momentTo]);
  return (
    <>
        <RangePicker
          onChange={(moments) => {
            setMomentFrom(moment(moments[0]._d).format(dateFormat))
            setMomentTo(moment(moments[1]._d).format(dateFormat));
          }}
          format={dateFormat}
          size="large"
        />
        <Dropdown overlay={counterpartyMenu}  placement="bottomCenter">
          <Button>{counterparty ? counterparty.name : "Контрагент"}</Button>
        </Dropdown>
        <Checkbox checked={showSellSum} style={{"marginLeft":"30px"}}onChange={() => setShowSellSum((prev) => !prev)}>
        SellSum
      </Checkbox>
      <Table
        dataSource={dataSource}
        columns={sellColumns}
        columnstock="3px"
        pagination={false}
        bordered={true}
        loading={isLoading}
      />
    </>
  );
}



