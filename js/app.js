const loadTools = async() => {
    const url = `https://openapi.programming-hero.com/api/ai/tool/$%7Bid%7D`
    const res = await fetch(url);
    const data= await res.json();
    displayTools(data.data);
}

const displayTools = tools =>{
    const toolsContainer = document.getElementById('tools-container');
    tools.forEach(tool =>{
       const toolDiv = document.createElement('div')
        toolDiv.classList.add('col')
        toolDiv.innerHTML = `
        <div class="card">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
        </div>
        `;
        toolsContainer.appendChild(toolDiv)
    })
}

loadTools();