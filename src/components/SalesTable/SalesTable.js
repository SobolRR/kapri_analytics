import { Table } from 'antd'
import React,{useEffect,  useState} from 'react'
import { fetchSales } from '../../core/api'
import {goods,productNamesToFolders,dateFormat} from '../../data'
import { createDefaultDataSource,columns,getSize } from '../../utils/utils'
import { DatePicker, Space } from 'antd';
import moment from 'moment';
import { useParams } from 'react-router-dom'

const mapSexToSymbol = {
  boys: "М",
  girls: "Д",
  unisex: "У",
};
const productNames = Object.keys(productNamesToFolders);

const { RangePicker } = DatePicker;

export const SalesTable = () => {
    const {sex} = useParams()
    const [dataSource, setDataSource] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    
   const updateDataSource = async (momentFrom, momentTo) => {
     setIsLoading(true);
     const products = await fetchSales(momentFrom, momentTo);
     const filteredBySex = filterBySex(products, sex);
     setDataSource(updateSalesData(productNames, filteredBySex));
     setIsLoading(false);
   };
    useEffect(() => {
      updateDataSource();
    }, [sex]);
    return (
      <>
        <Space direction="vertical" size={12} align="center">
          <RangePicker
            onChange={(moments) => {
                updateDataSource(
                moment(moments[0]._d).format(dateFormat),
                moment(moments[1]._d).format(dateFormat)
              );
            }}
            format={dateFormat}
            size="large"
          />
        </Space>
        <Table
          dataSource={dataSource}
          columns={columns}
          columnstock="3px"
          pagination={false}
          bordered={true}
          loading={isLoading}
        />
      </>
    );;
}

function checkSex(str,sex){
    const re = `^[${mapSexToSymbol[sex]}]{1}`;
    const res = str.match(re);
    if( res) {
        return mapSexToSymbol[sex] === res[0];
    }
}

function filterBySex(products, sex){
    return products.filter((product) => {
        return checkSex(product.assortment.name, sex);
    })
}

function filterByProductName(products,name){
    return products.filter(
      (product) => product.assortment.name.indexOf(name) !== -1
    );
}

function findFolderByProductName(dataSource,name){
    return  dataSource.find((productFolder) => {
        return productFolder.name === productNamesToFolders[name];
      });
}
function updateSalesData(productNames,products){
  const dataSource = createDefaultDataSource(goods, 0);

  productNames.forEach((name) => {
    filterByProductName(products, name).forEach((product) => {
      const productFolder = findFolderByProductName(dataSource, name);
      const size = getSize(product.assortment.name);
      productFolder[size] += product.sellQuantity;
    });
  });
  return dataSource;
}
