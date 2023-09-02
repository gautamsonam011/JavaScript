// Exercise - 2 Snake Water Gun 

// Use JavaScript to create a game of Snake Water & Gun . 
// The game should ask you to enter 5, W or GainNode. 
// The computer should be after to randomly generate SVGAElement, W or G and declare. 
// Win or loss using alert. 
// Use confirm and prompt wherever required. 

let user = prompt("Enter S, W or G");
let cpuI = Math.floor(Math.random()*3);
let cpu = ["S","W","G"][cpuI];

const match = (cpu,user) => {
    if(cpu === user){
        return "Nobody"
    }
    else if (cpu === "S" && user === "W"){
        return "cpu";
    }
    
    else if (cpu === "S" && user === "G"){
        return "user";
    }
    
    else if (cpu === "G" && user === "W"){
        return "user";
    }
    
    else if (cpu === "G" && user === "S"){
        return "cpu";
    }
    
    else if (cpu === "W" && user === "S"){
        return "user";
    }
    
    else if (cpu === "W" && user === "G"){
        return "cpu";
    }
}
let result = match(cpu,user);
document.write(`CPU: ${cpu} <br> and ${user} <br> The winner is:${result}`);
