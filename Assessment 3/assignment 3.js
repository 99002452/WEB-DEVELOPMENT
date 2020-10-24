website.js

const { send } = require("process");

express = require("express");
website = express();

hotel = require("./hotels.json");


website.get("/searchName", function(req, res)
{
    nameList = [];
    hotels.forEach(element =>
    {
        nameList.push(element.name); 
    }
});

    res.send(searchName);
})

website.get("/searchCity", function(req, res)
{
    nameList = [];
    hotels.forEach(element =>
    {
        nameList.push(element.city); 
    }
});

    res.send(searchCity);
})


website.get("/searchByRoom", function(req, res)
{
    keyword = req.query.sType;
    searchType = [];
    hotels.forEach(element =>
    {
        if(keyword == element.type)
        {
            searchType.push(element.room); 
        }
    });
    res.send(searchRoom);
})

website.get("/searchByType", function(req, res)
{
    keyword = req.query.sType;
    searchType = [];
    hotels.forEach(element =>
    {
        if(keyword == element.type)
        {
            searchType.push(element.name); 
        }
    });
    res.send(searchType);
})

website.get("/searchByCuisine", function(req, res)
{
    keyword = req.query.sCuisine;
    searchCuisine = [];
    hotels.forEach(element =>
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


// Server Listening...
website.listen(8080, function(req, res)
{
    console.log("Server listening to port 8080");
})



hotels.json

[
    {
        "name": "Casablanca",
        "city": "Mysore",
        "type": "Resort",
        "rooms": ["Modern", "classic", "honey-moon suite"]
        "cuisine":["continental", "indian", "italian"]
    },
    {
        "name": "Mariot",
        "city": "Chennai",
        "type": "BeachSide Resort-5Star",
        "rooms": ["Modern", "classic", "honey-moon suite"]
        "cuisine":["continental", "indian", "italian"]
      
    },
    {
        "name": "Tipton",
        "city": "Bangalore",
        "type": "Resort-5Star",
        "rooms": ["Modern", "classic", "honey-moon suite"]
        "cuisine": ["Indian", "Chinese", "Arabian"]
    },
    {
        "name": "Feathers Hotel",
        "city": "Delhi",
        "type": "Resort-5Star",
        "rooms": ["Modern", "classic", "honey-moon suite"]
        "cuisine": ["Indian", "Chinese", "Arabian", "Italian"]
    },
    {
        "name": "Hotel Heritage",
        "city": "Ooty",
        "type": "Cottage",
        "rooms": [ "Classic", "honey-moon suite","Double-decker"]
        "cuisine": ["Indian", "Chinese", "Arabian", "Italian"]
    },
    {
        "name": "Paradise",
        "city": "Pondicherri",
        "type": "Resort",
        "cuisine": ["Indian","Chinese", "Arabian", "Italian"]
        "rooms": [ "Classic", "honey-moon suite","Double-decker"]

    }
]

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hotel List</title>
</head>
<body>
    <div>
        <form action="http://localhost:8080/details">
            View Hotels <input type="submit">
        </form>
    </div>
    <div>
        <form action="http://localhost:8080/searchByCity">
            Search Hotels by City <input type="text" name="sCity">
            <input type="submit">
        </form>
    </div>
    <div>
        <form action="http://localhost:8080/searchByType">
            <select name="sType">
                <option>--type--</option>
                <option value="Cottage">Cottage</option>
                <option value="Resort">Resort</option>
            </select>
            <input type="submit">
        </form>
    </div>
    <div>
        <form action="http://localhost:8080/searchByRoom">
        Search Hotels by Room <input type="text" name="sRoom">
        <select name="sRoom">
                <option>--room--</option>
                <option value="modern">Modern</option>
                <option value="honey-moon suite">Honey-moon Suite</option>
                <option value="classic">Classic</option>
                
            </select>
            <input type="submit">
        </form>
    </div>
    <div>
        <form action="http://localhost:8080/searchByCuisine">
            Search Hotels by Cuisine <input type="text" name="sCuisine">
            <select name="sCuisine">
                <option>--cuisine--</option>
                <option value="indian">Indian</option>
                <option value="italian">Italian</option>
                <option value="continental">Continental</option>
                <option value="chinese">Chinese</option>
            <input type="submit">
        </form>
    </div>
    
</body>
</html>









