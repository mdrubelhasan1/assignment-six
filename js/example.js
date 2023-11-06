const displayToolDetails = tool =>{
    console.log(tool);
    const modaltitle = document.getElementById('toolDetailModalLabel');
    modaltitle.innerText = tool.tool_name;
    const description = document.getElementById('description');
    description.innerHTML = `
    <p>${tool.description}</p>
    <div class="d-flex">
    <p class="text-center">$10/ <br> Month <br> Basic</p>
    <p class="text-center">$50/ <br> Month <br> Pro</p>
    <p class="text-center">Contact <br> Us <br> Enterprise</p>
    </div>
    `
}