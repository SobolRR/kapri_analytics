import { sizes } from "../data"

export function getSize(name){
  const re = /([0-9]+)-([0-9]+)|NB/g;
  return name.match(re)[0];
}

export function defineProductsBySex(sex,productGroups){
  return sex === "girls" || sex === "common" ? productGroups['girls'] : productGroups['boys']
}



function defineRenderValue(tableType,title, row,value){
  switch(tableType){
    case "sales":
      return (sizes.indexOf(title)) !== -1 ?
      value &&`${row.showSellSum ?  row.additionalData.sellSum[title] : value} (${((row.additionalData.sellSum[title])*100/row.totalSellSum).toFixed(2)}%)` 
      : value
      default:
        return value
  } 

 }

const alphabetSortingFunc =function(a, b){
  var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
  if (nameA < nameB) 
    return -1
  if (nameA > nameB)
    return 1
  return 0 
  }

function defineBackground(title,value){
  return title === "total" ? "white" : parseInt(value) > 0 ? "#C7E78F":"#e6948e"
}

const sortFuntions = {
  brandsReport: (title) => (a, b) =>  parseFloat(a[title]) - parseFloat(b[title]),
  sales: (title) => (a, b) => parseInt(a[title]) - parseInt(b[title]),
  
};

export function createColumns(titles,tableType){

    const res = titles.map((title,idx)=>{
      const sorting =
        !!sortFuntions[tableType] && sizes.indexOf(title) === -1
          ? { sorter: sortFuntions[tableType](title) }
          : {};
      return {
        title: title,
        dataIndex: title,
        key: idx,
        ...sorting,
        render(value, row) {
          const background = defineBackground(title, value);
          return {
            props: {
              style: { background },
            },
            children: (
              <div>{defineRenderValue(tableType, title, row, value)} </div>
            ),
          };
        },
      };
    })
    res.unshift(  {
      title: 'Название',
      dataIndex: 'name',
      key: 'name',
      sorter: alphabetSortingFunc,
      width:200
    })
    
    return res
  }
  
const stockTitles = [...sizes,'total']
const sellTitles = [...sizes,'total',"totalSellSum"]
const brandsReportTitles=['sum','profit',"profitability"]

export const sellColumns = createColumns(sellTitles,"sales")
export const stockColumns = createColumns(stockTitles, "stock")
export const brandsReportColumns = createColumns(brandsReportTitles, "brandsReport")

