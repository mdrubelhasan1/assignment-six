const loadTools = async(dataLimit) => {
  togglespinner(true);
  const url = `https://openapi.programming-hero.com/api/ai/tools`
  const res = await fetch(url);
  const data= await res.json();
  // console.log(data.data.tools[1].name);
  displayTools(data.data,dataLimit);
  
  
  
}

const displayTools = (tools, dataLimit) =>{
  console.log(tools);
  const toolsContainer = document.getElementById('tools-container');
  toolsContainer.innerText = '';

// display 6 items only:

const showAll = document.getElementById('show-all');
  if(dataLimit && tools.tools.length > 6){
  tools.tools = tools.tools.slice(0,6);
  showAll.classList.remove('d-none');
}
else{
  showAll.classList.add('d-none');
}

tools.tools.forEach(tool =>{
  const toolDiv = document.createElement('div');
  toolDiv.classList.add('col');
  toolDiv.innerHTML = `
  <div class="card p-4">
          <img class="" src="${tool.image}" class="card-img-top img-fluid" alt="...">
          <div class="card-body">
            <h5 class="card-title text-start">${tool.features[0]}}</h5>
            <hr>
            <h3>${tool.name}</h3>
            <h5>${tool.published_in}</h5>
            <button onclick="loadToolDetails('${tool.id}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#toolDetailModal">View Details</button>
           
          </div>
  </div>
 
  `;
  toolsContainer.appendChild(toolDiv);
 })
 togglespinner(false);
}

const showAllProcess = (dataLimit) =>{
togglespinner(true);
loadTools(dataLimit);
}

const togglespinner = isLoading =>{
const loaderSection = document.getElementById('loader');
if(isLoading){
  loaderSection.classList.remove('d-none');
}
else{
  loaderSection.classList.add('d-none');
}
}

document.getElementById('show-all').addEventListener('click', function(){
showAllProcess();
})
const loadToolDetails = async id =>{
const url = ` https://openapi.programming-hero.com/api/ai/tool/${id}`;
const res = await fetch(url);
const data = await res.json();
displayToolDetails(data.data)
}
const displayToolDetails = tool =>{
console.log(tool);
const modaltitle = document.getElementById('toolDetailModalLabel');
modaltitle.innerText = tool.tool_name;
const description = document.getElementById('description');
description.innerHTML = `
<p class="fw-bold">${tool.description}</p>
<div class="d-flex justify-content-between ">
<p class="text-center bg-light-subtle p-4 rounded text-success fw-bold">$10/ <br> Month <br> Basic</p>
<p class="text-center bg-light-subtle p-4 rounded text-warning fw-bold">$50/ <br> Month <br> Pro</p>
<p class="text-center bg-light-subtle p-4 rounded text-danger fw-bold">Contact <br> Us <br> Enterprise</p>
</div> 
<div class="d-flex container ">
<div class="me-4">
<p class="fs-6 fw-semibold text-start">Features</p>
<li class="fs-6 fw-semibold text-start">${tool.features[1].feature_name}</li>
<li class="fs-6 fw-semibold text-start">${tool.features[2].feature_name}</li>
<li class="fs-6 fw-semibold text-start">${tool.features[3].feature_name}</li>

</div>

<div class="ms-4">
<p class="fs-6 fw-semibold text-start">Integrations</p>
<li class="fs-6 fw-semibold text-start">${tool.integrations[0]}</li>
<li class="fs-6 fw-semibold text-start">${tool.integrations[1]}</li>
<li class="fs-6 fw-semibold text-start">${tool.integrations[2]}</li>
<li class="fs-6 fw-semibold text-start">${tool.integrations[3]}</li>
</div>

</div>
`
const summary = document.getElementById('summary');
summary.innerHTML =`
<img class="img-fluid mt-4" src="${tool.logo}" alt="">
<p class="fs-6 fw-semibold text-center">${tool.input_output_examples[0].input}</p>  
<p class="fs-6 text-center">${tool.input_output_examples[0].output}</p>  
`


}
showAllProcess(6);
