import urlWebServices from "./webServices";


export const loginUser = async function (par1, par2) {
  let url = urlWebServices.loginUser;

  try {
    let response = await fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: par1,
        password: par2
      }) 
    });
    
    console.log('EN EL TRY ' + url);
    console.log('EN EL TRY' + response.status);

    /*if(response.status === 200) {
      return 200;
    }
    else {
      return response.status;
    }*/
      
  } catch (error) {
    console.log('EN EL CATCH ' + url);
    console.log(error);
    return 500;
  }

}


