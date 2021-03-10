import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { fetchSales } from '../../../core/api';
import { brandsReportColumns } from '../../../utils/utils';
import { createBrandsDefaultDataSource,filterByBrand } from './BrandsReport.functions';
import { DatePicker, Table } from 'antd';
import moment from 'moment';
import { filterBySex } from '../../Sales/SalesTable.functions';
import { brands, dateFormat } from '../../../data';
const { RangePicker } = DatePicker;


export const BrandsReport = () => {
    const { sex } = useParams();
    console.log(sex)
    const [dataSource, setDataSource] = useState(createBrandsDefaultDataSource());
    const [isLoading, setIsLoading] = useState(false);
    const [momentFrom, setMomentFrom] = useState("")
    const [momentTo, setMomentTo] = useState("")


    const updateDataSource = async (momentFrom, momentTo) => {
        setIsLoading(true);
        let data = await fetchSales(undefined,momentFrom,momentTo);
         data = sex === "common" ? data : filterBySex(data, sex);
         let dataSource = createBrandsDefaultDataSource();
         brands.forEach((brand)=> {
             const products = filterByBrand(data, brand);
             products.forEach((product)=>{
                 const idx = dataSource.findIndex((item)=> item.name === brand)
                 
                 if(idx > -1){  dataSource[idx] = {
                     ...dataSource[idx],
                     sum: dataSource[idx].sum += +(product.sellSum),
                     profit:dataSource[idx].profit += +(product.profit),
                     sellCostSum:dataSource[idx].sellCostSum += +(product.sellCostSum)
                 }}           
             })
         })
        dataSource= dataSource.map((brand)=>{
            const profitability = +(brand.profit * 100 / brand.sellCostSum).toFixed(2)
           return {...brand,
            sum:(brand.sum / 100).toFixed(2),
            profit:(brand.profit / 100).toFixed(2),
                profitability: !!profitability ? profitability + "%" : 0
            }
         })

         setDataSource(dataSource)
        setIsLoading(false);
      };
    useEffect(()=>{
    updateDataSource(momentFrom,momentTo)
    },[sex,momentFrom,momentTo])

    return (
        <>
        <RangePicker
          onChange={(moments) => {
            
              setMomentFrom(moment(moments[0]._d).format(dateFormat))
              setMomentTo(moment(moments[1]._d).format(dateFormat))
          
          }}
          format={dateFormat}
          size="large"
        />
        <Table
        style={{width:"70vw"}}
        dataSource={dataSource}
        columns={brandsReportColumns}
        columnstock="3px"
        pagination={false}
        bordered={true}
        loading={isLoading}
         />
      </>
    )
}
