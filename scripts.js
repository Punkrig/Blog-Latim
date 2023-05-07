const url="https://jsonplaceholder.typicode.com/posts"

const loading =document.querySelector("#loading");
const postContainer=document.querySelector("#post-container");

//pegando todos os posts

async function getALLPosts(){
    //usando a api para fazer uma requisição 
    const response =await fetch(url);
    console.log(response);
    //transformando a solicitação em json 
    const data = await response.json();
    console.log(data);
    //escondendo o a mensagem carregando da tela
    loading.classList.add("hide");
    //mapeando o documento json criado
    data.map((post)=>{
        //criando elementos no html
        const div = document.createElement("div");
        const title= document.createElement("h2");
        const body = document.createElement("p");
        const link = document.createElement("a");
        //inserindo conteúdo no elemento;
        title.innerText=post.title;
        body.innerText=post.body;
        link.innerText="Ler";
        //colocando o atributo href
        link.setAttribute("href",`/post.html?id=${post.id}`);
        //inserindo os elementos dentro um do outro
        div.appendChild(title)
        div.appendChild(body)
        div.appendChild(link)
        postContainer.appendChild(div);

    })
}
getALLPosts();

