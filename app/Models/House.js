import { generateId } from '../Utils/generateId.js'

export class House{
    constructor({img,price,contact,bedrooms,bathrooms,description,squarefeet}){
        this.id = generateId()
        this.img = img,
        this.price = price,
        this.contact = contact,
        this.bedrooms = bedrooms,
        this.bathrooms = bathrooms,
        this.description = description,
        this.squarefeet = squarefeet
}
get Template(){
    return `
    <div class="col-4 p-2">
        <div class="bg-white elevation-2">
        <img class="img-fluid" src="${this.img}" alt="">
        <h3 class="text-center">$${this.price}| ${this.bedrooms} bedrooms | ${this.bathrooms} bathrooms | ${this.squarefeet} sq.ft </h3>
        <p>${this.description}</p>
        <p class="text-end">Contact: ${this.contact}</p>
        <button class="btn btn-danger" onclick="app.housesController.deleteHouse('${this.id}')">delete me</button>
        </div>
    </div>
`
}
get Template2(){
    return `
    <form class="col-10 bg-white p-3 elevation-2" onsubmit="app.carsController.createHouse()">
    <h3 class="text-primary">List Your House</h3>
    <div class="row">
      <div class="col-3">
        <label class="form-label" for="bedrooms">Bedrooms</label>
        <input class="form-control" type="text" minlength="5" id="make" name="make">
      </div>
      <div class="col-3">
        <label class="form-label" for="bathrooms">Bathrooms</label>
        <input class="form-control" type="text" id="model" name="model">
      </div>
      <div class="col-3">
        <label class="form-label" for="square feet">SquareFeet</label>
        <input class="form-control" type="number" id="year" name="year">
      </div>
      <div class="col-3">
      <label class="form-label" for="contact">Contact</label>
      <input class="form-control" type="number" id="year" name="year">
    </div>
      <label class="form-label" for="price">Price</label>
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

