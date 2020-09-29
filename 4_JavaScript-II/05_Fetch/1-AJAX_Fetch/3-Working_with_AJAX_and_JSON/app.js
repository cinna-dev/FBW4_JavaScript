document.getElementById('btn1').addEventListener('click', loadCustomer)
document.getElementById('btn2').addEventListener('click', loadCustomers)

//Load Single Customer
function loadCustomer() {
    const request = new XMLHttpRequest();
    request.open('GET','customer.json',true)

    request.send()

    request.onload = function (){
        //Status : 200 - the file could be found and accessible
        if(this.status === 200){
            //console.log(this.responseText)
            //const temp = this.responseText
            //console.log(typeof temp)
            const customer = JSON.parse(this.responseText)
            //console.log(typeof customer)
            const output =`
            <ul>
                <li>ID: ${customer.id}</li>
                <li>Name: ${customer.name}</li>
                <li>Company: ${customer.company}</li>
                <li>Phone: ${customer.phone}</li>
            </ul>`
            document.getElementById('customer').innerHTML = output;
        }
    }
}

//Load Customers
function loadCustomers() {
    const request = new XMLHttpRequest();
    request.open('GET','customers.json',true)

    request.send()

    request.onload = function (){
        //Status : 200 - the file could be found and accessible
        if(this.status === 200){
            //console.log(this.responseText)
            //const temp = this.responseText
            //console.log(typeof temp)
            const customer = JSON.parse(this.responseText)
            console.log(customer)

            document.getElementById('customers').innerHTML ='';
            customer.forEach(item => {
            document.getElementById('customers').innerHTML +=`
            <ul>
                <li>ID: ${item.id}</li>
                <li>Name: ${item.name}</li>
                <li>Company: ${item.company}</li>
                <li>Phone: ${item.phone}</li>
            </ul>`
            });
            
            
        }
    }
}