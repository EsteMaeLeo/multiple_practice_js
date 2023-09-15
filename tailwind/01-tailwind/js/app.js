
document.addEventListener("DOMContentLoaded", ()=>{
    const toggleDark = document.getElementById('toggleDark');
    console.log(toggleDark)
    toggleDark.addEventListener('click',function(){
        if (document.documentElement.classList.contains('dark')){
            document.documentElement.classList.remove('dark')
        }else{
            document.documentElement.classList.add('dark')
        }
        alert('Dark Mode!')
    })
})