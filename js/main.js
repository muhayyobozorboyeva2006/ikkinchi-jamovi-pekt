const toggleBtn = document.getElementById("max-w-10 rounded-[31px] sm:hidden ");
const menyular = document.getElementById("bg-black fixed top-0 w-[50vw] h-[100vh] flex items-center justify-center flex-col gap-[30px] translate-x-[200%]");

toggleBtn.addEventListener("click" , () => {
    menyular.classList.add('translate-x-[100%]')
})
