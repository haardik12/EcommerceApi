// EXPORTING MODULE TO LOAD HOME PAGE
module.exports.home = async function (req, res) {
    try {
        
      // sending 200 status for the success of the request made
      return res.status(200).json({
        message: 'welcome to the API',
      })
    } catch (error) {
        console.log(error);
        res.status(502).json({ 
            message: 'Bad Gateway'
        });
    }
}