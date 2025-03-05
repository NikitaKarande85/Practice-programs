
const myuser = {
  username: "Santosh",
  lastName: "Karande",
}

try {
  console.log("user address", myuser.address);
} catch (err) {
  console("err", err);
} finally {
  console.log("Every time call finally");
}



async function makeAsyncRequest() {
  try {
    const url =
      'https://6wrlmkp9u2.execute-api.us-east-1.amazonaws.com/?sleep=2000'
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data
  } catch (err) {
    console.log(err)
  }
}

makeAsyncRequest()
