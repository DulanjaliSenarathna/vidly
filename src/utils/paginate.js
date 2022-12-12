import _ from 'lodash';

export function paginate(items,pageNumber, pageSize){

    const startIndex = (pageNumber-1)*pageSize;
    return _(items)//return lodash object that can chain lodash methods below
        .slice(startIndex)
        .take(pageSize)
        .value(); //convert lodash wrapper object to regular array
}