import { ProxyState } from "../AppState.js"
import { loadState, saveState } from "../Utils/LocalStorage.js";

function _drawHouses(){
  let template = ''
  let houses = ProxyState.houses
  houses.forEach(h => template += h.Template)
  document.getElementById('listings').innerHTML = template
}

function _drawHouseForm(){
  let template = ''
  let houses = ProxyState.houses
  houses.forEach(h => template += h.Template2)
  document.getElementById('form').innerHTML = template
}



export class HousesController{
  constructor(){
    loadState()
    _drawHouses()
    _drawHouseForm()
  }
  viewHouses(){
    _drawHouses()
    _drawHouseForm()
    // swap out car form with house form
  }
}