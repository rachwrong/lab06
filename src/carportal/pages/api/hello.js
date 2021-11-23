export default function handler(req, res) {


  //you can also define if the request must be GET or POST
  //modifying api (server) files require a refresh of the browser to retrieve the data again
  switch (req.method) {
    case 'GET':
      res.status(200).json([{ name: 'cat' }, { name: 'dog' }])
      break
    case 'POST':
      res.status(200).json([{ name: 'meow' }, { name: 'woof' }])
      break

  }
}
