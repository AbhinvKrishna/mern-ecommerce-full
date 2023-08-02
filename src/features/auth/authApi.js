
export function createUser(userData) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch('http://localhost:8080/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
      })

      if (response.ok) { //  (response.ok) --> this checks the server status is 200 or not //
        const data = await response.json()
        resolve({ data })

      }
      else {
        const signUpErr = await response.json();

        console.log(signUpErr,"signUpErr");
        reject(signUpErr)
      }

    } catch (error) {
      console.log(error, "Catch-Error");
      reject(error)
    }

  }

  );
}




export function loginUser(loginInfo) {
  return new Promise(async (resolve, reject) => {

    try {
      const response = await fetch('http://localhost:8080/auth/login',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(loginInfo)
        })

      if (response.ok) {
        const data = await response.json()
        resolve({ data })
      }
      else {
        const err = await response.json()
        reject(err)
      }
    } catch (error) {
      reject({ error })
    }


  }
  );
}

//Update User //

export function updateUser(updatedUser) {
  return new Promise(async (resolve) => {
    const response = await fetch(`http://localhost:8080/users/${updatedUser.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedUser)
    })

    const data = await response.json();
    console.log(data);
    resolve({ data })

  }

  );
}
