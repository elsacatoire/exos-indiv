//the fucntion that will draw the star on top of the tree
function topStar(int) {
    draw_star = []
    for (let i = 0; i <= ((int)); i++) { //loop to store the right amout of spaces before the Star
        draw_star.push(" ")
    }
    draw_star.push("+") //adding the star :)
    console.log(draw_star.join("")); // ça déconcatène sévère
}

//the function that will calculate and draw the spaces before the characters
function spaces(int) {
    spaces_nb_list = [5, 4, 3, 3, 2, 1]

    for (let i = 0; i <= int; i++) {
        space_draw_list = []
        space_i_list = []
        for (let j = 0; j < spaces_nb_list[i]; j++) {
            space_i_list.push(" ")
        }
        space_draw_list.push(space_i_list.join(""))
    }
    return space_draw_list
}

//the function that draws the tree
function sapin(int) {
    topStar(int)
    list = [1, 3, 5, 5, 7, 9]

    for (let i = 0; i <= int; i++) {
        branch = []
        space = spaces(i).join("")
        branch.push(space)
        branch.push('/')
        for (let j = 0; j < list[i]; j++) {
            branch.push("*")
        }
        branch.push("\\")
        console.log(branch.join(""))
    }


}

sapin(5)