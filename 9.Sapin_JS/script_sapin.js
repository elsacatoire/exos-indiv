//let's draw a chrismas tree !

//--------------------Parts of the tree-----------------------------\\

//the fucntion that will draw the star on top of the tree
function draw_top_star(tree_size_int) {
    let draw_star = " ".repeat(tree_size_int + 1)
    draw_star += "+" //adding the star :)
    console.log(draw_star); // het out of the list effect
}

//the function that will calculate and draw the spaces before the characters
function blank_line(tree_size_int) {
    spaces_nb_list = [5, 4, 3, 3, 2, 1, 2, 1] //math is not my thing, I made a list to help me
    let empty_line = " ".repeat(spaces_nb_list[tree_size_int])
    return empty_line
}

function trunk() {
    trunk_line = " ".repeat(6) + "#".repeat(2)
    return trunk_line
}

//foot as a place relative to his heigth
function draw_trunk(tree_size_int) {
    console.log(trunk(tree_size_int))
    if (tree_size_int >= 5) {
        console.log(trunk(tree_size_int))
    }
    if (tree_size_int >= 7) {
        console.log(trunk(tree_size_int))
    }
}

function get_random_character(charList) {
    let randomIndex = Math.floor(Math.random() * charList.length); // Génère un index aléatoire
    return charList[randomIndex]; // Renvoie le caractère correspondant à l'index aléatoire
}

function draw_lines(tree_size_int) {
    random_list = ["*", "+", "*", "o"]
    for (let i = 0; i <= tree_size_int; i++) {  //1st loop for each line of the tree
        branch = [blank_line(i), '/']
        for (let j = 0; j < list[i] - 1; j++) { //the inside
            let random_decoration = get_random_character(random_list);
            if (branch[branch.length - 1] !== "*") {
                branch.push("*")
            } else {
                branch.push(random_decoration)
            }
        }
        branch.push("*\\")
        console.log(branch.join(""))
    }
}

function ask_tree_length() {
    let how_tall = prompt("how tall will be your tree ?", "3 to 7 for a magnificient tree")
    return how_tall
}


//the function that draws the tree
function sapin(tree_size_int) {
    list = [1, 3, 5, 5, 7, 9, 7, 9] //an array to help me
    draw_top_star(5)
    draw_lines(tree_size_int)
    draw_trunk(tree_size_int)
}

sapin(5)
sapin(ask_tree_length())
