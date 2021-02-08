import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import { Table} from 'antd';
import {goods} from '../../data'
import { createDefaultDataSource } from '../../utils/utils'
import {columns,getSize} from '../../utils/utils'
import { fetchStock } from '../../core/api';
import { Checkbox } from 'antd';
import { Menu, Dropdown, Button } from 'antd';


function createDefaultStock(products){
  return products.map((product)=>{
    return    {
      name: product,
      sizes: {
        "NB":{ width: 0, depth: 0,inTransit:0 },
        "0-3": { width: 0, depth: 0,inTransit:0 },
        "1-2": { width: 0, depth: 0,inTransit:0  },
        "2-4": { width: 0, depth: 0,inTransit:0  },
        "3-6": { width: 0, depth: 0 ,inTransit:0 },
        "4-6": { width: 0, depth: 0,inTransit:0  },

        "6-9": { width: 0, depth: 0 ,inTransit:0 },
        "9-12": { width: 0, depth: 0 ,inTransit:0 },
        "12-18": { width: 0, depth: 0 ,inTransit:0 },
        "18-24": { width: 0, depth: 0 ,inTransit:0 },
        "24-36": { width: 0, depth: 0 ,inTransit:0 },
        "24-48": { width: 0, depth: 0 ,inTransit:0 },
        "36-48": { width: 0, depth: 0 ,inTransit:0 },
      },
    }
  })
}

const brands = [
  "all",
  "bi baby",
  "bimini",
  "biorganic",
  "Disney baby",
  "DreamKid",
  "Dunnes",
  "H&M",
  "Little Angel",
  "George",
  "little life",
  "Marks & Spencer",
  "Matalan",
  "Next",
  "Tasco",
  "KEHA",
  "Мамине чудо"
];



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
    const stockData = createDefaultStock(goods);
    const newDataSource = createDefaultDataSource(goods);
    setIsLoading(true);
    const options = { folderName: sex, inTransit };
    let products = await fetchStock(options);

    if (brand !== "all") {
      products = products.filter((product) => {
        return product.name.indexOf(brand) !== -1;
      });
    }

    products.forEach((good) => {
      const size = getSize(good.name);
      stockData.forEach((item) => {
        if (good.folder.name === item.name) {
          item.sizes[size].width += 1;
          item.sizes[size].depth += inTransit ? good.inTransit : good.stock;
        }
      });
    });
    newDataSource.forEach((item) => {
      const res = stockData.find((el) => item.name === el.name);
      for (let size in res.sizes) {
        item[size] = `${res.sizes[size].depth} (${res.sizes[size].width}) `;
      }
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
        columns={columns}
        columnstock="3px"
        pagination={false}
        bordered={true}
        loading={isLoading}
      />
    </>
  );
}


