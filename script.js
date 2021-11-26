const Avg = document.querySelector(".average")
const Total = document.querySelector(".total")
const avgNum = document.querySelector(".avgNum")
const sumNum = document.querySelector(".totalNum")
const cont = document.querySelector(".cont")
const modal = document.getElementById('mod')
loadJson().then(events)
async function loadJson() {
    let url = 'data.json'
    let resp = await fetch(url)
    let result = await resp.json()
    return result
}


Avg.addEventListener("click", () => {
    loadJson().then(average)
})
Total.addEventListener("click", () => {
    loadJson().then(total)

})

function total(res) {
    let sum = 0;
    res.forEach(element => {
        sum += element.salary
    });
    sumNum.innerHTML = sum
}

function average(res) {
    let sum = 0;
    let count = 0
    res.forEach(element => {
        count++
        sum += element.salary
    });
    avgNum.innerHTML = sum / count
}


function events(res) {
    let html = ""
    res.forEach(element => {
        console.log(res);

        html += `
        
            <tr>
                <th scope="row">1</th>
                <td>${element.id}</td>
                <td>${element.name}</td>
                <td>${element.salary}</td>
                <td>
                <button itype="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="veiwDetails(${element.id})">Veiw
                </button>
                </td>

            </tr>       
`
    })
    cont.innerHTML = html
}

async function veiwDetails(id) {
    let url = 'data.json'
    let resp = await fetch(url)
    let result = await resp.json()
    let html = ""
    result.forEach(element => {
        if (id == element.id) {

            html += `
            <div class="text-center">
            <img style="width: 120px; height: 120px;" src="${element.img}" class="rounded" alt="...">
          </div>
            
            <div>
             Name: ${element.name}
            </div>
                <div>
              Salary:  ${element.salary}

                 </div>
            
          
        

`
            modal.innerHTML = html

        }

    })
}
