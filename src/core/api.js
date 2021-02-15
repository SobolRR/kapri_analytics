import axios from "axios"
import moment from 'moment';
import { dateFormat } from "../data";


//const username ="admin@sobolroman22"
//const password= "67b2008de9f9";

//var basicAuth = "Basic YWRtaW5Ac29ib2xyb21hbjIyOjY3YjIwMDhkZTlmOQ=="
var tokAuth = "Bearer f103af43fa14ff2524437274cf82999285bd881e"

const folderLinks = {
  girls:"https://online.moysklad.ru/api/remap/1.2/entity/productfolder/c9ac503e-1d16-11eb-0a80-050d002dcd9a",
  boys:"https://online.moysklad.ru/api/remap/1.2/entity/productfolder/00cfa023-1d16-11eb-0a80-050d002dade8",
  unisex:"https://online.moysklad.ru/api/remap/1.2/entity/productfolder/73475072-28e9-11eb-0a80-029000103030"
}

export const fetchStock = async (options) => {
  const { folderName, inTransit } = options;
  const stockMode = inTransit ? "all" : "positiveOnly";
  const link = `https://online.moysklad.ru/api/remap/1.2/report/stock/all?groupBy=consignment&filter=stockMode=${stockMode}&filter=productFolder=${folderLinks[folderName]}&filter=inTransitOnly=${inTransit}`

    const result = await axios.post(
      'https://kapri-server.herokuapp.com',{link},
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return result.data
}

export const fetchSales = async (
  momentFrom = "2020-11-01 00:00:00",
  momentTo = moment(new Date()).format(dateFormat)
 
) => {
  const link = `https://online.moysklad.ru/api/remap/1.2/report/profit/byvariant?momentFrom=${momentFrom}&momentTo=${momentTo}`
  const result = await axios.post(
    'https://kapri-server.herokuapp.com',{link},
    {
      headers: {
        "Content-Type": "application/json",
        
      },
    }
  );
  return result.data
};

// https://online.moysklad.ru/api/remap/1.2/entity/product/0348ebe1-4064-11eb-0a80-016c003284d1