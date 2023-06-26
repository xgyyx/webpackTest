import testSync from './testSync.js'

const btn = document.getElementById('btn')

if (btn) {
  btn.onclick = async () => {
    const result = await import('./testname.js')
  console.log(result.default, testSync)
  }
}