import { productGroups, productNamesToFolders, sizes } from "../../data";
import { defineProductsBySex, getSize } from "../../utils/utils";

const mapSexToSymbol = {
    boys: "М",
    girls: "Д",
    unisex: "У",
  };


export function checkSex(str,sex){
    const re = `^[${mapSexToSymbol[sex]}]{1}`;
    const res = str.match(re);
    if( res) {
        return mapSexToSymbol[sex] === res[0];
    }
}

export function filterBySex(products, sex){
    return products.filter((product) => {
        return checkSex(product.assortment.name, sex);
    })
}

export function filterByProductName(products,name){
    return products.filter(
      (product) => product.assortment.name.indexOf(name) !== -1
    );
}

export function findFolderByProductName(dataSource,name){
    return  dataSource.find((productFolder) => {
        return productFolder.name === productNamesToFolders[name];
      });
}
export function countProductFolderSellSumBySize(productFolder,product, size){
  const currentSellSum = productFolder["additionalData"].sellSum[size]
  const formattedSellSum = (product.sellSum / 100).toFixed(0)
  if (currentSellSum) {
    productFolder["additionalData"].sellSum[size] += Number(formattedSellSum);
  } else {
    productFolder["additionalData"].sellSum[size] = Number(formattedSellSum);
  }
}
export function updateSalesData(productNames,products,sex,showSellSum){
  const dataSource = createDefaultDataSource(sex, 0,showSellSum);

  productNames.forEach((name) => {
    filterByProductName(products, name).forEach((product) => {
      const productFolder = findFolderByProductName(dataSource, name);
      const size = getSize(product.assortment.name);
      productFolder[size] += product.sellQuantity;
      productFolder["total"] += product.sellQuantity;
      productFolder["sellSum"] = +product.sellSum;
      productFolder["totalSellSum"] += Number((product.sellSum / 100).toFixed(0));
      countProductFolderSellSumBySize(productFolder, product, size)      
    });
  });
  return dataSource;
}

export function createDefaultDataSource(sex,initial="",showSellSum){
  const products = defineProductsBySex(sex, productGroups)
  const sizesInitialValues = sizes.reduce((acc,size)=>{
    return {...acc,[size]:initial}
  },{})
  return products.map((product,idx)=>{
  
    return {
      key: idx,
      name: product,
      NB: initial,
      ...sizesInitialValues,
      total: initial,
      totalSellSum: initial,
      additionalData: {
        sellSum: {},
      },
      showSellSum
    };
  })
}