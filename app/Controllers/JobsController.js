import { ProxyState } from "../AppState.js";
import { loadState, saveState } from "../Utils/LocalStorage.js";


function _drawJobs(){
  let template = ''
  let jobs = ProxyState.jobs
  jobs.forEach(j => template += j.Template)
  document.getElementById('listings').innerHTML = template
}

function _drawJobForm(){
  let template = ''
  let jobs = ProxyState.jobs
  jobs.forEach(j => template += j.Template2)
  document.getElementById('form').innerHTML = template
}

export class JobsController{
  constructor(){
    loadState()
    _drawJobs()
    _drawJobForm()
    }
  viewJobs(){
    _drawJobs()
    _drawJobForm()
}
}