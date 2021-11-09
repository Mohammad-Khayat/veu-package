export function toFormData(dto) {
  let formData = new FormData();
  for (let key in dto) {
    if (typeof dto[key] == "object") {
       let obj = dto[key];
      for (const ik in obj) {
          if(Array.isArray(dto[key]))
        formData.append(key, obj[ik]);
        else
        formData.append(key+'.'+ik,obj[ik])
      }
    } else {
      formData.append(key, dto[key]);
    }
  }

  return formData;
}
