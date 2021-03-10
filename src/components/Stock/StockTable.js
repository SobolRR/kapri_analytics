import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import { Table} from 'antd';
import { brands} from '../../data'
import {stockColumns} from '../../utils/utils'
import { fetchStock } from '../../core/api';
import { Checkbox } from 'antd';
import { Menu, Dropdown, Button } from 'antd';
import { calculateStock, createDefaultDataSource, filterByBrand } from './StockTable.functions';



export const StockTable = ({fetchFunc}) => {
  const [dataSource, setDataSource] =useState(null)
  const [isLoading,setIsLoading] = useState(false)
  const [inTransit, setInTransit] =  useState(false)
  const [brand,setBrand] = useState("all")
  const {sex} = useParams()
  
  const menu = 
 (
  <Menu theme="dark" selectedKeys={[brand]}>
    {brands.map(brand=>{
      return   (
      <Menu.Item  onClick ={()=>{setBrand(brand)}} key={brand}>
        {brand}   
    </Menu.Item>)
    })}
  
  </Menu>
);

  const updateDataSource = async () => {
    const newDataSource = createDefaultDataSource(sex);
    setIsLoading(true);
    const options = { folderName: sex, inTransit };
    let products = await fetchStock(options);

    if (brand !== "all") {
      products = filterByBrand(products,brand)
    }
    const stockData = calculateStock(products,sex, inTransit)
   
    newDataSource.forEach((item) => {
      const res = stockData.find((el) => item.name === el.name);
      let totalW = 0;
      let totalD = 0;

      for (let size in res.sizes) {
        totalW += res.sizes[size].width;
        totalD += res.sizes[size].depth;
        item[size] = `${res.sizes[size].depth} (${res.sizes[size].width}) `;
      }
      item.total = `${totalD} (${totalW})`;
    });

    setDataSource(newDataSource);
    setIsLoading(false);
  };

  useEffect(() => {
    updateDataSource(fetchFunc);
  }, [sex, inTransit, brand]);

  return (
    <>
      <Dropdown  overlay={menu} placement="bottomCenter">
        <Button>Бренд</Button>
      </Dropdown>
      <Checkbox style={{"marginLeft":"30px"}}onChange={() => setInTransit((prev) => !prev)}>
        In transit
      </Checkbox>
      <Table
        dataSource={dataSource}
        columns={stockColumns}
        columnstock="3px"
        pagination={false}
        bordered={true}
        loading={isLoading}
      />
    </>
  );
}


