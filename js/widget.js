let kimonoAJAX = new XMLHttpRequest();
kimonoAJAX.onreadystatechange = function ()  {
    if (kimonoAJAX.readyState === 4) {
        // string to json = conversion string to array (object)
        let classmates = JSON.parse(kimonoAJAX.responseText);
        /**
         * Processing JSON Data by Kimono
         * 1. Create a new HTML list item.
         * 2. Check the "x" property -> false, true.
         * 3. Get the value for the "name" property; Insert it inside the <li> tag.
         * 4. Close the <li> tag.
         */
        let statusHTML = '<ul class="aanwezigheidsLijst">';

        // Iterate through the JSON-array
        for (let i = 0; i < classmates.length; i++) {
            if (classmates[i].inoffice === true) {
                statusHTML += '<li class="in">';
            } else {
                statusHTML += '<li class="out">';
            }
            statusHTML += classmates[i].name;
            statusHTML += '</li>';
        }
        statusHTML += '</ul>';
        document.getElementById('aanwezigheidslijst').innerHTML = statusHTML;
    }
};
kimonoAJAX.open('GET', 'data/classmates.json');
kimonoAJAX.send();

let roomRequest = new XMLHttpRequest();
roomRequest.onreadystatechange = function ()  {
    if (roomRequest.readyState === 4) {
        // string to json = conversion string to array (object)
        let rooms = JSON.parse(roomRequest.responseText);
        /**
         * Processing JSON Data by Kimono
         * 1. Create a new HTML list item.
         * 2. Check the "inoffice" property -> false, true.
         * 3. Get the value for the "name" property; Insert it inside the <li> tag.
         * 4. Close the <li> tag.
         */
        let statusHTML = '<ul class="werkplekken">';

        // Iterate through the JSON-array
        for (let i = 0; i < rooms.length; i++) {
            if (rooms[i].available === true) {
                statusHTML += '<li class="empty">';
            } else {
                statusHTML += '<li class="full">';
            }
            statusHTML += rooms[i].room;
            statusHTML += '</li>';
        }
        statusHTML += '</ul>';
        document.getElementById('beschikbare-werkplekken').innerHTML = statusHTML;
    }
};
roomRequest.open('GET', 'data/rooms.json');
roomRequest.send();