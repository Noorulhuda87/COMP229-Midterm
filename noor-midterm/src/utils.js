export async function submitData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Validation: Check if 'name', 'description', and 'category' are strings
      if (
        typeof data.name === 'string' &&
        typeof data.description === 'string' &&
        typeof data.category === 'string' &&
        !isNaN(data.price) && // Validation: Check if 'price' is a number
        !isNaN(data.quantity) && // Validation: Check if 'quantity' is a number
        data.name !== "" && // Validation: Check if 'name' is not empty
        data.description !== "" && // Validation: Check if 'description' is not empty
        data.category !== "" // Validation: Check if 'category' is not empty
      ) {
        resolve({ message: 'Data submitted successfully' });
      } else {
        reject({ error: 'Error submitting data to the server. Check your input values.' });
      }
    }, 1000);
  });

}