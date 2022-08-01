import { generateId } from '../Utils/generateId.js'

export class Job{
    constructor({title,pay,contact,img,description}){
        this.id = generateId()
        this.title = title,
        this.pay = pay,
        this.contact = contact,
        this.img = img,
        this.description = description
}
get Template(){
    return `
    <div class="col-4 p-2">
        <div class="bg-white elevation-2">
            <img class="img-fluid" src="${this.img}" alt="">
            <h3 class="text-center">${this.title} |Monthly: $${this.pay} </h3>
            <p>${this.description}</p>
            <p class="text-end">Contact: ${this.contact}</p>
            <button class="btn btn-danger" onclick="app.jobsController.deleteJob('${this.id}')">delete me</button>
        </div>
        
`
}
get Template2(){
    return `
    <form class="col-10 bg-white p-3 elevation-2" onsubmit="app.carsController.createJob()">
    <h3 class="text-primary">List Your Job</h3>
    <div class="row">
      <div class="col-4">
        <label class="form-label" for="make">Job Title</label>
        <input class="form-control" type="text" minlength="5" id="make" name="make">
      </div>
      <div class="col-4">
        <label class="form-label" for="year">Contact</label>
        <input class="form-control" type="text" id="year" name="year">
      </div>
      <label class="form-label" for="price">Pay</label>
      <input class="form-control" type="number" min="1" id="price" name="price">
      <label class="form-label" for="img">Image</label>
      <input class="form-control" type="text" id="img" name="img">
      <label class="form-label" for="description">Description</label>
      <textarea class="w-100 form-control" name="description" id="description" rows="5"></textarea>
      <button type="submit" class="btn btn-primary w-100 p-2 mt-3 text-light">Submit</button>
    </div>
  </form>
    `
}


}

