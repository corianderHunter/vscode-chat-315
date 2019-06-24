const vscode = acquireVsCodeApi();
import store from './store'

window.addEventListener('message',({data:{action,value}})=>{
    store.dispatch(action,value)
})

export const postMessage= ({action,type,data})=>{
    vscode.postMessage({action,type,data})
}