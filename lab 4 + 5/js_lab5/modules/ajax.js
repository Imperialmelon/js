class Ajax {
    async post(url, callback) {
      await fetch(url, {
        method: 'POST',
      })   
        .then(response => response.json())
        .then(data => callback(data))
        .catch(error => console.error('Error in fetch:', error));
    }
  }
  
  export const ajax = new Ajax();


