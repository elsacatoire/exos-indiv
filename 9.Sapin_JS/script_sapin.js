//the fucntion that will draw the star on top of the tree
function draw_top_star() {
    draw_star = []
    for (let i = 0; i <= 5; i++) { //loop to store the right amout of spaces before the Star
        draw_star.push(" ")
    }
    draw_star.push("+") //adding the star :)
    console.log(draw_star.join("")); // het out of the list effect
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


function foot(int) {
    draw_foot = []
    for (let i = 0; i < 6; i++) {
        draw_foot.push(" ")
    }
    draw_foot.push("##")

    return draw_foot.join("")
}

//the function that draws the tree
function sapin(int) {
    list = [1, 3, 5, 5, 7, 9, 7, 9] //an array to help me
    draw_top_star()
    for (let i = 0; i <= int; i++) {//1st loop for each line (branch) of the tree
        branch = []
        space = spaces(i).join("")//to set the right indentation
        branch.push(space)
        branch.push('/')
        for (let j = 0; j < list[i]; j++) {//to draw the branch
            branch.push("*")
        }
        branch.push("\\")
        console.log(branch.join(""))
    }
    console.log(foot(int))
    if (int >= 5) {
        console.log(foot(int))
    }
    if (int >= 7) {
        console.log(foot(int))
    }
}

sapin(7)