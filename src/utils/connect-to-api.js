export async function postData(url = '', data = {}, method = 'POST') {
  try {
    const fetchOptions = {
      method, // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    };
    // Default options are marked with *
    const response = await fetch(url, fetchOptions);
    return response.json(); // parses JSON response into native JavaScript objects
  } catch (error) {
    console.error(error);
  }
}
