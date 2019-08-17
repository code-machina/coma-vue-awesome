var _ = require('lodash');

// export function renameObjArray(obj, newkeys, oldkeys) {
//   if (_.isArray(obj)) {
//     // 배열인 경우
//     obj.map((el) => { return _.pick})
//   } else {
//     // 배열이 아닌 경우
//     const {} = {..._.pick(obj, oldkeys)}
//     return
//   }
// }

export function renameKeys(arrayObject, newKeys, index = false) {
  let newArray = [];
  arrayObject.forEach((obj,item)=>{
      const keyValues = Object.keys(obj).map((key,i) => {
          return {[newKeys[i] || key]:obj[key]}
      });
      let id = (index) ? {'ID':item} : {}; 
      newArray.push(Object.assign(id, ...keyValues));
  });
  return newArray;
}