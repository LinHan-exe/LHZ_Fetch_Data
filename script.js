//Links to request from
const postslink = "https://jsonplaceholder.typicode.com/posts/"
const userslink = "https://jsonplaceholder.typicode.com/users"


async function populate() {
    //Requests the posts
    const requestposts = new Request(postslink);
    const responseposts = await fetch(requestposts);
    const posts = await responseposts.json();

    //Requests the users
    const requestusers = new Request(userslink);
    const responseusers = await fetch(requestusers);
    const users = await responseusers.json();
 
    populateContent(posts, users);
}
 
function populateContent(posts, users){
    const section = document.querySelector("section")
    for (const post of posts){
        const myArticle = document.createElement("article")
        const userid = post.userid;
        const createdh2 = document.createElement("h2")
        const para1 = document.createElement("p")

        
        createdh2.textContent = post.title
        para1.textContent = post.body


        myArticle.appendChild(createdh2)
        myArticle.appendChild(para1)
        section.appendChild(myArticle)
    }
}


populate()
