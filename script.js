const container = document.querySelector('.container')




const url = 'https://www.scorebat.com/video-api/v3/feed/?token=MzEzMjVfMTY2NzEzMjM5M19iZmRhYWUyN2U0ODM4MGE1NmQxM2YwNzIzYjMxMGYzNGRjNTc4YWRj'


function Api(){
    fetch(url)
        .then(res=>res.json())
            .then(data=>{
                console.log(data)

                data.response.forEach(item=>{
                    container.innerHTML += `
                    <div class='cards'>
                       <div class='img-container'> <img src="${item.thumbnail}" alt="imagem"></div>
                        <div class='text'>
                            <h2 class="title">${item.title}</h2>
                            <h3>${item.competition}</h3>
                            <a href='${item.competitionUrl}' _blank >Clique aqui para ver mais informações do jogo !</a>
                            <p>Horário : ${item.date}</p>
                        </div>
                    </div>
                    `
                })
            }).catch(error=>{
                    console.log(error)
                    container.innerHTML = 'Error in loading data'
                })
}

Api()