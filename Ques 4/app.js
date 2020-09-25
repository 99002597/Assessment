        const { send } = require("process");
        express = require("express");
        app = express();
        hotels = require("./hotel.json");
            app.get("/details", function(req, res)
                {
                    hotelList = [];
                    hotels.forEach(value =>
                        {
                            hotelList.push(value.name)
                        });
                res.send(hotelList);
                })
            app.get("/type", function(req, res)
                {
                    hotelSearch = [];
                    finding = req.query.type;
                    hotels.forEach(value =>
                {
                    if(finding == value.type)
                        {
                            hotelSearch.push(value.name);
                        }
                });
                res.send(hotelSearch);
                })
            app.get("/city", function(req, res)
                {
                    hotelCity = [];
                    finding = req.query.city;
                    hotels.forEach(value =>
                {
                    if(finding == value.city)
                {
                    hotelCity.push(value.name);
                };
                res.send(hotelCity);
                })
            })
            app.get("/cuisine", function(req, res)
                {
                    hotelCrusine = [];
                    finding = req.query.cuisine;
                    hotels.forEach(value =>
                {
                    for (const i in value.cuisine)
                {
                    if(finding == value.cuisine[i])
                {
                    hotelCrusine.push(value.name);
                }
                }
                });
                res.send(hotelCrusine);
            })
            app.listen('3000',function(){
            console.log('Server listening to port 3000');
        })