const { send } = require("process");
express = require("express");
app = express();
hotel = require("./hotel.json");

app.get("/details", function(req, res)
{
    nameList = [];
    hotel.forEach(element =>
    {
        nameList.push(element.name)
    });
    res.send(nameList);
})

app.get("/type", function(req, res)
{
    keyword = req.query.type;
    searchType = [];
    hotel.forEach(element =>
    {
        if(keyword == element.type)
        {
            searchType.push(element.name);
        }
    });
    res.send(searchType);
})

app.get("/city", function(req, res)
{
    keyword = req.query.city;
    searchCity = [];
    hotel.forEach(element =>
    {
        if(keyword == element.city)
        {
            searchCity.push(element.name);
    };
    res.send(searchCity);
    })
})


app.get("/cuisine", function(req, res)
{
    keyword = req.query.cuisine;
    searchCuisine = [];
    hotel.forEach(element =>
    {
        for (const key in element.cuisine)
        {
            if(keyword == element.cuisine[key])
            {
                searchCuisine.push(element.name);
            }
        }
    });
    res.send(searchCuisine);
})

app.listen('3000',function(req,res){
    console.log('Server listening to port 3000');
})

