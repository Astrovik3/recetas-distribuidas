import urlWebServices from "./webServices";


export const loginUser = async function (userName, userPass) {
  let url = urlWebServices.loginUser;

  try {
    let response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: userName,
        password: userPass
      }) 
    });

    if(response.status === 200) {
      return 200;
    }
    else {
      return response.status;
    }
      
  } catch (error) {
    return 500;
  }
}

export const searchRecipes = async function () {
  let url = urlWebServices.searchRecipes;

  try {
    let response = await fetch(url, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });
     
    let datax = await response.json();

    //console.log('EN EL TRY response ' + response);
    //console.log('EN EL TRY' + response.status);

    /*if(response.status === 200) {
      return response;
    }
    else {
      return response.status;
    }*/
    return datax;

  } catch (error) {
    console.log('EN EL CATCH ' + url);
    console.log(error);
    return 500;
  }

}

export const requestPasswordReset = async function (userMail) {
  let url = urlWebServices.requestPasswordReset;

  try {
    let response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: userMail
      }) 
    });
    
    console.log('EN EL TRY' + response.status);

    /*if(response.status === 200) {
      return 200;
    }
    else {
      return response.status;
    }*/
    let datax = await response.json();
    console.log(datax);
    return datax;
      
  } catch (error) {
    console.log('EN EL CATCH ' + url);
    console.log(error);
    return 500;
  }
}
