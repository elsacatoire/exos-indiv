//let's draw a chrismas tree !

//the fucntion that will draw the star on top of the tree
function draw_top_star(int) {
    /*     draw_star = []
        for (let i = 0; i <= 5; i++) { //loop to store the right amout of spaces before the Star
            draw_star.push(" ")
        }
        draw_star.push("+") //adding the star :)
        console.log(draw_star.join("")); // het out of the list effect */

    console.log(" ".repeat(int + 1) + "+" + " ".repeat(int + 1))
}

//the function that will calculate and draw the spaces before the characters
function spaces(int) {
    spaces_nb_list = [5, 4, 3, 3, 2, 1, 2, 1] //math is not my thing, I made a list to help me
    for (let i = 0; i <= int; i++) {//first loop to create the main list and the buffer list for each line
        space_draw_list = []
        space_i_list = []
        for (let j = 0; j < spaces_nb_list[i]; j++) {//2nd loop to implemant the buffer list that set spaces for one line
            space_i_list.push(" ")
        }
        space_draw_list.push(space_i_list.join(""))//end of 1st loop push the buffer list into the main as a string
    }
    return space_draw_list
}

function foot() {
    foot_piece = []
    for (let i = 0; i < 6; i++) {
        foot_piece.push(" ")
    }
    foot_piece.push("##")
    return foot_piece.join("")
}

//foot as a place relative to his length
function draw_foot(int) {
    console.log(foot(int))
    if (int >= 5) {
        console.log(foot(int))
    }
    if (int >= 7) {
        console.log(foot(int))
    }
}


function get_random_character(charList) {
    let randomIndex = Math.floor(Math.random() * charList.length); // Génère un index aléatoire
    return charList[randomIndex]; // Renvoie le caractère correspondant à l'index aléatoire
}

function draw_line(int) {
    random_list = ["*", "+", "*", "o"]
    for (let i = 0; i <= int; i++) {//1st loop for each line (branch) of the tree
        branch = []
        space = spaces(i).join("")//to set the right indentation
        branch.push(space)
        branch.push('/')
        for (let j = 0; j < list[i] - 1; j++) {//to draw the branch
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
function sapin(int) {
    list = [1, 3, 5, 5, 7, 9, 7, 9] //an array to help me
    draw_top_star(5)
    draw_line(int)
    draw_foot(int)
}

sapin(ask_tree_length())