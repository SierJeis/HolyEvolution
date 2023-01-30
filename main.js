holypower = 0;
holyadd = 1;
hpps = 0;
cultivation = 0;
cultadd = 1;
vitality = 1;
strength = 1;
agility = 1;
intel = 1;
wisdom = 1;

function killSpirit(){
    holypower += holyadd;
}

function updateCount(){
    setInterval(() => {
        document.querySelector("#holypower").innerHTML = "Holy Power: "+holypower;
        document.querySelector("#hpps").innerHTML = "Total HPPS: "+hpps;
        document.querySelector("#vit").innerHTML = "Vitality: "+vitality;
        document.querySelector("#str").innerHTML = "Strength: "+strength;
        document.querySelector("#agl").innerHTML = "Agility: "+agility;
        document.querySelector("#int").innerHTML = "Intelligence: "+intel;
        document.querySelector("#wis").innerHTML = "Wisdom: "+wisdom;
        if(holypower >= 100){
            document.querySelector("#class").innerHTML = "Enlightened One"
        }
    }
    , 10);
}

function rng(){
    let value1 = Math.floor(Math.random() * 6)
    if (value1 == 1) {
        vitality += 1;
    } else if (value1 == 2) {
        strength += 1; 
    } else if (value1 == 3){
        agility += 1;
    } else if (value1 == 4){
        intel += 1;
    } else if (value1 == 5){
        wisdom += 1;
    }
}

function cultivate(){
    cultivation += cultadd;
    rng()
}
