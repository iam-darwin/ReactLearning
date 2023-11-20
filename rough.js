async function fetchData() {
    try {
      const response = await fetch('http://api.exchangeratesapi.io/v1/latest?access_key=4f53661d34d3c7f844c845c5fc197e36');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }
  
fetchData();
  